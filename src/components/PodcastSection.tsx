import { Radio, Headphones } from "lucide-react";

const SPOTIFY_SHOW_ID = "2aS4RALh7e66ZNcx7jU5ec";

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.62.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

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
              href={`https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1DB954] px-6 py-3 text-base font-semibold text-white transition-all hover:bg-[#1aa34a] hover:shadow-lg"
            >
              <SpotifyIcon className="h-5 w-5" />
              Abrir no Spotify
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex aspect-[4/3] w-full flex-col items-center justify-center rounded-xl bg-secondary text-center">
              <SpotifyIcon className="h-12 w-12 text-[#1DB954]" />
              <p className="mt-4 text-lg font-semibold text-foreground">
                Reforma Tributária Descomplicada
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Podcast oficial no Spotify</p>
              <a
                href={`https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#1DB954] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1aa34a]"
              >
                <SpotifyIcon className="h-4 w-4" />
                Ouvir agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
