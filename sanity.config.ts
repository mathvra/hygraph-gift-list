/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import { defineConfig, isDev } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemas";
import { ptBRLocale } from "@sanity/locale-pt-br";

const devOnlyPlugins: any[] = [];

export default defineConfig({
  basePath: "/studio",

  title: "Lista de presentes Lays e Matheus",

  projectId,
  dataset,

  schema,
  plugins: [structureTool(), ptBRLocale(), ...(isDev ? devOnlyPlugins : [])],
});
