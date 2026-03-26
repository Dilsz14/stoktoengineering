import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Mining Division | Stotko Engineering",
  description: "Shaft cable clamps, sheave wheel linings and high friction linings engineered for safety-critical mining operations.",
};

const products = [
  {
    title: "Shaft Cable Clamps",
    desc: "Self-tightening and self-adjusting cable clamps designed for the safe suspension of cables in mine shafts. Engineered for continuous adjustment across a wide cable diameter range.",
    features: [
      "Handles cables from 10mm to 100mm diameter",
      "Self-tightening under load — no manual adjustment",
      "Corrosion-proof construction for harsh environments",
      "Sheradized coating option for highly corrosive shafts",
      "ISO 9001 certified with test certificates available",
    ],
    image: "https://images.unsplash.com/photo-1578496479531-32e296d5c6e1?q=80&w=1200&auto=format&fit=crop",
    alt: "Mining shaft cable clamps",
  },
  {
    title: "Sheave Wheel Linings",
    desc: "Custom-designed and manufactured sheave wheel linings that extend rope life and protect ropes from wear on sheave rims. Manufactured to DIN 22410 standards for maximum performance.",
    features: [
      "Custom design to fit any sheave wheel geometry",
      "Extends rope service life per DIN 22410",
      "Prevents rope wear on sheave rim surfaces",
      "Allows quick conversion of existing equipment",
      "Available for surface and underground applications",
    ],
    image: "https://images.unsplash.com/photo-1558618047-f4e60c8d4927?q=80&w=1200&auto=format&fit=crop",
    alt: "Sheave wheel linings for mining",
  },
  {
    title: "High Friction Linings",
    desc: "Specialist friction linings for drum and disc brake systems in mine winding and hoisting equipment. Available in surface and underground-rated materials.",
    features: [
      "Yellow friction material for surface operations",
      "Flame-retarded material certified for underground use",
      "Contributes to longer rope life per DIN 22410",
      "Modular design for cost-effective replacement",
      "Options with or without machined rope grooves",
      "ISO 9001 certified production",
    ],
    image: "https://images.unsplash.com/photo-1565793979698-ec88c6b6eee1?q=80&w=1200&auto=format&fit=crop",
    alt: "High friction linings for mining equipment",
  },
];

const processes = [
  {
    step: "01",
    title: "Technical Consultation",
    desc: "We assess your specific shaft, winding, or hoisting requirements and existing equipment specifications.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "02",
    title: "Custom Engineering",
    desc: "Our engineers design products to your exact dimensions and loading requirements, compliant with DIN and ISO standards.",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "03",
    title: "Precision Manufacturing",
    desc: "Every component is manufactured under ISO 9001 quality management processes with full traceability.",
    image: "https://images.unsplash.com/photo-1565715101572-3ee1fe0a765d?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "04",
    title: "Testing & Certification",
    desc: "Products are tested to specification with test certificates provided. Sheradized coating applied where required.",
    image: "https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "05",
    title: "Delivery & Support",
    desc: "On-time delivery with full after-sales support and spare parts supply to keep your operation running.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
  },
];

export default function MiningPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1578496479531-32e296d5c6e1?q=80&w=2070&auto=format&fit=crop"
          alt="Mining engineering"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stotko-black via-stotko-black/65 to-stotko-black/20" />
        <div className="absolute left-0 top-0 w-1 h-full bg-white" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <p className="text-xs font-black uppercase tracking-widest text-white/50 mb-3">Stotko Engineering</p>
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase leading-none">Mining<br />Division</h1>
          <p className="mt-4 text-stotko-gray-text text-lg max-w-2xl">
            Safety-critical components engineered for South African and international mining operations.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/2">
            <p className="text-xs font-black uppercase tracking-widest text-stotko-gray-text mb-3">Our Expertise</p>
            <h2 className="text-3xl font-black text-stotko-black uppercase leading-none mb-4">Built for the Demands<br />of Deep Mining</h2>
          </div>
          <div className="md:w-1/2 text-gray-500 text-sm leading-relaxed space-y-3">
            <p>
              The mining division designs and manufactures components for shaft winding, hoisting, and cable management systems. All products comply with applicable DIN and ISO standards and are backed by full test certification.
            </p>
            <p>
              We supply mines across Southern Africa and export to mining operations internationally, with a reputation built on reliability in the most demanding conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-stotko-gray-light">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="mb-8">
            <p className="text-xs font-black uppercase tracking-widest text-stotko-gray-text mb-3">Products</p>
            <h2 className="text-3xl font-black text-stotko-black uppercase">Mining Products</h2>
          </div>
          {products.map((p, idx) => (
            <div key={p.title} className={`grid md:grid-cols-2 gap-0 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className={`relative h-72 md:h-auto overflow-hidden ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                <img src={p.image} alt={p.alt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-stotko-black/20" />
              </div>
              <div className={`bg-white p-10 flex flex-col justify-center ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="text-2xl font-black text-stotko-black uppercase mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{p.desc}</p>
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-gray-700 text-sm">
                      <CheckCircle size={13} className="text-stotko-black mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-stotko-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-3">How We Work</p>
            <h2 className="text-3xl font-black text-white uppercase">Our Process</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-0">
            {processes.map((p) => (
              <div key={p.step} className="border-r border-white/10 last:border-r-0">
                <div className="h-48 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-60 hover:opacity-90 transition-opacity" />
                </div>
                <div className="p-6">
                  <p className="text-4xl font-black text-white/10 mb-2">{p.step}</p>
                  <h4 className="text-white font-black text-sm uppercase tracking-wider mb-2">{p.title}</h4>
                  <p className="text-stotko-gray-text text-xs leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO badge + CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 border-2 border-stotko-black flex items-center justify-center">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="font-black text-stotko-black text-sm uppercase tracking-wider">ISO 9001 Certified</p>
              <p className="text-stotko-gray-text text-xs">Test certificates available on all products</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-stotko-black text-white px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-stotko-gray transition-colors"
          >
            Request a Quote <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
