"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import SocialMediaLinks from "./SocialMediaLinks";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0f1a]/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo (Acts as Home Link) */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://ejoimfdulvukutxdznem.supabase.co/storage/v1/object/public/logo_ether//logo_name2.png"
              alt="Ether Core Logo"
              width={300}
              height={100}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Keeping space where "Home" button was */}
            <div className="w-[70px]"></div>

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm transition-colors duration-300 mt-[5px] ${
                  pathname === item.href
                    ? "text-teal-400"
                    : "text-gray-300 hover:text-teal-400"
                }`}
              >
                <span className="text-[1.5rem] font-exo font-bold italic uppercase leading-none">
                  {item.name}
                </span>
              </Link>
            ))}

            {/* Button and Social Media - Flexbox Alignment */}
            <div className="flex items-center space-x-4">
              <Link
                href="/contact"
                className="px-5 py-2 text-sm bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300"
              >
                Get Started
              </Link>
              <SocialMediaLinks size={28} /> {/* Adjusted icon size */}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative group p-2 rounded-lg border border-teal-500/20 
                hover:border-teal-500/40 transition-colors duration-300"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-teal-600/10 to-blue-600/10 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
              />
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-300 group-hover:text-teal-400 transition-colors duration-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-300 group-hover:text-teal-400 transition-colors duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0a0f1a]/95 backdrop-blur-md rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base ${
                    pathname === item.href
                      ? "text-teal-400 bg-teal-900/20"
                      : "text-gray-300 hover:text-teal-400 hover:bg-teal-900/10"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-[1.5rem] font-exo font-bold italic uppercase">
                    {item.name}
                  </span>
                </Link>
              ))}

              <Link
                href="/contact"
                className="block px-3 py-2 mt-4 text-center bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
