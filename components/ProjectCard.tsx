import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { options, PROJECT_QUERY } from "@/sanity/lib/projectQuery";
import { ISanityProject } from "@/lib/types";
import { FALLBACK_IMAGE } from "@/lib/utils";

export default async function ProjectCard() {
  const projects = await client.fetch<ISanityProject[]>(
    PROJECT_QUERY,
    {},
    options
  );

  console.log("Fetched Projects: ", projects);

  return (
    <div className="max-w-9/10 px-3 md:px-0 md:max-w-3/4 mx-auto flex flex-col py-12 lg:py-16">
      {projects.map((project) => {
        const imageUrl = project.image
          ? urlFor(project.image)?.width(550).height(310).url()
          : FALLBACK_IMAGE;
        return (
          <article
            className="grid md:grid-cols-2 bg-white md:h-96 rounded-xl overflow-hidden"
            key={project._id}
          >
            <div className="col-span-1 justify-center items-center">
              <div className="flex flex-col h-full justify-center space-y-3 px-8">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-primary">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project?.tags.map((tag) => (
                    <div
                      key={tag}
                      className="px-5 text-sm py-1 text-secondary font-primary bg-slate-100 hover:bg-slate-50 rounded-full capitalize"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="rounded-full max-w-fit"
                  asChild
                >
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex md:col-span-1">
              <Image
                src={imageUrl}
                alt={project.title}
                className="object-cover w-full"
                height={500}
                width={500}
              />
            </div>
          </article>
        );
      })}
    </div>
  );
}
