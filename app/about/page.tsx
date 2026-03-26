import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Award, Globe, ShieldCheck, Users } from "lucide-react";

export const metadata = {
  title: "About Us | Stotko Engineering",
  description: "Stotko Engineering has been your partner in progress since 1973 — delivering precision engineering solutions across mining, industrial and process industries.",
};

const values = [
  { icon: Users, title: "Client-Centred", desc: "We place the client at the centre of all activities, ensuring every solution is tailored to your specific requirements." },
  { icon: ShieldCheck, title: "Quality Assured", desc: "ISO 9001 certified processes and rigorous quality control at every stage of design, manufacture, and delivery." },
  { icon: Globe, title: "Global Standards", desc: "Products manufactured to DIN and international standards, distributed across North America, Eurasia, Australia and Africa." },
  { icon: Award, title: "BBBEE Level 2", desc: "B-BBEE certified since 2008, actively contributing to South Africa's economic transformation." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
          alt="Stotko Engineering facility"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stotko-black via-stotko-black/70 to-stotko-black/20" />
        <div className="absolute left-0 top-0 w-1 h-full bg-white" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <p className="text-xs font-black uppercase tracking-widest text-white/50 mb-3">Company Profile</p>
          <h1 className="text-5xl font-black text-white uppercase leading-none">About<br />Stotko Engineering</h1>
          <p className="mt-4 text-stotko-gray-text text-lg max-w-2xl">
            Your partner in progress — delivering precision engineering since 1973.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-stotko-black py-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "1973", label: "Year Founded" },
            { value: "Level 2", label: "BBBEE Rating" },
            { value: "4", label: "Core Divisions" },
            { value: "Global", label: "Distribution" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-black text-white">{s.value}</p>
              <p className="text-stotko-gray-text text-xs uppercase tracking-widest mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-stotko-gray-text mb-3">Who We Are</p>
            <h2 className="text-3xl font-black text-stotko-black uppercase leading-none mb-6">Engineered for<br />Excellence</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
              <p>
                Stotko Engineering (Pty) Ltd has been a trusted name in precision engineering since 1973. From our facility in Strijdompark, Johannesburg, we serve clients across mining, industrial, and process industries with tailor-made engineering solutions.
              </p>
              <p>
                Our approach is simple: we put the client at the centre of all activities. This philosophy has allowed us to build long-term partnerships with leading companies across South Africa and internationally — with products distributed across North America, Eurasia, Australia, and Africa.
              </p>
              <p>
                From feasibility studies and plant layout to full turnkey project delivery and after-sales support, we provide a single point of accountability for every engineering requirement.
              </p>
            </div>
            <ul className="mt-8 space-y-2">
              {[
                "Feasibility studies and concept design",
                "Turnkey project delivery",
                "Installation and commissioning",
                "Training for plant operators",
                "Spare parts and after-sales service",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                  <CheckCircle size={14} className="text-stotko-black shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"
              alt="Engineering workshop"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full border-l-4 border-t-4 border-stotko-black translate-x-4 -translate-y-4 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-stotko-gray-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-black uppercase tracking-widest text-stotko-gray-text mb-3">What Drives Us</p>
            <h2 className="text-3xl font-black text-stotko-black uppercase">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-300">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8">
                <div className="w-10 h-10 border-2 border-stotko-black flex items-center justify-center mb-4">
                  <v.icon size={18} />
                </div>
                <h3 className="font-black uppercase text-sm tracking-wider text-stotko-black mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stotko-black text-center px-6">
        <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-4">Let&apos;s Work Together</p>
        <h2 className="text-4xl font-black text-white uppercase leading-none mb-8">Ready to Start<br />Your Project?</h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-stotko-black px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-gray-200 transition-colors"
        >
          Get in Touch <ArrowRight size={14} />
        </Link>
      </section>
    </>
  );
}
