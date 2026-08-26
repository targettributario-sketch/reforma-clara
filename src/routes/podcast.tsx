import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/podcast")({
  head: () => ({
    meta: [
      { title: "Podcast — Reforma Tributária Descomplicada" },
      {
        name: "description",
        content:
          "Ouça o podcast Reforma Tributária Descomplicada no Spotify. Episódios curtos e claros sobre IBS, CBS e muito mais.",
      },
      {
        property: "og:title",
        content: "Podcast — Reforma Tributária Descomplicada",
      },
      {
        property: "og:description",
        content:
          "Ouça o podcast Reforma Tributária Descomplicada no Spotify. Episódios curtos e claros sobre IBS, CBS e muito mais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PodcastPage,
});

function PodcastPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Podcast</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Ouça nossa série no Spotify com explicações práticas sobre a Reforma Tributária.
        </p>
      </div>
    </main>
  );
}
