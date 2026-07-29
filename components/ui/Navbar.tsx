"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state
      setScrolled(window.scrollY > 20);

      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Dashboard Demo", href: "/dashboard" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(path);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-white/85 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-md shadow-slate-100/10"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-poppins font-bold tracking-tight text-slate-900 flex items-center">
                Bizvelo<span className="text-blue-600">Tech</span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-blue-600 font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Button href="/contact?type=demo" variant="primary" size="sm" className="group">
                <span>Get Free Demo</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none p-1.5"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 absolute top-full left-0 w-full animate-fade-in-up shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3 flex flex-col gap-3">
                <Button 
                  href="/contact?type=demo" 
                  variant="primary" 
                  size="md" 
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center"
                >
                  Get Free Demo
                </Button>
                <Button 
                  href="https://wa.me/919677350853" 
                  variant="outline" 
                  size="md" 
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center"
                >
                  WhatsApp Chat
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
