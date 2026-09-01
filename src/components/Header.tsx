import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Scale, Newspaper, BookOpen, Radio, Mail, Home, ExternalLink, ChevronDown } from "lucide-react";
import capaPodcast from "@/assets/capa-podcast-reforma-tributaria.jpg.asset.json";

const navItems = [
  { to: "/", label: "Início", icon: Home },
  { to: "/noticias", label: "Notícias", icon: Newspaper },
  { to: "/educacao", label: "Educação", icon: BookOpen },
  { to: "/fontes", label: "Fontes", icon: Scale },
  { to: "/podcast", label: "Podcast", icon: Radio },
  { to: "/newsletter", label: "Newsletter", icon: Mail },
];

const SIMULADOR_URL = "https://amused-purpose-production-609a.up.railway.app/";

const linkBaseClass =
  "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors";
const linkInactiveClass = "text-muted-foreground hover:bg-secondary hover:text-foreground";
const linkActiveClass = "bg-secondary text-foreground";

function scrollToNewsletter() {
  const el = document.getElementById("newsletter");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-cyan/40 shadow-sm shadow-cyan/10">
            <img
              src={capaPodcast.url}
              alt="Capa do podcast Reforma Tributária Descomplicada"
              className="h-full w-full object-cover"
              width={36}
              height={36}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold leading-tight tracking-tight text-foreground sm:text-base">
              Reforma Tributária
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-cyan">
              Descomplicada
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: `${linkBaseClass} ${linkActiveClass}` }}
              inactiveProps={{ className: `${linkBaseClass} ${linkInactiveClass}` }}
            >
              <item.icon className="h-4 w-4" aria-hidden="true" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/newsletter"
            className="inline-flex items-center justify-center rounded-md bg-cyan px-4 py-2 text-sm font-semibold text-cyan-foreground transition-colors hover:bg-cyan/90"
          >
            Receba resumos
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((p) => !p)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                activeProps={{ className: `${linkBaseClass} ${linkActiveClass}` }}
                inactiveProps={{ className: `${linkBaseClass} ${linkInactiveClass}` }}
              >
                <item.icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </Link>
            ))}
            <Link
              to="/newsletter"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-cyan px-4 py-3 text-sm font-semibold text-cyan-foreground transition-colors hover:bg-cyan/90"
            >
              Receba resumos
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
