import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Reforma Tributária Descomplicada" },
      {
        name: "description",
        content:
          "Conheça a missão do Reforma Tributária Descomplicada: tornar acessível a informação fiscal no Brasil.",
      },
      {
        property: "og:title",
        content: "Sobre — Reforma Tributária Descomplicada",
      },
      {
        property: "og:description",
        content:
          "Conheça a missão do Reforma Tributária Descomplicada: tornar acessível a informação fiscal no Brasil.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Sobre</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Nossa missão é descomplicar a Reforma Tributária para cidadãos, empresas e contadores.
        </p>
      </div>
    </main>
  );
}
