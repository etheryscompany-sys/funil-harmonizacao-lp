import type { Metadata } from "next";
import Script from "next/script";
import ObrigadoPageEvents from "@/components/ObrigadoPageEvents";
import ObrigadoPlayerConsoleGuard from "@/components/ObrigadoPlayerConsoleGuard";

const VTURB_PLAYER_ID = "vid-696ef1b8521058214caace04";
const VTURB_PLAYER_SRC =
  "https://scripts.converteai.net/73ebb8bc-6165-42ee-9f3c-00d6e692a704/players/696ef1b8521058214caace04/v4/player.js";

export const metadata: Metadata = {
  title: "Obrigado | Ápice da Estética",
  description:
    "Assista ao vídeo com atenção. Em seguida, fique de olho no WhatsApp para o agendamento da sua Anamnese Estratégica.",
};

export default function ObrigadoPage() {
  return (
    <>
      <ObrigadoPageEvents />
      <ObrigadoPlayerConsoleGuard />
      <Script src={VTURB_PLAYER_SRC} strategy="afterInteractive" />

      <main
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(184, 132, 79, 0.14), transparent 24%), linear-gradient(180deg, #18120f 0%, #110d0c 52%, #17110f 100%)",
          color: "var(--color-text-inverse)",
        }}
      >
        <div className="grain-overlay" />

        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-40 sm:h-56"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)",
          }}
        />

        <div
          className="pointer-events-none absolute left-1/2 top-14 h-52 w-52 -translate-x-1/2 rounded-full blur-3xl sm:top-16 sm:h-[17rem] sm:w-[17rem]"
          style={{ background: "rgba(119, 94, 79, 0.16)" }}
        />

        <div
          className="pointer-events-none absolute bottom-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl sm:h-96 sm:w-96"
          style={{ background: "rgba(184, 132, 79, 0.12)" }}
        />

        <section className="relative flex min-h-[100dvh] items-center py-10 sm:py-14 lg:py-16">
          <div className="container-lp w-full">
            <div className="mx-auto flex w-full max-w-[980px] flex-col items-center text-center">
              <div className="mb-7 space-y-3 sm:mb-8 sm:space-y-4 lg:mb-9">
                <p
                  className="font-mono text-[0.68rem] uppercase tracking-[0.28em] sm:text-xs"
                  style={{ color: "rgba(212, 169, 110, 0.9)" }}
                >
                  Anamnese Estratégica
                </p>

                <div
                  className="mx-auto"
                  style={{
                    height: "1px",
                    width: "88px",
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(184, 132, 79, 0.9) 50%, transparent 100%)",
                  }}
                />

                <h1 className="mx-auto max-w-[385px] text-[1.72rem] leading-[1.02] tracking-[-0.02em] text-white sm:max-w-[560px] sm:text-[2.7rem] lg:max-w-[760px] lg:text-[3.85rem]">
                  <span className="block whitespace-nowrap">Antes de falar comigo,</span>
                  <span className="block whitespace-nowrap">você precisa</span>
                  <span className="block whitespace-nowrap">saber de uma coisa!</span>
                </h1>
              </div>

              <div className="w-full max-w-[860px]">
                <div
                  className="rounded-[1.8rem] p-2.5 sm:rounded-[2rem] sm:p-4"
                  style={{
                    border: "1px solid rgba(245, 240, 235, 0.12)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                    boxShadow:
                      "0 28px 80px rgba(0, 0, 0, 0.32), inset 0 1px 0 rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="overflow-hidden rounded-[1.25rem] sm:rounded-[1.45rem]"
                    style={{
                      border: "1px solid rgba(245, 240, 235, 0.08)",
                      background:
                        "radial-gradient(circle at top, rgba(184, 132, 79, 0.12), rgba(10, 8, 8, 0.96) 58%)",
                    }}
                  >
                    <div className="min-h-[220px] sm:min-h-[360px] lg:min-h-[460px]">
                      <vturb-smartplayer
                        id={VTURB_PLAYER_ID}
                        style={{
                          display: "block",
                          margin: "0 auto",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full px-3 py-2 sm:mt-5"
                  style={{
                    border: "1px solid rgba(245, 240, 235, 0.1)",
                    background: "rgba(245, 240, 235, 0.04)",
                  }}
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: "var(--color-accent)" }}
                  />
                  <span
                    className="font-mono text-[0.64rem] uppercase tracking-[0.18em]"
                    style={{ color: "rgba(245, 240, 235, 0.72)" }}
                  >
                    AULA LIBERADA
                  </span>
                </div>

                <p
                  className="mx-auto mt-5 max-w-[760px] text-base leading-relaxed sm:mt-6 sm:text-lg lg:mt-7 lg:text-[1.18rem]"
                  style={{ color: "rgba(245, 240, 235, 0.88)" }}
                >
                  <strong className="font-semibold text-white">
                    Se você assistiu até aqui e se identificou, você é exatamente o tipo
                    de doutora que a gente quer conversar.
                  </strong>{" "}
                  Fica de olho no WhatsApp: a gente vai te chamar nos próximos minutos
                  para agendar sua Anamnese Estratégica. Vem preparada.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
