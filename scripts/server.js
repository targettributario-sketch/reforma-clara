import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join } from "node:path";

const PORT = process.env.PORT || 3000;
const DIST_DIR = "dist/client";

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".eot": "application/vnd.ms-fontobject",
};

const serverModule = await import("../dist/server/index.mjs");
const handler = serverModule.default ?? serverModule;

function startNodeServer(listener) {
  const server = createServer(listener);
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

function nodeRequestToFetchRequest(req) {
  const url = `http://${req.headers.host}${req.url}`;
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (Array.isArray(value)) {
      for (const v of value) headers.append(key, v);
    } else if (value) {
      headers.set(key, value);
    }
  }
  return new Request(url, {
    method: req.method,
    headers,
    body: req.method !== "GET" && req.method !== "HEAD" ? req : undefined,
    duplex: "half",
  });
}

async function sendFetchResponse(res, fetchResponse) {
  res.statusCode = fetchResponse.status;
  fetchResponse.headers.forEach((value, key) => {
    if (key.toLowerCase() === "set-cookie") {
      res.setHeader(key, value.split(", "));
    } else {
      res.setHeader(key, value);
    }
  });
  const body = await fetchResponse.arrayBuffer();
  res.end(Buffer.from(body));
}

async function serveStatic(req, res) {
  const url = new URL(req.url || "/", `http://${req.headers.host}`);
  let pathname = decodeURIComponent(url.pathname);
  if (pathname.length > 1 && pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1);
  }
  const filePath = join(DIST_DIR, pathname);
  if (existsSync(filePath) && !filePath.endsWith("/")) {
    const file = await readFile(filePath);
    const ext = extname(filePath);
    res.writeHead(200, {
      "Content-Type": MIME_TYPES[ext] || "application/octet-stream",
      "Cache-Control": pathname.startsWith("/assets/")
        ? "public, max-age=31536000, immutable"
        : "public, max-age=0, must-revalidate",
    });
    res.end(file);
    return true;
  }
  const indexPath = join(DIST_DIR, "index.html");
  if (existsSync(indexPath)) {
    const indexHtml = await readFile(indexPath, "utf-8");
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(indexHtml);
    return true;
  }
  return false;
}

// Nitro node-server preset exports a Node.js request listener.
if (typeof handler === "function" && handler.length >= 2) {
  startNodeServer(handler);
}
// Nitro cloudflare/vercel/edge presets export a fetch handler.
else if (handler && typeof handler.fetch === "function") {
  startNodeServer(async (req, res) => {
    try {
      const request = nodeRequestToFetchRequest(req);
      const response = await handler.fetch(request, {}, {});
      await sendFetchResponse(res, response);
    } catch (error) {
      console.error("SSR error:", error);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  });
}
// Static fallback: serve files from dist/client (SPA output).
else {
  startNodeServer(async (req, res) => {
    try {
      const served = await serveStatic(req, res);
      if (!served) {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Not found");
      }
    } catch (error) {
      console.error("Static server error:", error);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  });
}
