import { defineConfig, isDev } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "./env";
import { schema } from "@/sanity/schemas";
import { ptBRLocale } from "@sanity/locale-pt-br";
import { PlayIcon } from "@sanity/icons";

const devOnlyPlugins: any[] = [];

export default defineConfig({
  basePath: "/studio",
  title: "Lista de presentes Lays e Matheus",
  projectId,
  dataset,
  icon: PlayIcon,
  schema,
  plugins: [structureTool(), ptBRLocale(), ...(isDev ? devOnlyPlugins : [])],
});
