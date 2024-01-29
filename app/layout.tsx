import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ApolloWrapper from "./ApolloWrapper";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
