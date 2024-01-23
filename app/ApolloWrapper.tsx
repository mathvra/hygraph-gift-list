"use client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;
const uri = process.env.NEXT_PUBLIC_SANITY_ENDPOINT;

const client = new ApolloClient({
  uri: uri,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${token}`,
  },
});

export default function ApolloWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
