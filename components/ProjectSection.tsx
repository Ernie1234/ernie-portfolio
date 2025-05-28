import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectSection() {
  return (
    <div className="flex flex-col items-center">
      <p className="font-tertiary text-lg md:text-xl lg:text-4xl font-semibold text-center">
        P
        <span className="underline underline-offset-12 decoration-primary">
          rojec
        </span>
        ts
      </p>
      <ProjectCard />
    </div>
  );
}

export default ProjectSection;
