import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import ApolloWrapper from "../ApolloWrapper";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from "@next/third-parties/google";

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
      <GoogleTagManager gtmId="GTM-T5VGZRXT" />
    </html>
  );
}
