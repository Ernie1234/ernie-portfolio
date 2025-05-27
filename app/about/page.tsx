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
          <p className="text-muted-foreground font-display">
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </p>
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
