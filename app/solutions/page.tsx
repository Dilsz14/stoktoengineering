import React from "react";
import Link from "next/link";
import {
  Search, Wrench, LayoutGrid, PenTool, ClipboardList, HardHat,
  Zap, Settings, PackageCheck, Train, Warehouse, FileText,
  GraduationCap, Box, HeadphonesIcon, ArrowRight
} from "lucide-react";

export const metadata = {
  title: "Solutions | Stotko Engineering",
  description: "Stotko Engineering supplies equipment and services for the full project lifecycle — from feasibility studies through to after-sales support.",
};

const sections = [
  {
    id: "feasibility-studies",
    icon: Search,
    title: "Feasibility Studies",
    desc: "Before committing capital, we conduct thorough feasibility assessments to determine the viability of your project. Our engineers analyse material characteristics, throughput requirements, site constraints, and budget parameters to give you an objective, technically sound recommendation.",
    points: [
      "Technical and commercial viability assessment",
      "Material and process analysis",
      "Budgetary cost estimation",
      "Risk identification and mitigation planning",
      "Written feasibility report with recommendations",
    ],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "turnkey-projects",
    icon: Wrench,
    title: "Turnkey Projects",
    desc: "We take full responsibility for the entire project — from concept through to a commissioned, operating plant. Turnkey delivery means a single point of accountability, eliminating interface risk between multiple contractors and giving you a plant that works from day one.",
    points: [
      "Single-contract project responsibility",
      "Design, supply, fabrication, and installation",
      "Civil and structural coordination",
      "Electrical and control integration",
      "Handover with full documentation package",
    ],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "plant-layout",
    icon: LayoutGrid,
    title: "Plant Layout",
    desc: "Efficient plant layout is foundational to operational performance. We develop detailed layouts that optimise material flow, maintenance access, safety clearances, and future expansion capability — reducing capital cost and improving throughput from the outset.",
    points: [
      "2D and 3D plant layout drawings",
      "Material flow optimisation",
      "Equipment arrangement and spacing",
      "Safety and access route planning",
      "Clash detection and interference checking",
    ],
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "design",
    icon: PenTool,
    title: "Design",
    desc: "Our engineering team produces detailed mechanical, structural, and process designs for all equipment and plant systems we supply. Every design is reviewed for manufacturability, safety compliance, and operational reliability before fabrication begins.",
    points: [
      "Mechanical equipment design",
      "Structural steel design and detailing",
      "Process flow and P&ID development",
      "3D CAD modelling and drawings",
      "Design for manufacture (DFM) advisory",
    ],
    image: "https://images.unsplash.com/photo-1558618047-f4e60c8d4927?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "project-management",
    icon: ClipboardList,
    title: "Project Management",
    desc: "Every project benefits from dedicated project management. Our project managers coordinate design, procurement, fabrication, logistics, and site activities to keep your project on programme and within budget — providing regular progress reporting throughout.",
    points: [
      "Dedicated project manager assigned",
      "Detailed project schedule (Gantt)",
      "Procurement and supplier management",
      "Cost control and budget tracking",
      "Regular progress reporting to client",
    ],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "installation",
    icon: HardHat,
    title: "Installation",
    desc: "Our experienced installation teams execute mechanical erection, equipment setting, and structural assembly on site. We work safely and efficiently, minimising disruption to existing operations and meeting the handover milestones required for commissioning.",
    points: [
      "Mechanical erection and alignment",
      "Structural steel fabrication and erection",
      "Equipment setting and levelling",
      "Coordination with civil and electrical contractors",
      "Site safety compliance and method statements",
    ],
    image: "https://images.unsplash.com/photo-1565793979698-ec88c6b6eee1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "commissioning",
    icon: Zap,
    title: "Commissioning",
    desc: "Commissioning is where a project proves itself. Our team systematically brings the plant from mechanical completion to full operational status — conducting pre-commissioning checks, dry runs, and wet commissioning to verify that every system performs to specification.",
    points: [
      "Pre-commissioning inspection and punch-listing",
      "Dry commissioning and dry runs",
      "Wet commissioning with product",
      "Performance verification against design criteria",
      "Commissioning report and sign-off documentation",
    ],
    image: "https://images.unsplash.com/photo-1581094651181-35942459ef62?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "modification-automation",
    icon: Settings,
    title: "Modification and Automation of Existing Plants",
    desc: "Existing plants can almost always be improved. We assess your current equipment, identify bottlenecks or inefficiencies, and design modifications or automation upgrades that increase throughput, reduce manual intervention, and improve safety — often without a full plant shutdown.",
    points: [
      "Plant audit and performance assessment",
      "Bottleneck identification and throughput analysis",
      "Mechanical modification design and supply",
      "PLC and automation system upgrades",
      "Phased implementation to minimise downtime",
    ],
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "packing-palletising",
    icon: PackageCheck,
    title: "Packing and Palletising Plants",
    desc: "We design and supply complete packing and palletising plant solutions for bagged, bulk, and unitised products. From bag filling and sealing through to pallet formation and stretch wrapping, we deliver systems that meet production rates and minimise labour dependency.",
    points: [
      "Bag filling and weighing systems",
      "Bag sealing and coding equipment",
      "Conveying and accumulation systems",
      "Robotic and conventional palletisers",
      "Stretch wrapping and pallet dispatch",
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "rail-road-loading",
    icon: Train,
    title: "Rail and Road Loading Facilities",
    desc: "We engineer loading facilities for bulk materials onto road vehicles and rail wagons. Our solutions are designed for high throughput, accurate weighing, dust control, and safe operator access — meeting the logistical demands of mines, quarries, and industrial producers.",
    points: [
      "Rail wagon and road truck loading spouts",
      "Weighbridge and in-motion weighing integration",
      "Dust suppression and environmental containment",
      "Drive-through and drive-over configurations",
      "Load cell and automation systems",
    ],
    image: "https://images.unsplash.com/photo-1578496479531-32e296d5c6e1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "transport-storage",
    icon: Warehouse,
    title: "Transport and Storage Systems",
    desc: "From raw material intake to finished product dispatch, we supply the full spectrum of bulk material transport and storage solutions. Our systems are engineered for reliability in demanding industrial and mining environments, with minimal maintenance requirements.",
    points: [
      "Belt, screw, and chain conveyor systems",
      "Bucket elevator design and supply",
      "Silo, hopper, and bin design",
      "Silo aeration and flow promotion systems",
      "Gravity conveying solutions",
    ],
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "documentation",
    icon: FileText,
    title: "Documentation",
    desc: "Comprehensive documentation is delivered with every project. We provide the full document package required to operate, maintain, and comply with regulatory requirements — giving your team the information they need to manage the plant throughout its lifecycle.",
    points: [
      "As-built engineering drawings",
      "Equipment operation and maintenance manuals",
      "Spare parts lists and recommended holdings",
      "Safety files and risk assessments",
      "Inspection and test records",
    ],
    image: "https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "Training for Plant Operators",
    desc: "Well-trained operators are essential to safe and efficient plant operation. We provide hands-on, practical training for plant operators and maintenance personnel — covering equipment operation, routine maintenance, fault finding, and emergency procedures.",
    points: [
      "Hands-on operator training at site",
      "Equipment-specific training programmes",
      "Routine maintenance procedures",
      "Fault finding and troubleshooting",
      "Training records and certificates issued",
    ],
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "spare-parts",
    icon: Box,
    title: "Spare Parts and Components",
    desc: "Unplanned downtime due to unavailable spares is costly. We supply original spare parts and equivalent components for all equipment we supply, and can source parts for third-party equipment. We advise on recommended spare holdings to keep your plant running.",
    points: [
      "Original spare parts for all Stotko-supplied equipment",
      "Third-party equipment parts sourcing",
      "Recommended spare parts list (RSPL) on delivery",
      "Emergency parts supply for critical breakdowns",
      "Component repair and refurbishment",
    ],
    image: "https://images.unsplash.com/photo-1565715101572-3ee1fe0a765d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "after-sales",
    icon: HeadphonesIcon,
    title: "After Sales Service",
    desc: "Our relationship with clients does not end at handover. We provide ongoing after-sales support to ensure your plant continues to perform to specification — from routine service visits and inspections to emergency breakdown response and performance optimisation.",
    points: [
      "Scheduled maintenance and service visits",
      "Emergency breakdown response",
      "Performance monitoring and optimisation",
      "Plant inspection and condition reporting",
      "Long-term service agreements available",
    ],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
          alt="Stotko Engineering solutions"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stotko-black via-stotko-black/65 to-stotko-black/20" />
        <div className="absolute left-0 top-0 w-1 h-full bg-white" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <p className="text-xs font-black uppercase tracking-widest text-white/50 mb-3">What We Supply</p>
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase leading-none">Engineering<br />Solutions</h1>
          <p className="mt-4 text-stotko-gray-text text-lg max-w-2xl">
            Full lifecycle project capability — from initial feasibility through to after-sales support.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <section className="bg-stotko-black border-b border-white/10 py-6 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6 flex gap-6 min-w-max">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-xs font-bold uppercase tracking-widest text-stotko-gray-text hover:text-white transition-colors whitespace-nowrap"
            >
              {s.title}
            </a>
          ))}
        </div>
      </section>

      {/* Sections */}
      <div className="bg-white">
        {sections.map((s, idx) => (
          <section
            key={s.id}
            id={s.id}
            className={`grid md:grid-cols-2 gap-0 border-b border-gray-100 scroll-mt-16 ${idx % 2 === 1 ? "bg-stotko-gray-light" : "bg-white"}`}
          >
            {/* Image */}
            <div className={`relative h-72 md:h-auto min-h-[320px] overflow-hidden ${idx % 2 === 1 ? "md:order-2" : ""}`}>
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-stotko-black/30" />
              <div className="absolute bottom-6 left-6">
                <div className="w-10 h-10 bg-white flex items-center justify-center">
                  <s.icon size={18} className="text-stotko-black" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={`p-10 md:p-14 flex flex-col justify-center ${idx % 2 === 1 ? "md:order-1" : ""}`}>
              <p className="text-xs font-black uppercase tracking-widest text-stotko-gray-text mb-2">
                {String(idx + 1).padStart(2, "0")} / {String(sections.length).padStart(2, "0")}
              </p>
              <h2 className="text-2xl md:text-3xl font-black text-stotko-black uppercase leading-tight mb-4">
                {s.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-gray-700 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-stotko-black rounded-full shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-20 bg-stotko-black text-center px-6">
        <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-4">Start Your Project</p>
        <h2 className="text-4xl font-black text-white uppercase leading-none mb-8">
          Ready to Discuss<br />Your Requirements?
        </h2>
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
