import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Industrial Division | Stotko Engineering",
  description: "Custom bulk loading equipment, bulk storage solutions and handling plants for industrial applications.",
};

const offerings = [
  {
    title: "Bulk Loading Equipment",
    desc: "Design, manufacturing, modification, and consultation for bulk material loading systems. From initial concept to fully operational loading facilities, we deliver solutions that maximise throughput and minimise downtime.",
    features: [
      "Rail and road loading facility design",
      "Custom spout and chute engineering",
      "Dust suppression and environmental containment",
      "Modification and upgrade of existing equipment",
      "Consultation and feasibility assessment",
    ],
    image: "https://images.unsplash.com/photo-1565793979698-ec88c6b6eee1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Bulk Storage Solutions",
    desc: "Engineered storage systems for bulk solids including silos, hoppers, and storage bins. We design for optimal material flow, structural integrity, and long service life in demanding industrial environments.",
    features: [
      "Silo design and structural engineering",
      "Hopper geometry for optimal flow",
      "Aeration systems for difficult materials",
      "Structural steel fabrication and erection",
      "Portfolio of completed projects available on request",
    ],
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Bulk Handling Plants",
    desc: "Tailor-made bulk material handling plants designed for your specific process requirements. We integrate conveying, screening, weighing, and control systems into seamless plant solutions.",
    features: [
      "Belt and screw conveyor systems",
      "Bucket elevator design and supply",
      "Weighing and batching systems",
      "Gravity conveying solutions",
      "Full plant layout and 3D design",
    ],
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=1200&auto=format&fit=crop",
  },
];

const processes = [
  {
    step: "01",
    title: "Feasibility Study",
    desc: "We analyse your material handling requirements, throughput targets, and site constraints to determine the optimal solution.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "02",
    title: "Plant Layout & Design",
    desc: "Detailed engineering drawings and 3D plant layouts are developed, reviewed with the client, and refined before manufacture.",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "03",
    title: "Project Management",
    desc: "A dedicated project manager coordinates procurement, fabrication, and logistics to keep your project on schedule and budget.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "04",
    title: "Installation",
    desc: "Our experienced installation teams handle mechanical erection, electrical integration, and civil interface coordination.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "05",
    title: "Commissioning & Training",
    desc: "Full commissioning support with systematic plant start-up and hands-on operator training to ensure safe, efficient operation.",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=800&auto=format&fit=crop",
  },
];

export default function IndustrialPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1565793979698-ec88c6b6eee1?q=80&w=2070&auto=format&fit=crop"
          alt="Industrial bulk handling plant"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stotko-black via-stotko-black/65 to-stotko-black/20" />
        <div className="absolute left-0 top-0 w-1 h-full bg-white" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <p className="text-xs font-black uppercase tracking-widest text-white/50 mb-3">Stotko Engineering</p>
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase leading-none">Industrial<br />Division</h1>
          <p className="mt-4 text-stotko-gray-text text-lg max-w-2xl">
            Turnkey bulk handling, storage, and loading solutions from design to commissioning.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/2">
            <p className="text-xs font-black uppercase tracking-widest text-stotko-gray-text mb-3">What We Deliver</p>
            <h2 className="text-3xl font-black text-stotko-black uppercase leading-none mb-4">End-to-End Industrial<br />Plant Solutions</h2>
          </div>
          <div className="md:w-1/2 text-gray-500 text-sm leading-relaxed space-y-3">
            <p>
              Our industrial division delivers complete bulk material handling plants from feasibility through to commissioning and ongoing support. Every project is approached as a unique engineering challenge, with solutions tailored to the specific material, throughput, and operational requirements of the client.
            </p>
            <p>
              Specialisations include silo aeration, gravity conveying, and custom bulk loading equipment — areas where our decades of experience allow us to provide solutions that simply work.
            </p>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24 bg-stotko-gray-light">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="mb-4">
            <p className="text-xs font-black uppercase tracking-widest text-stotko-gray-text mb-3">Services</p>
            <h2 className="text-3xl font-black text-stotko-black uppercase">Industrial Services</h2>
          </div>
          {offerings.map((o, i) => (
            <div key={o.title} className="grid md:grid-cols-2 gap-0">
              <div className={`relative h-72 md:h-auto overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img src={o.image} alt={o.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-stotko-black/20" />
              </div>
              <div className={`bg-white p-10 flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="text-2xl font-black text-stotko-black uppercase mb-3">{o.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{o.desc}</p>
                <ul className="space-y-2">
                  {o.features.map((f) => (
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
            <h2 className="text-3xl font-black text-white uppercase">Project Process</h2>
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

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-black text-stotko-black text-sm uppercase tracking-wider mb-1">Discuss Your Project</p>
            <p className="text-stotko-gray-text text-xs">From concept to commissioning — we manage the full scope.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-stotko-black text-white px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-stotko-gray transition-colors">
            Get a Quote <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
