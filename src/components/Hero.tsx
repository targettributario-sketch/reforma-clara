import { Link } from "@tanstack/react-router";
import { ArrowRight, Play, BookOpen } from "lucide-react";
import capaPodcast from "@/assets/capa-podcast-reforma-tributaria.jpg.asset.json";

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero-mesh px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
              </span>
              Acompanhando a Reforma Tributária em tempo real
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Reforma Tributária <span className="text-cyan">Descomplicada</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl text-balance">
              Notícias, explicações e fontes oficiais reunidas para você entender o IBS, a CBS e
              os impactos da Reforma Tributária no dia a dia.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/noticias"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan px-6 py-3 text-base font-semibold text-cyan-foreground transition-all hover:bg-cyan/90 hover:shadow-lg hover:shadow-cyan/20"
              >
                Ver notícias
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/educacao"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Aprender sobre IBS/CBS
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm text-white/70">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-gradient-to-br from-cyan to-white text-[10px] font-bold text-primary"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p>+10 mil leitores acompanhando</p>
            </div>
          </div>

          <div className="relative hidden lg:flex lg:justify-center">
            <div className="absolute inset-0 rounded-full bg-cyan/25 blur-3xl" />
            <div className="relative w-full max-w-md">
              <div className="aspect-square overflow-hidden rounded-full border-4 border-white/10 bg-navy shadow-2xl shadow-cyan/20">
                <img
                  src={capaPodcast.url}
                  alt="Capa do podcast Reforma Tributária Descomplicada no Spotify"
                  className="h-full w-full object-cover"
                  width={600}
                  height={600}
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 w-[90%] -translate-x-1/2 rounded-xl border border-white/10 bg-navy/90 p-4 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan text-cyan-foreground">
                    <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Podcast novo no ar</p>
                    <p className="text-xs text-white/70">Ep. 12: O que muda com o IBS?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
