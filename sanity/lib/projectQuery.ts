const PROJECT_QUERY = `*[
    _type == "project"
    && defined(slug.current)
  ]|order(publishedAt desc){_id, title,link,tags,description,image, slug, publishedAt}`;
const SKILL_QUERY = `*[
    _type == "skill"
  ]|order(publishedAt asc){_id, skill, image, publishedAt}`;
const options = { next: { revalidate: 30 } };

export { PROJECT_QUERY, options, SKILL_QUERY };
