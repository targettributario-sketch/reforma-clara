import { useState } from "react";
import { Mail, CheckCircle2, Loader2, ArrowRight, AlertCircle } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

// Inicializar Supabase
const supabaseUrl = "https://mkfvjvkxzeiaoeyisij.supabase.co";
const supabaseAnonKey = "sb_publishable_YIitly-ozkZ6ecRnYeU0aw_A4yMMUpv";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar email
    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Por favor, insira um e-mail válido.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // Inserir email na tabela 'newsletter_subscribers' do Supabase
      const { data, error } = await supabase
        .from("newsletter_subscribers")
        .insert([
          {
            email: email,
            created_at: new Date().toISOString(),
          },
        ])
        .select();

      if (error) {
        // Se for erro de duplicata, é ok (usuário já inscrito)
        if (error.code === "23505") {
          setErrorMessage("Este e-mail já está inscrito em nossa newsletter.");
          setStatus("error");
          return;
        }
        throw error;
      }

      // Sucesso! Email salvo no Supabase
      setStatus("success");
      setEmail("");

      // TODO: Enviar email de confirmação (usar SendGrid, Resend, etc)
      // Por enquanto só salvamos no banco
      
    } catch (err) {
      console.error("Erro ao inscrever na newsletter:", err);
      setStatus("error");
      setErrorMessage("Ocorreu um erro. Tente novamente em alguns momentos.");
    }
  };

  return (
    <section id="newsletter" className="bg-navy-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl bg-gradient-to-br from-primary to-navy-900 p-8 shadow-2xl shadow-primary/20 sm:p-12 lg:p-16">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              Newsletter
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Receba resumos semanais
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Fique por dentro das novidades da Reforma Tributária sem encher sua caixa de entrada.
              Conteúdo curto, direto e gratuito.
            </p>

            {status === "success" ? (
              <div className="mt-8 rounded-2xl bg-cyan/10 p-6 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-cyan" aria-hidden="true" />
                <p className="mt-3 text-lg font-semibold text-white">Inscrição confirmada!</p>
                <p className="mt-1 text-sm text-white/70">
                  Você receberá nossos resumos semanais em breve.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm font-medium text-cyan hover:underline"
                >
                  Cadastrar outro e-mail
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <label htmlFor="email-newsletter" className="sr-only">
                  Seu melhor e-mail
                </label>
                <input
                  id="email-newsletter"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="Seu melhor e-mail"
                  className="flex-1 rounded-xl border border-white/15 bg-white/10 px-5 py-3.5 text-white placeholder:text-white/50 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/30"
                  required
                  disabled={status === "loading"}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan px-6 py-3.5 text-base font-semibold text-cyan-foreground transition-all hover:bg-cyan/90 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Inscrever-se
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            )}

            {status === "error" && (
              <div className="mt-3 flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-red-300">
                <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <p className="text-sm">{errorMessage}</p>
              </div>
            )}

            <p className="mt-4 text-xs text-white/50">
              Ao se inscrever, você concorda em receber nossos e-mails. Cancele quando quiser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
