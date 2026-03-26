"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HeroSection from "@/components/ui/hero-section-9";
import { HardHat, Factory, Gauge, Printer, ArrowRight, Award, Globe, ShieldCheck } from "lucide-react";

const services = [
  {
    href: "/mining",
    icon: HardHat,
    title: "Mining Division",
    desc: "Shaft cable clamps, sheave wheel linings, and high friction linings engineered for safety-critical underground and surface mining operations.",
  },
  {
    href: "/industrial",
    icon: Factory,
    title: "Industrial Division",
    desc: "Custom bulk loading equipment, bulk storage solutions, and handling plants designed and manufactured to client specifications.",
  },
  {
    href: "/valves",
    icon: Gauge,
    title: "Valves & Flow",
    desc: "Diaphragm valves, non-return valves, air release valves, and flow switches for industrial process and fluid control applications.",
  },
  {
    href: "/printing",
    icon: Printer,
    title: "3D Printing",
    desc: "Rapid prototyping and custom part manufacturing in ABS and PLA polymers — from architectural models to functional components.",
  },
];

const credentials = [
  { icon: Award, title: "Since 1973", desc: "Over five decades of precision engineering excellence." },
  { icon: ShieldCheck, title: "BBBEE Level 2", desc: "B-BBEE certified since 2008, committed to transformation." },
  { icon: Globe, title: "Global Reach", desc: "Products distributed across North America, Eurasia, Australia and Africa." },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="bg-stotko-black">
      {/* Hero */}
      <HeroSection
        title={
          <>
            YOUR PARTNER<br />
            <span className="text-stotko-gray-text">IN PROGRESS</span>
          </>
        }
        subtitle="Stotko Engineering delivers precision engineering solutions for mining, industrial, and process industries. Trusted since 1973."
        actions={[
          { text: "Our Services", onClick: () => router.push("/mining"), variant: "white" },
          { text: "Contact Us", onClick: () => router.push("/contact"), variant: "outline-white" },
        ]}
        stats={[
          { value: "1973", label: "Established", icon: <Award size={18} /> },
          { value: "Level 2", label: "BBBEE Rated", icon: <ShieldCheck size={18} /> },
          { value: "Global", label: "Distribution", icon: <Globe size={18} /> },
        ]}
        images={[
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1565715101572-3ee1fe0a765d?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
        ]}
      />

      {/* Services grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-xs font-black uppercase tracking-widest text-stotko-gray-text mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-black text-stotko-black leading-none">ENGINEERING<br />DIVISIONS</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-gray-200">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-white p-10 hover:bg-stotko-black transition-all duration-300 flex flex-col gap-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border-2 border-stotko-black group-hover:border-white flex items-center justify-center shrink-0 transition-colors">
                    <s.icon size={22} className="text-stotko-black group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-wider text-stotko-black group-hover:text-white transition-colors mb-2">{s.title}</h3>
                    <p className="text-stotko-gray-text text-sm leading-relaxed group-hover:text-white/70 transition-colors">{s.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-stotko-gray-text group-hover:text-white transition-colors">
                  Learn More <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 px-6 bg-stotko-gray border-y border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {credentials.map((c) => (
            <div key={c.title} className="flex items-start gap-5">
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center shrink-0">
                <c.icon size={18} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-black uppercase tracking-wider text-sm mb-1">{c.title}</h3>
                <p className="text-stotko-gray-text text-sm leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
          alt="Engineering facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stotko-black/75" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-white/50 mb-4">Turnkey Engineering Solutions</p>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-none mb-8">
              FROM CONCEPT<br />TO COMMISSIONING
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-stotko-black px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-gray-200 transition-colors"
            >
              Request a Quote <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
