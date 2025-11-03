import React from "react";
import { LucideLinkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function UpperFooter() {
  return (
    <footer className="flex flex-col items-center justify-center py-6">
      <div className="mb-6">
        <Image height={500} width={500} quality={85} className="w-32 object-contain" src="/images/logo.png" alt="Harshil Bhaita" />
      </div>

      <div className="flex flex-row items-center justify-center gap-6 mb-6">
        <Link
          href="https://www.linkedin.com/in/harshil-bhatia-180728264"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LucideLinkedin size={32} className="text-black hover:text-blue-700 transition-colors" />
        </Link>
      </div>

      <div>
        <span className="text-xs tracking-widest text-neutral-700 font-medium">
          ALL RIGHTS RESERVED. © HARSHIL BHATIA
        </span>
      </div>
    </footer>
  );
}

export default UpperFooter;