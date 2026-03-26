"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  { id: "feasibility-studies", label: "Feasibility Studies", num: "01" },
  { id: "turnkey-projects", label: "Turnkey Projects", num: "02" },
  { id: "plant-layout", label: "Plant Layout", num: "03" },
  { id: "design", label: "Design", num: "04" },
  { id: "project-management", label: "Project Management", num: "05" },
  { id: "installation", label: "Installation", num: "06" },
  { id: "commissioning", label: "Commissioning", num: "07" },
  { id: "modification-automation", label: "Modification & Automation", num: "08" },
  { id: "packing-palletising", label: "Packing & Palletising Plants", num: "09" },
  { id: "rail-road-loading", label: "Rail & Road Loading", num: "10" },
  { id: "transport-storage", label: "Transport & Storage", num: "11" },
  { id: "documentation", label: "Documentation", num: "12" },
  { id: "training", label: "Training for Plant Operators", num: "13" },
  { id: "spare-parts", label: "Spare Parts & Components", num: "14" },
  { id: "after-sales", label: "After Sales Service", num: "15" },
];

const VISIBLE = 5;
const INTERVAL = 3000;

export default function SolutionsCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = items.length;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const prev = () => {
    setCurrent((c) => (c - 1 + total) % total);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [paused, next]);

  // Build the visible window (wrapping)
  const visibleItems = Array.from({ length: VISIBLE }, (_, i) => items[(current + i) % total]);

  return (
    <section
      className="bg-stotko-black border-b border-white/10 py-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center gap-4">

        {/* Prev */}
        <button
          onClick={prev}
          className="shrink-0 w-8 h-8 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Slides */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-white/10 overflow-hidden">
          {visibleItems.map((item, i) => (
            <a
              key={`${item.id}-${i}`}
              href={`#${item.id}`}
              className={`
                group bg-stotko-black hover:bg-stotko-gray px-5 py-5 transition-colors duration-200
                ${i === 0 ? "opacity-100" : i === VISIBLE - 1 ? "opacity-60" : "opacity-90"}
              `}
            >
              <p className="text-white/20 text-2xl font-black mb-1 group-hover:text-white/40 transition-colors">
                {item.num}
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-stotko-gray-text group-hover:text-white transition-colors leading-snug">
                {item.label}
              </p>
            </a>
          ))}
        </div>

        {/* Next */}
        <button
          onClick={next}
          className="shrink-0 w-8 h-8 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-colors"
          aria-label="Next"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-1.5 mt-5">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 ${
              i === current
                ? "w-6 h-1.5 bg-white"
                : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
