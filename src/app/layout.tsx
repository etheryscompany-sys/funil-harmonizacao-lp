import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  other: {
    "facebook-domain-verification": "s8rak8u5f2thqouaswsk0w3culaqem",
  },
  title: "Anamnese Estratégica | Kathyele Joana",
  description:
    "Sessão gratuita e individual para identificar o que está impedindo sua clínica de atrair a paciente certa e fechar protocolo completo.",
  openGraph: {
    title: "Anamnese Estratégica | Kathyele Joana",
    description:
      "Sessão gratuita e individual para identificar o que está impedindo sua clínica de atrair a paciente certa e fechar protocolo completo.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          id="fb-pixel-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init','377992697994811');
              fbq('track','PageView');
            `,
          }}
        />
        <Script id="tracking-script" src="/scripts/tracking.js" strategy="afterInteractive" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=377992697994811&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Preloader />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
