import { createServer } from "node:http";
import handler from "../dist/server/index.mjs";

const PORT = process.env.PORT || 3000;

const server = createServer(handler);
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
