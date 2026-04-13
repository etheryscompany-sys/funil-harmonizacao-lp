import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import Aula100kPageEvents from "@/components/Aula100kPageEvents";
import ObrigadoPlayerConsoleGuard from "@/components/ObrigadoPlayerConsoleGuard";

const VTURB_PLAYER_ID = "vid-69a6176510258bc4a105866b";
const VTURB_PLAYER_SRC =
  "https://scripts.converteai.net/73ebb8bc-6165-42ee-9f3c-00d6e692a704/players/69a6176510258bc4a105866b/v4/player.js";

export const metadata: Metadata = {
  title: "Aula 100K | Ápice da Estética",
  description:
    "Aula exclusiva sobre como chegar aos 100 mil na harmonização facial atendendo as pacientes certas.",
};

export default function Aula100kPage() {
  return (
    <>
      <Aula100kPageEvents />
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
          className="pointer-events-none absolute inset-x-0 top-0 h-32 sm:h-44"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)",
          }}
        />

        <div
          className="pointer-events-none absolute left-[48%] top-2 h-44 w-44 -translate-x-1/2 rounded-full blur-3xl sm:top-4 sm:h-60 sm:w-60"
          style={{ background: "rgba(119, 94, 79, 0.16)" }}
        />

        <div
          className="pointer-events-none absolute bottom-14 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl sm:h-80 sm:w-80"
          style={{ background: "rgba(184, 132, 79, 0.12)" }}
        />

        <section className="relative flex min-h-[100dvh] items-center py-4 sm:py-6 lg:py-8">
          <div className="container-lp w-full">
            <div className="mx-auto flex w-full max-w-[940px] flex-col items-center text-center">
              <div className="mb-5 sm:mb-6 lg:mb-7">
                <div className="mx-auto mb-3 flex justify-center sm:mb-4 lg:mb-5">
                  <div className="relative h-[92px] w-[252px] -translate-y-[30%] transform sm:h-[108px] sm:w-[296px] sm:-translate-y-[33%] lg:h-[124px] lg:w-[340px] lg:-translate-y-[35%]">
                    <div
                      className="absolute inset-y-[30%] left-[14%] right-[26%] rounded-full blur-3xl"
                      style={{ background: "rgba(184, 132, 79, 0.12)" }}
                    />
                    <Image
                      src="/apice-da-estetica-trim.png"
                      alt="Ápice da Estética"
                      fill
                      priority
                      sizes="(max-width: 640px) 252px, (max-width: 1024px) 296px, 340px"
                      className="object-contain drop-shadow-[0_10px_28px_rgba(0,0,0,0.22)]"
                      style={{ objectPosition: "41% 50%" }}
                    />
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <p
                    className="font-mono text-[0.68rem] uppercase tracking-[0.28em] sm:text-xs"
                    style={{ color: "rgba(212, 169, 110, 0.9)" }}
                  >
                    Aula 100K
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

                  <h1 className="mx-auto max-w-[360px] text-[1.48rem] leading-[1.03] tracking-[-0.022em] text-white sm:max-w-[620px] sm:text-[2.28rem] lg:max-w-[860px] lg:text-[3.3rem]">
                    <span className="block whitespace-nowrap">COMO CHEGAR AOS 100 MIL</span>
                    <span className="block whitespace-nowrap">NA HARMONIZAÇÃO FACIAL</span>
                    <span className="block whitespace-nowrap">ATENDENDO AS</span>
                    <span className="block whitespace-nowrap">PACIENTES CERTAS</span>
                  </h1>
                </div>
              </div>

              <div className="w-full max-w-[860px]">
                <div
                  className="rounded-[1.6rem] p-2 sm:rounded-[1.9rem] sm:p-3.5"
                  style={{
                    border: "1px solid rgba(245, 240, 235, 0.12)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                    boxShadow:
                      "0 24px 64px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="overflow-hidden rounded-[1.2rem] sm:rounded-[1.4rem]"
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
                  className="mx-auto mt-3.5 inline-flex items-center gap-2 rounded-full px-3 py-2 sm:mt-4"
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
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
