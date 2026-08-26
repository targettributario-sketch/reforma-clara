import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Notícias em Tempo Real — Reforma Tributária Descomplicada" },
      {
        name: "description",
        content:
          "Acompanhe as últimas notícias sobre a Reforma Tributária brasileira: IBS, CBS e seus impactos.",
      },
      {
        property: "og:title",
        content: "Notícias em Tempo Real — Reforma Tributária Descomplicada",
      },
      {
        property: "og:description",
        content:
          "Acompanhe as últimas notícias sobre a Reforma Tributária brasileira: IBS, CBS e seus impactos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NoticiasPage,
});

function NoticiasPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Notícias</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Página dedicada às atualizações em tempo real sobre a Reforma Tributária.
        </p>
      </div>
    </main>
  );
}
