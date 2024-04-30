import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import ApolloWrapper from "../ApolloWrapper";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const raleway = Raleway({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Lays e Matheus",
  description: "Casamento de Lays e Matheus",
  formatDetection: {
    date: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${raleway.className} flex flex-col min-h-screen bg-background`}
      >
        <Toaster />
        <Analytics />
        <SpeedInsights />
        <Header />
        <div className="grow bg-background">
          <ApolloWrapper>{children}</ApolloWrapper>
        </div>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-4GQMB366NH" />
      <Script strategy="lazyOnload">
        {`    window.smartlook||(function(d) {
              var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
              var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
              c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
              })(document);
              smartlook('init', 'a0c154e4970b5a0521e6b02d8b7870795fd129c5', { region: 'eu' });
          `}
      </Script>
    </html>
  );
}
