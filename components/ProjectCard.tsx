import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard() {
  return (
    <div className="max-w-9/10 px-3 md:px-0 md:max-w-3/4 mx-auto flex flex-col py-12 lg:py-16">
      <div className="grid md:grid-cols-2 bg-white md:max-h-96 rounded-xl overflow-hidden">
        <div className="col-span-1 justify-center items-center">
          <div className="flex flex-col h-full -mt-12 justify-center space-y-3 px-8">
            <h3 className="text-2xl font-semibold tracking-tight">
              Project name
            </h3>
            <p className="text-muted-foreground font-primary">
              I created this personal project in order to show how to create an
              interface in Figma using a portfolio as an example.
            </p>
            <Button
              variant="outline"
              className="rounded-full max-w-fit"
              asChild
            >
              <Link href="/">View Project</Link>
            </Button>
          </div>
        </div>
        <div className="flex md:col-span-1">
          <Image
            src="/images/project1.svg"
            alt="project_name"
            className="object-cover w-full"
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
}
