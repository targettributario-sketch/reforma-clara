import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/newsletter")({
  head: () => ({
    meta: [
      { title: "Newsletter — Reforma Tributária Descomplicada" },
      {
        name: "description",
        content:
          "Receba resumos semanais sobre a Reforma Tributária brasileira diretamente no seu e-mail.",
      },
      {
        property: "og:title",
        content: "Newsletter — Reforma Tributária Descomplicada",
      },
      {
        property: "og:description",
        content:
          "Receba resumos semanais sobre a Reforma Tributária brasileira diretamente no seu e-mail.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NewsletterPage,
});

function NewsletterPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Newsletter</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Cadastre-se para receber conteúdos exclusivos e atualizações sobre a Reforma Tributária.
        </p>
      </div>
    </main>
  );
}
