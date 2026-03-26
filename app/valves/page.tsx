import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Valves & Flow Products | Stotko Engineering",
  description: "Diaphragm valves, non-return valves, air release valves, and flow switches for industrial process and fluid control.",
};

const products = [
  {
    title: "Diaphragm Valves",
    desc: "Robust diaphragm valves for on/off and throttling control of liquids, slurries, and gases. Suitable for aggressive media, hygienic applications, and high-cycle operations. Minimal maintenance with no stem seal leakage.",
    features: [
      "Suitable for aggressive and corrosive media",
      "No stem packing — zero external leakage",
      "Available in various body and diaphragm materials",
      "Sizes from ½\" to 12\" and larger",
      "Pneumatic, manual, and electric actuation options",
    ],
    image: "https://images.unsplash.com/photo-1581094651181-35942459ef62?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Non-Return Valves",
    desc: "Check valves that prevent reverse flow in pipelines, protecting pumps, compressors, and process equipment. Engineered for minimal pressure drop and long service life in demanding process environments.",
    features: [
      "Prevents backflow and water hammer",
      "Low cracking pressure for fast response",
      "Suitable for liquid, gas, and steam applications",
      "Stainless steel, cast iron, and PVC options",
      "Horizontal and vertical installation configurations",
    ],
    image: "https://images.unsplash.com/photo-1565793979698-ec88c6b6eee1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Air Release Valves",
    desc: "Automatic air release and vacuum break valves for water and process pipelines. Eliminates air pockets that cause water hammer, pressure surges, and reduced flow capacity.",
    features: [
      "Automatic air release during pipeline filling",
      "Vacuum break protection on pipeline draining",
      "Combination single-body ARV/vacuum break units",
      "Flanged and screwed end connections",
      "Suitable for potable water and industrial fluids",
    ],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Flow Switches",
    desc: "HNMS/HNMQ oscillating flap flow switches for detection of liquid flow in pipelines. Compact, reliable, and suitable for pure liquids and mildly aggressive substances.",
    features: [
      "Oscillating flap detection principle",
      "Temperature range up to 80°C",
      "Minimum operating pressure: 0.5 bar constant",
      "Sizes ½\" to 2\", flow range 5–300 L/min",
      "Three fitting positions: H, VST, VF",
      "Electrical: micro-changers 230V/15A or switching tube 230V/6A",
    ],
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=1200&auto=format&fit=crop",
  },
];

const processes = [
  {
    step: "01",
    title: "Application Review",
    desc: "We assess your media type, pressure, temperature, and flow requirements to select the correct valve or flow device.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "02",
    title: "Product Selection",
    desc: "Our technical team recommends the correct valve type, material grade, size, and actuation method for your application.",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "03",
    title: "Supply & Delivery",
    desc: "Products are supplied from stock or sourced to order, with full documentation and traceability records.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "04",
    title: "Technical Support",
    desc: "Our team provides installation guidance, commissioning assistance, and ongoing technical consulting for your valve systems.",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=800&auto=format&fit=crop",
  },
];

export default function ValvesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581094651181-35942459ef62?q=80&w=2070&auto=format&fit=crop"
          alt="Industrial valves and flow control"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stotko-black via-stotko-black/65 to-stotko-black/20" />
        <div className="absolute left-0 top-0 w-1 h-full bg-white" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <p className="text-xs font-black uppercase tracking-widest text-white/50 mb-3">Stotko Engineering</p>
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase leading-none">Valves &<br />Flow Products</h1>
          <p className="mt-4 text-stotko-gray-text text-lg max-w-2xl">
            Industrial valves and flow control solutions with expert technical sales and support.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/2">
            <p className="text-xs font-black uppercase tracking-widest text-stotko-gray-text mb-3">Control & Flow</p>
            <h2 className="text-3xl font-black text-stotko-black uppercase leading-none mb-4">The Right Valve<br />for Every Application</h2>
          </div>
          <div className="md:w-1/2 text-gray-500 text-sm leading-relaxed space-y-3">
            <p>
              Stotko Engineering supplies a comprehensive range of industrial valves and flow switches for process, water, mining, and industrial applications. Our technical sales team assists clients in selecting the correct product for each specific duty.
            </p>
            <p>
              We offer more than just supply — our team provides application engineering support, helping you avoid costly specification errors and ensuring reliable, long-term performance in your systems.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-stotko-gray-light">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="mb-4">
            <p className="text-xs font-black uppercase tracking-widest text-stotko-gray-text mb-3">Product Range</p>
            <h2 className="text-3xl font-black text-stotko-black uppercase">Valve & Flow Range</h2>
          </div>
          {products.map((p, i) => (
            <div key={p.title} className="grid md:grid-cols-2 gap-0">
              <div className={`relative h-72 md:h-auto overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-stotko-black/20" />
              </div>
              <div className={`bg-white p-10 flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
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
            <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-3">Our Approach</p>
            <h2 className="text-3xl font-black text-white uppercase">Technical Sales Process</h2>
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
            <p className="font-black text-stotko-black text-sm uppercase tracking-wider mb-1">Technical Valve Enquiries</p>
            <p className="text-stotko-gray-text text-xs">Send us your specification and we&apos;ll recommend the right product.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-stotko-black text-white px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-stotko-gray transition-colors">
            Send Enquiry <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
