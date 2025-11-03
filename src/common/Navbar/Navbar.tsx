"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Element exists on current page, scroll to it
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        toggleMenu();
      } else {
        // Element doesn't exist on current page, navigate to home page with hash
        window.location.assign(`/${href}`);
      }
    } else {
      // For regular links (like "/" and "/gallery"), close the menu
      toggleMenu();
    }
  };

  const menuVariants: Variants = {
    closed: {
      x: "150%",
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    open: {
      x: "0%",
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, x: 100 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  };

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "/gallery", label: "GALLERY" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <>
      <nav className="fixed top-0 right-0 z-50 flex justify-between items-center p-6 md:p-8 mix-blend-difference">
        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="relative w-12 h-12 z-50 flex flex-col justify-center items-center group  "
          aria-label="Toggle menu"
        >
          <motion.span
            className="w-8 h-0.5 bg-white block mb-1.5 origin-center"
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="w-8 h-0.5 bg-white block mb-1.5"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="w-8 h-0.5 bg-white block origin-center"
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </button>
      </nav>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed z-30 -top-14 right-0 md:right-14 w-[280px] rotate-0 md:rotate-12 h-[120vh] bg-black"
          >
            <div className="flex flex-col justify-center items-center h-full">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  custom={i}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="mt-10"
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="text-white text-2xl md:text-4xl font-medium italic hover:text-gray-300 transition-colors duration-300 tracking-wide"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
