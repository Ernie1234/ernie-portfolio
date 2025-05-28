import { projectType } from "./PortfolioType";
import { skillType } from "./SkillsType";
import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, skillType],
};
