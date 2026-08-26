import { Radio, Headphones, Spotify } from "lucide-react";

export function PodcastSection() {
  return (
    <section id="podcast" className="bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">
              <Radio className="h-3.5 w-3.5" aria-hidden="true" />
              Podcast
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ouça no Spotify
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Episódios curtos para entender a Reforma Tributária no seu tempo. Explicações claras
              sobre IBS, CBS e tudo que muda no sistema tributário brasileiro.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Episódios de 10 a 15 minutos",
                "Linguagem simples, sem juridiquês",
                "Atualizações toda semana",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <Headphones className="h-5 w-5 text-cyan" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="https://open.spotify.com/show/example-reforma-tributaria"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1DB954] px-6 py-3 text-base font-semibold text-white transition-all hover:bg-[#1aa34a] hover:shadow-lg"
            >
              <Spotify className="h-5 w-5" aria-hidden="true" />
              Abrir no Spotify
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-2 shadow-sm">
            <iframe
              title="Podcast Reforma Tributária Descomplicada no Spotify"
              src="https://open.spotify.com/embed/show/example-reforma-tributaria?utm_source=generator"
              width="100%"
              height="352"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
