import React from "react";
import Link from "next/link";
import StotkoLogo from "./StotkoLogo";
import { MapPin, Phone, PrinterIcon, Mail } from "lucide-react";

const serviceLinks = [
  { href: "/mining", label: "Mining Division" },
  { href: "/industrial", label: "Industrial Division" },
  { href: "/valves", label: "Valves & Flow" },
  { href: "/printing", label: "3D Printing" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-stotko-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <StotkoLogo variant="light" />
          <p className="mt-6 text-stotko-gray-text text-sm leading-relaxed">
            Your partner in progress. Delivering precision engineering solutions across mining, industrial, and process industries since 1973.
          </p>
          <p className="mt-4 text-xs text-white/30 uppercase tracking-widest">BBBEE Level 2 Certified</p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-xs font-black uppercase tracking-widest mb-6">Services</h4>
          <ul className="space-y-3">
            {serviceLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-stotko-gray-text text-sm hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white text-xs font-black uppercase tracking-widest mb-6">Company</h4>
          <ul className="space-y-3">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-stotko-gray-text text-sm hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-xs font-black uppercase tracking-widest mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-stotko-gray-text text-sm">
              <MapPin size={14} className="text-white mt-0.5 shrink-0" />
              <span>13 Langwa Street, Strijdompark, 2194</span>
            </li>
            <li className="flex items-center gap-3 text-stotko-gray-text text-sm">
              <Phone size={14} className="text-white shrink-0" />
              <a href="tel:+27117937164" className="hover:text-white transition-colors">+27 (0) 11 793-7164</a>
            </li>
            <li className="flex items-center gap-3 text-stotko-gray-text text-sm">
              <PrinterIcon size={14} className="text-white shrink-0" />
              <span>+27 (0) 11 792-1820</span>
            </li>
            <li className="flex items-center gap-3 text-stotko-gray-text text-sm">
              <Mail size={14} className="text-white shrink-0" />
              <a href="mailto:info@stotkoengineering.co.za" className="hover:text-white transition-colors">info@stotkoengineering.co.za</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-stotko-gray-text text-xs">© {new Date().getFullYear()} Stotko Engineering (Pty) Ltd. All rights reserved.</p>
        <p className="text-white/20 text-xs uppercase tracking-widest">Your Partner in Progress</p>
      </div>
    </footer>
  );
}
