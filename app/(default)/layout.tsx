import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import ApolloWrapper from "../ApolloWrapper";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import "../globals.css";

const raleway = Raleway({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Lays e Matheus",
  description: "Casamento de Lays e Matheus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${raleway.className}`}>
        <Analytics />
        <Header />
        <div>
          <ApolloWrapper>{children}</ApolloWrapper>
        </div>
        <Footer />
      </body>
    </html>
  );
}
