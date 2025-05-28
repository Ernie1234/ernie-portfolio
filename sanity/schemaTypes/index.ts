import { projectType } from "@/sanity/schemaTypes/PortfolioType";
import { skillType } from "@/sanity/schemaTypes/SkillsType";
import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, skillType],
};
