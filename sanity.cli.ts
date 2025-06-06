/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { defineCliConfig } from "sanity/cli";

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.SANITY_STUDIO_SANITY_PROJECT_ID;
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  process.env.SANITY_STUDIO_SANITY_DATASET;
const studioHost = process.env.NEXT_PUBLIC_SANITY_STUDIO_HOSTNAME;

export default defineCliConfig({
  api: { projectId, dataset },
  studioHost: studioHost,
});
