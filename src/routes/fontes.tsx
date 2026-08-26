import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/fontes")({
  head: () => ({
    meta: [
      { title: "Fontes Oficiais — Reforma Tributária Descomplicada" },
      {
        name: "description",
        content:
          "Radar de fontes oficiais sobre a Reforma Tributária: Receita Federal, Congresso Nacional, STF e mais.",
      },
      {
        property: "og:title",
        content: "Fontes Oficiais — Reforma Tributária Descomplicada",
      },
      {
        property: "og:description",
        content:
          "Radar de fontes oficiais sobre a Reforma Tributária: Receita Federal, Congresso Nacional, STF e mais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FontesPage,
});

function FontesPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Fontes Oficiais</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Acesse diretamente os órgãos e canais oficiais que regulam e informam sobre a Reforma Tributária.
        </p>
      </div>
    </main>
  );
}
