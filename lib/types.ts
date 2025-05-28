import { SanityDocument } from "next-sanity";

// types/project.d.ts or directly in your file
export interface ISanityProject extends SanityDocument {
  _id: string;
  title: string;
  link: string;
  slug: {
    current: string;
    _type: string;
  };
  publishedAt: string;
  description: string;
  tags: string[];
  image: { asset: { _ref: string; _type: string }; _type: string };
}
export interface ISanitySkill extends SanityDocument {
  _id: string;
  skill: string;
  publishedAt: string;
  image: { asset: { _ref: string; _type: string }; _type: string };
}
