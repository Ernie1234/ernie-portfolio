"use client";

import { BsLinkedin } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { MdMail } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-14 lg:py-16 xl:py-20 space-y-2 md:space-y-4 lg:space-y-6">
      <div className="mx-auto flex justify-center items-center space-x-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <RiInstagramFill size={35} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Instagram</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <BsLinkedin size={28} />
            </TooltipTrigger>
            <TooltipContent>
              <p>LinkedIn</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <MdMail size={40} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Gmail</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <p className="font-primary text-center">
        Anumah Joshua Eneye {currentYear}
      </p>
    </footer>
  );
}

export default Footer;
