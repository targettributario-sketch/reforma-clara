import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/educacao")({
  head: () => ({
    meta: [
      { title: "Educação Fiscal — Reforma Tributária Descomplicada" },
      {
        name: "description",
        content:
          "Aprenda sobre IBS, CBS e os principais conceitos da Reforma Tributária de forma descomplicada.",
      },
      {
        property: "og:title",
        content: "Educação Fiscal — Reforma Tributária Descomplicada",
      },
      {
        property: "og:description",
        content:
          "Aprenda sobre IBS, CBS e os principais conceitos da Reforma Tributária de forma descomplicada.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EducacaoPage,
});

function EducacaoPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Educação Fiscal</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Conteúdos educativos para entender a nova realidade tributária do Brasil.
        </p>
      </div>
    </main>
  );
}
