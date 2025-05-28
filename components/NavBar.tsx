"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md",
        hasScrolled ? "bg-white bg-opacity-80 shadow-sm backdrop-blur-md" : ""
      )}
    >
      <div className="p-2.5 px-5  container flex justify-between items-center mx-auto ">
        <Link href="/">
          <h1 className="font-display hidden md:block font-semibold">
            Anumah Joshua
          </h1>
        </Link>
        <h1 className="font-tertiary block md:hidden">AJE</h1>
        <ul className="flex gap-4 font-primary">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
