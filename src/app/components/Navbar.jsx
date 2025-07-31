"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { useTheme } from "next-themes";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e) => {
      if (e.clientY < 80) setShowNavbar(true);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full z-50 transition-transform duration-300 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-white border-black border-y-[1px] dark:bg-[#0f0f0f]/90 backdrop-blur-md fixed top-0`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-2 lg:py-5">
        <Link href="/" className="font-bold text-xl text-[#181818] dark:text-white">
          Parmeet Kaur
        </Link>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.path} title={link.title} />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            aria-label="Toggle Theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-black dark:text-white"
          >
            {theme === "dark" ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>

          <div className="md:hidden">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="text-black dark:text-white"
              aria-label="Toggle Menu"
            >
              {navbarOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

      </div>
      

      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
