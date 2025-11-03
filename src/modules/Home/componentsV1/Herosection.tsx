import { ArrowDownToDot } from "lucide-react";
import Image from "next/image";
import ZoomInImage from "./ZoomInImage";
import Link from "next/link";

const Herosection = () => {
  return (
    <div className="bg-stone-200 px-6 z-10 relative">
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <p className="text-xs uppercase mb-4 text-gray-600">PORTFOLIO</p>
        <h1 className="text-xl md:text-5xl xl:text-7xl font-bold text-center">
          Harshil Bhatia
        </h1>
        <div className="mt-6 flex items-center gap-2 bg-stone-800 rounded-full p-2">
          <ArrowDownToDot className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <ZoomInImage />
      </div>

      <div className="flex flex-col items-center justify-center py-16 px-4 space-y-6">
        <h2 className="text-2xl md:text-5xl xl:text-8xl font-bold text-center tracking-tight">
          HandMade
        </h2>
        <h2 className="text-2xl md:text-5xl xl:text-8xl font-bold text-center tracking-tight">
          CREATIVE
        </h2>
        <h2 className="text-2xl md:text-5xl xl:text-8xl font-bold text-center tracking-tight">
          ART&apos;S WORK
        </h2>
      </div>
    </div>
  );
};

export default Herosection;
