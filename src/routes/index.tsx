import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/Hero";
import { NewsSection } from "../components/NewsSection";
import { EduCards } from "../components/EduCards";
import { RadarSection } from "../components/RadarSection";
import { Newsletter } from "../components/Newsletter";
import { PodcastSection } from "../components/PodcastSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reforma Tributária Descomplicada — Notícias, IBS, CBS e Fontes Oficiais" },
      {
        name: "description",
        content:
          "Acompanhe a Reforma Tributária brasileira de forma clara. Notícias em tempo real, cards educativos sobre IBS/CBS, radar de fontes oficiais, podcast e newsletter.",
      },
      {
        property: "og:title",
        content: "Reforma Tributária Descomplicada — Notícias, IBS, CBS e Fontes Oficiais",
      },
      {
        property: "og:description",
        content:
          "Acompanhe a Reforma Tributária brasileira de forma clara. Notícias em tempo real, cards educativos sobre IBS/CBS, radar de fontes oficiais, podcast e newsletter.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <NewsSection />
      <EduCards />
      <RadarSection />
      <PodcastSection />
      <Newsletter />
    </>
  );
}
