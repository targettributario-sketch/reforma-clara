import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Newspaper, Clock, ArrowRight, TrendingUp, AlertCircle, FileText } from "lucide-react";

const newsItems = [
  {
    id: 1,
    category: "Legislação",
    icon: FileText,
    title: "Comissão mista aprova novo texto da Reforma Tributária",
    summary:
      "Deputados e senadores consolidam pontos sobre IBS e CBS; texto segue para análise do plenário.",
    time: "Há 2 horas",
    tag: "Destaque",
  },
  {
    id: 2,
    category: "Economia",
    icon: TrendingUp,
    title: "Impactos do IBS nos setores de serviços são debatidos em audiência",
    summary:
      "Especialistas discutem alíquotas efetivas e a transição para o novo regime tributário.",
    time: "Há 5 horas",
    tag: null,
  },
  {
    id: 3,
    category: "Alerta",
    icon: AlertCircle,
    title: "Prazos de adaptação para empresas: o que já está definido",
    summary:
      "Calendário de transição começa a ser detalhado pela Receita Federal para contribuintes.",
    time: "Há 8 horas",
    tag: "Importante",
  },
];

export function NewsSection() {
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    setLastUpdated(
      new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
    );
  }, []);

  return (
    <section id="noticias" className="bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">
              <Newspaper className="h-3.5 w-3.5" aria-hidden="true" />
              Notícias em tempo real
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              O que está acontecendo agora
            </h2>
            <p className="mt-2 text-muted-foreground">
              Fique por dentro das últimas movimentações sobre a Reforma Tributária.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {lastUpdated ? `Atualizado às ${lastUpdated}` : "Atualizando…"}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 card-hover"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan">
                  {item.category}
                </span>
                {item.tag && (
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-card-foreground group-hover:text-cyan">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.summary}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {item.time}
                </span>
                <span className="text-xs font-medium text-cyan">Ler mais</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/noticias"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Ver todas as notícias
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
