import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  ArrowRight,
  Layers,
  Building2,
  ShoppingCart,
  Scale,
  Receipt,
} from "lucide-react";

const cards = [
  {
    icon: Receipt,
    title: "O que é o IBS?",
    description:
      "Imposto sobre Bens e Serviços: o novo tributo de competência dos estados e municípios que vai unificar ICMS e ISS.",
    tags: ["Estados", "Municípios"],
  },
  {
    icon: Building2,
    title: "O que é a CBS?",
    description:
      "Contribuição sobre Bens e Serviços: o tributo de competência da União que substituirá PIS, COFINS, IPI e CSLL.",
    tags: ["União", "Empresas"],
  },
  {
    icon: Layers,
    title: "IBS e CBS juntos",
    description:
      "A soma do IBS e da CBS forma a nova carga tributária sobre bens e serviços no Brasil. Entenda como funcionam.",
    tags: ["Dual VAT"],
  },
  {
    icon: ShoppingCart,
    title: "Impacto no consumidor",
    description:
      "Veja como a reforma pode alterar preços finais, cesta básica e o custo de vida das famílias.",
    tags: ["Cidadão"],
  },
  {
    icon: Scale,
    title: "Impacto nas empresas",
    description:
      "Descubra as mudanças na contabilidade, no crédito tributário e na gestão fiscal das companhias.",
    tags: ["Negócios"],
  },
  {
    icon: BookOpen,
    title: "Cronograma de transição",
    description:
      "Acompanhe as etapas de implementação da reforma e os prazos que empresas e governos precisam cumprir.",
    tags: ["Calendário"],
  },
];

export function EduCards() {
  return (
    <section id="educacao" className="bg-navy-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">
            <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
            Educação Fiscal
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            IBS e CBS descomplicados
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Cards didáticos para você entender os principais conceitos da Reforma Tributária sem
            enrolação.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 card-hover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <card.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-card-foreground">{card.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/educacao"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explorar conteúdos educativos
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
