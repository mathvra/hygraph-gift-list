import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import ApolloWrapper from "../ApolloWrapper";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
      <body className={`${raleway.className} container mx-auto`}>
        <Analytics />
        <Header />
        <ApolloWrapper>{children}</ApolloWrapper>
        <Footer />
      </body>
    </html>
  );
}
