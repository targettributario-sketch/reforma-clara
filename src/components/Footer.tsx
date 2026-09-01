import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import capaPodcast from "@/assets/capa-podcast-reforma-tributaria.jpg.asset.json";

const links = {
  conteudo: [
    { to: "/noticias", label: "Notícias" },
    { to: "/educacao", label: "Educação Fiscal" },
    { to: "/fontes", label: "Fontes Oficiais" },
    { to: "/podcast", label: "Podcast" },
  ],
  institucional: [
    { to: "/sobre", label: "Sobre" },
    { to: "/newsletter", label: "Newsletter" },
    { to: "/", label: "Política de Privacidade" },
    { to: "/", label: "Termos de Uso" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-navy-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-cyan/40 shadow-sm shadow-cyan/10">
                <img
                  src={capaPodcast.url}
                  alt="Logo Reforma Tributária Descomplicada"
                  className="h-full w-full object-cover"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold leading-tight text-foreground">
                  Reforma Tributária
                </span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-cyan">
                  Descomplicada
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Informação clara, atualizada e acessível sobre a Reforma Tributária brasileira.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Conteúdo
            </h3>
            <ul className="mt-4 space-y-3">
              {links.conteudo.map((link) => (
                <li key={link.to + link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-cyan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Institucional
            </h3>
            <ul className="mt-4 space-y-3">
              {links.institucional.map((link) => (
                <li key={link.to + link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-cyan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contato
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                <a href="mailto:targettributario@gmail.com" className="hover:text-cyan">
                  targettributario@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                Brasil
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                Atendimento via e-mail
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Reforma Tributária Descomplicada. Conteúdo educativo.
          </p>
          <p className="text-xs text-muted-foreground">
            Não substitui orientação de contador ou advogado tributarista.
          </p>
        </div>
      </div>
    </footer>
  );
}
