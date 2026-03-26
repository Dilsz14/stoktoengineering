"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import StotkoLogo from "./StotkoLogo";
import { cn } from "@/lib/utils";

const solutionsItems = [
  { href: "/solutions#feasibility-studies", label: "Feasibility Studies" },
  { href: "/solutions#turnkey-projects", label: "Turnkey Projects" },
  { href: "/solutions#plant-layout", label: "Plant Layout" },
  { href: "/solutions#design", label: "Design" },
  { href: "/solutions#project-management", label: "Project Management" },
  { href: "/solutions#installation", label: "Installation" },
  { href: "/solutions#commissioning", label: "Commissioning" },
  { href: "/solutions#modification-automation", label: "Modification & Automation" },
  { href: "/solutions#packing-palletising", label: "Packing & Palletising Plants" },
  { href: "/solutions#rail-road-loading", label: "Rail & Road Loading" },
  { href: "/solutions#transport-storage", label: "Transport & Storage" },
  { href: "/solutions#documentation", label: "Documentation" },
  { href: "/solutions#training", label: "Training for Plant Operators" },
  { href: "/solutions#spare-parts", label: "Spare Parts & Components" },
  { href: "/solutions#after-sales", label: "After Sales Service" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/mining", label: "Mining" },
  { href: "/industrial", label: "Industrial" },
  { href: "/valves", label: "Valves" },
  { href: "/printing", label: "3D Printing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "bg-stotko-black shadow-lg" : "bg-stotko-black/95")}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" onClick={() => setMobileOpen(false)} className="shrink-0">
          <StotkoLogo variant="light" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors",
                pathname === link.href ? "text-white" : "text-stotko-gray-text hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Solutions dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className={cn(
                "flex items-center gap-1 text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors",
                pathname.startsWith("/solutions") ? "text-white" : "text-stotko-gray-text hover:text-white"
              )}
            >
              Solutions
              <ChevronDown size={12} className={cn("transition-transform duration-200", solutionsOpen ? "rotate-180" : "")} />
            </button>

            {solutionsOpen && (
              <div className="absolute top-full left-0 mt-3 w-64 bg-stotko-black border border-white/10 shadow-2xl z-50">
                <div className="py-2 grid grid-cols-1">
                  {solutionsItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setSolutionsOpen(false)}
                      className="px-5 py-2.5 text-xs font-medium text-stotko-gray-text hover:text-white hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors",
                pathname === link.href ? "text-white" : "text-stotko-gray-text hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="ml-2 shrink-0 bg-white text-stotko-black px-5 py-2 text-xs font-black uppercase tracking-widest hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="xl:hidden text-white shrink-0" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-stotko-black border-t border-white/10 max-h-[80vh] overflow-y-auto">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block px-6 py-4 text-xs font-bold uppercase tracking-widest border-b border-white/5 transition-colors",
                pathname === link.href ? "text-white" : "text-stotko-gray-text hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Solutions accordion */}
          <div className="border-b border-white/5">
            <button
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className={cn(
                "w-full flex items-center justify-between px-6 py-4 text-xs font-bold uppercase tracking-widest transition-colors",
                pathname.startsWith("/solutions") ? "text-white" : "text-stotko-gray-text hover:text-white"
              )}
            >
              Solutions
              <ChevronDown size={12} className={cn("transition-transform duration-200", mobileSolutionsOpen ? "rotate-180" : "")} />
            </button>
            {mobileSolutionsOpen && (
              <div className="bg-stotko-gray border-t border-white/5">
                {solutionsItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => { setMobileOpen(false); setMobileSolutionsOpen(false); }}
                    className="block px-8 py-3 text-xs text-stotko-gray-text hover:text-white border-b border-white/5 last:border-0 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block px-6 py-4 text-xs font-bold uppercase tracking-widest border-b border-white/5 transition-colors",
                pathname === link.href ? "text-white" : "text-stotko-gray-text hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}

          <div className="p-4">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-white text-stotko-black px-5 py-3 text-xs font-black uppercase tracking-widest hover:bg-gray-200 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
