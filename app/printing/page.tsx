import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  title: "3D Printing | Stotko Engineering",
  description: "Rapid prototyping and custom 3D printing in ABS and PLA — architectural models, parts, and marketing products.",
};

const capabilities = [
  { label: "Max Build Size", value: "200 × 200 × 200 mm" },
  { label: "Materials", value: "ABS & PLA Polymers" },
  { label: "Available Colours", value: "White, Red, Blue, Black" },
  { label: "File Formats", value: "3D CAD or STL" },
  { label: "Pricing", value: "On request — custom quotes" },
];

const applications = [
  {
    title: "Architectural Models",
    desc: "Detailed scale models of buildings and structures for presentations, planning approvals, and client visualisation.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Functional Prototypes",
    desc: "Engineering prototypes for fit and function testing before committing to full production tooling.",
    image: "https://images.unsplash.com/photo-1631558978612-f49c05bb85b3?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Replacement Parts",
    desc: "Custom or obsolete parts reproduced in ABS or PLA for machinery, equipment, and products where originals are unavailable.",
    image: "https://images.unsplash.com/photo-1565715101572-3ee1fe0a765d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Marketing Products",
    desc: "Branded models, display pieces, and promotional items produced to exact specification for exhibitions and presentations.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
  },
];

const processes = [
  {
    step: "01",
    title: "Submit Your File",
    desc: "Send us your 3D CAD file or STL. We accept all major CAD formats and will advise on any print preparation required.",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "02",
    title: "Quote & Confirm",
    desc: "We assess your file, confirm material and colour selection, and provide a fixed quote before any work begins.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "03",
    title: "Print & Inspect",
    desc: "Your part is printed, inspected for dimensional accuracy, and cleaned before dispatch.",
    image: "https://images.unsplash.com/photo-1631558978612-f49c05bb85b3?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "04",
    title: "Delivery",
    desc: "Finished prints are carefully packaged and delivered or collected from our Strijdompark facility.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
  },
];

export default function PrintingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1631558978612-f49c05bb85b3?q=80&w=2070&auto=format&fit=crop"
          alt="3D printing service"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stotko-black via-stotko-black/65 to-stotko-black/20" />
        <div className="absolute left-0 top-0 w-1 h-full bg-white" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <p className="text-xs font-black uppercase tracking-widest text-white/50 mb-3">Stotko Engineering</p>
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase leading-none">3D Printing<br />Services</h1>
          <p className="mt-4 text-stotko-gray-text text-lg max-w-2xl">
            Rapid prototyping and custom part manufacturing from your CAD or STL files.
          </p>
        </div>
      </section>

      {/* Specs bar */}
      <section className="bg-stotko-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-5 gap-6">
          {capabilities.map((c) => (
            <div key={c.label}>
              <p className="text-white font-black text-sm">{c.value}</p>
              <p className="text-stotko-gray-text text-xs uppercase tracking-widest mt-1">{c.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-stotko-gray-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-black uppercase tracking-widest text-stotko-gray-text mb-3">Use Cases</p>
            <h2 className="text-3xl font-black text-stotko-black uppercase">Applications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-gray-300">
            {applications.map((a) => (
              <div key={a.title} className="group bg-white overflow-hidden">
                <div className="h-56 overflow-hidden">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-black text-stotko-black uppercase tracking-wider mb-2">{a.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-stotko-gray-text mb-3">Materials</p>
            <h2 className="text-3xl font-black text-stotko-black uppercase leading-none mb-6">ABS & PLA<br />Polymers</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-black text-stotko-black text-sm uppercase tracking-wider mb-2">ABS (Acrylonitrile Butadiene Styrene)</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Strong, impact-resistant thermoplastic suitable for functional parts, enclosures, and components that require post-processing such as sanding or painting.</p>
                <ul className="mt-3 space-y-1">
                  {["Higher temperature resistance", "Good impact strength", "Machinable and sandable surface"].map(f => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-600"><CheckCircle size={11} />{f}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-black text-stotko-black text-sm uppercase tracking-wider mb-2">PLA (Polylactic Acid)</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Biodegradable polymer ideal for detailed models, architectural pieces, and display items where fine detail and surface quality are the priority.</p>
                <ul className="mt-3 space-y-1">
                  {["Excellent detail resolution", "Good surface finish out of printer", "Ideal for display and presentation models"].map(f => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-600"><CheckCircle size={11} />{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1638959010189-68b374f569b4?q=80&w=1200&auto=format&fit=crop"
              alt="3D printed parts"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full border-l-4 border-t-4 border-stotko-black translate-x-4 -translate-y-4 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-stotko-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-3">How to Order</p>
            <h2 className="text-3xl font-black text-white uppercase">Simple Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-0">
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

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-black text-stotko-black text-sm uppercase tracking-wider mb-1">Get a 3D Print Quote</p>
            <p className="text-stotko-gray-text text-xs">Send us your STL or CAD file and we&apos;ll get back to you promptly.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-stotko-black text-white px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-stotko-gray transition-colors">
            Request a Quote <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
