import { ISanitySkill } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { options, SKILL_QUERY } from "@/sanity/lib/projectQuery";
import Image from "next/image";

async function SkillSection() {
  const technologies = await client.fetch<ISanitySkill[]>(
    SKILL_QUERY,
    {},
    options
  );

  return (
    <div className="flex flex-col items-center">
      <p className="font-tertiary text-lg md:text-xl lg:text-4xl font-semibold text-center">
        S
        <span className="underline underline-offset-12 decoration-primary">
          ki
        </span>
        ll
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 mt-12 gap-4">
        {technologies.map((tech) => {
          const imageUrl = tech.image
            ? urlFor(tech.image)?.width(550).height(310).url()
            : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.svgrepo.com%2Fsvg%2F508699%2Flandscape-placeholder&psig=AOvVaw2BL212D55BwOlfM5mNyB8e&ust=1748520368252000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJD0sY2Qxo0DFQAAAAAdAAAAABAE";
          return (
            <div
              className="flex flex-col justify-between items-center space-y-2"
              key={tech.title}
            >
              <Image
                src={imageUrl}
                alt={tech.title}
                className="object-contain w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                width={100}
                height={100}
              />
              <p className="font-primary">{tech.skill}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillSection;
