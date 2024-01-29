"use client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { projectId, dataset, versioApi, token } from "../env";

const client = new ApolloClient({
  uri: `https://${projectId}.api.sanity.io/${versioApi}/graphql/${dataset}/default`,
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
