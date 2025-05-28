import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { options, SKILL_QUERY } from "@/sanity/lib/projectQuery";
import { FALLBACK_IMAGE } from "@/lib/utils";
import { ISanitySkill } from "@/lib/types";

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
            : FALLBACK_IMAGE;
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
