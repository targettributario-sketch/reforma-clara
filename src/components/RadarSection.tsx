import { Link } from "@tanstack/react-router";
import { Scale, ArrowUpRight, ExternalLink } from "lucide-react";

const sources = [
  {
    name: "Receita Federal",
    description: "Normas, perguntas frequentes e orientações sobre a Reforma Tributária.",
    url: "https://www.gov.br/receitafederal/pt-br",
    color: "bg-blue-600",
  },
  {
    name: "Congresso Nacional",
    description: "Acompanhe projetos de lei, comissões e votações sobre a reforma.",
    url: "https://www.congressonacional.leg.br/",
    color: "bg-green-600",
  },
  {
    name: "Senado Federal",
    description: "Notícias, relatórios e análises do Senado sobre o novo sistema tributário.",
    url: "https://www12.senado.leg.br/",
    color: "bg-emerald-700",
  },
  {
    name: "Câmara dos Deputados",
    description: "Propostas, audiências e documentos oficiais dos deputados federais.",
    url: "https://www.camara.leg.br/",
    color: "bg-teal-700",
  },
  {
    name: "STF",
    description: "Decisões judiciais e repercussões da reforma no Supremo Tribunal Federal.",
    url: "https://portal.stf.jus.br/",
    color: "bg-indigo-700",
  },
  {
    name: "Ministério da Fazenda",
    description: "Estudos técnicos e comunicados oficiais sobre a transição tributária.",
    url: "https://www.fazenda.gov.br/",
    color: "bg-slate-700",
  },
];

export function RadarSection() {
  return (
    <section id="fontes" className="bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">
              <Scale className="h-3.5 w-3.5" aria-hidden="true" />
              Radar de Fontes
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Fontes oficiais
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Acesse diretamente os órgãos que produzem e regulam as informações sobre a Reforma
              Tributária.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Todos os links levam a sites governamentais. Não nos responsabilizamos por mudanças
              nos endereços.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2">
              {sources.map((source) => (
                <a
                  key={source.name}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-cyan/30 hover:bg-navy-50"
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white ${source.color}`}
                  >
                    <span className="text-xs font-bold">{source.name.slice(0, 2)}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-semibold text-card-foreground">{source.name}</h3>
                      <ExternalLink
                        className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{source.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
