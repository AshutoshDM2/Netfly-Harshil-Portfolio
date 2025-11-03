import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { usePageTransition } from "@/context/PageTransitionContext";

const ZoomInImage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { startTransition } = usePageTransition();

  gsap.registerPlugin(ScrollTrigger);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    startTransition("/gallery", { x, y });
  };

  useGSAP(
    () => {
      if (!containerRef.current || !imageRef.current) return;

      const scrollAnimation = gsap.fromTo(
        imageRef.current,
        {
          scale: 0.8,
        },
        {
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        }
      );

      // Cleanup function
      return () => {
        scrollAnimation.kill();
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === containerRef.current) {
            trigger.kill();
          }
        });
      };
    },
    { scope: containerRef }
  );
  return (
    <div ref={containerRef}>
      <div ref={imageRef} className="relative rounded-[40px] overflow-hidden h-[600px]">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button 
            onClick={handleClick}
            className="bg-stone-800 text-white px-8 py-12 rounded-full uppercase hover:bg-stone-700 transition-all duration-300 cursor-pointer font-mileast-italic text-xl tracking-widest hover:scale-105"
          >
            Enter The Gallery
          </button>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1558865869-c93f6f8482af"
          alt="Harshil Bhatia"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default ZoomInImage;
