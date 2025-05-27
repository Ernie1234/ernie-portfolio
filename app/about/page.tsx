import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-dvh h-full justify-between flex-col flex">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 container mx-auto mt-16">
        <div className="flex flex-1 flex-col space-y-4 justify-center px-5">
          <p className="font-tertiary text-lg md:text-xl lg:text-4xl font-semibold">
            About me
          </p>
          <div className="flex flex-col space-y-2 text-sm">
            <p className="text-muted-foreground font-display">
              I&apos;m a passionate software engineer with a Telecommunications
              Engineering background, I bring together 5+ years of professional
              experience and 8 years of continuous learning in software
              development. I specialize in building intuitive, user-centric
              software solutions that deliver exceptional experiences.
            </p>
            <p className="text-muted-foreground font-display">
              Currently serving as a Software Engineer at OPEX Consulting, I
              thrive in collaborative environments where I can partner with
              creative teams to bring innovative ideas to life. My technical
              expertise centers around JavaScript, TypeScript, and Go, though I
              maintain versatility across multiple programming languages.
            </p>
            <p className="text-muted-foreground font-display">
              With a strong appreciation for minimalist design principles, I
              create clean, efficient interfaces that prioritize usability.
              Beyond coding, I&apos;m deeply inspired by exceptional music,
              thought-provoking cinema, immersive gaming experiences, culinary
              arts, and meaningful human connections.
            </p>
            <p className="text-muted-foreground font-display">
              I&apos;m driven by a dual mission: to inspire others through my
              work while remaining open to inspiration from the world around me.
              My professional philosophy emphasizes pursuing worthwhile
              challenges with dedication and surrounding myself with individuals
              who elevate collective potential.
            </p>
          </div>
          <div className="flex gap-4">
            <Button>Resume</Button>
          </div>
        </div>
        <div className="flex-1 order-1 md:order-2 justify-center items-center flex">
          <Image
            src="/images/bg-2.svg"
            alt="hero-img"
            className="object-contain"
            height={500}
            width={500}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
