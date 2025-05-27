import React from "react";
import Image from "next/image";

import { Button } from "./ui/button";

function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between min-h-[75vh]">
      <div className="md:ml-16 ml-0 px-8 md:px-0 mt-12 flex-1 self-center order-2 md:order-1">
        <h3 className="text-primary text-lg lg:text-xl font-semibold font-primary">
          SOFTWARE ENGINEER
        </h3>
        <h1 className="scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight lg:text-5xl text-shadow my-4 lg:my-6 font-tertiary">
          Hello, my name is Anumah Joshua Eneye
        </h1>
        <p className="lg:text-base text-muted-foreground font-display my-4">
          I&apos;m a passionate software engineer with a Telecommunications
          Engineering background, blending 5+ years of professional experience
          and 8 years of continuous learning to build intuitive, user-centric
          solutions. Currently at OPEX Consulting, I specialize in JavaScript,
          TypeScript, and Go.
        </p>
        <div className="flex gap-4">
          <Button>Resume</Button>
          <Button variant="outline">LinkedIn</Button>
        </div>
      </div>
      <div className="flex-1 order-1 md:order-2 self-end md:self-start justify-end flex">
        <Image
          src="/images/image-ernie.svg"
          alt="hero-img"
          className="object-contain object-top"
          height={500}
          width={500}
        />
      </div>
    </div>
  );
}

export default Header;
