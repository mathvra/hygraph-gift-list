import { createClient } from "next-sanity";

import { dataset, projectId, useCdn } from "../../env";

export const client = createClient({
  dataset,
  projectId,
  useCdn,
});
