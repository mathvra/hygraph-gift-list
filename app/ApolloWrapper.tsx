"use client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { projectId, dataset, versionApi, token } from "@/env";

const client = new ApolloClient({
  uri: `https://${projectId}.api.sanity.io/${versionApi}/graphql/${dataset}/default`,
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
