"use client";
import { motion } from "framer-motion";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface ActionProps {
  text: string;
  onClick: () => void;
  variant?: ButtonProps["variant"];
  className?: string;
}

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  actions: ActionProps[];
  stats: StatProps[];
  images: string[];
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const floatingVariants = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const HeroSection = ({ title, subtitle, actions, stats, images, className }: HeroSectionProps) => {
  return (
    <section className={cn("w-full overflow-hidden bg-stotko-black py-12 sm:py-24", className)}>
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8 px-6">
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl font-black tracking-tight text-white sm:text-6xl leading-none"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p className="mt-6 max-w-md text-lg text-stotko-gray-text" variants={itemVariants}>
            {subtitle}
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start" variants={itemVariants}>
            {actions.map((action, index) => (
              <Button key={index} onClick={action.onClick} variant={action.variant as ButtonProps["variant"]} size="lg" className={action.className}>
                {action.text}
              </Button>
            ))}
          </motion.div>
          <motion.div className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start" variants={itemVariants}>
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-white/20 text-white">{stat.icon}</div>
                <div>
                  <p className="text-xl font-black text-white">{stat.value}</p>
                  <p className="text-sm text-stotko-gray-text">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative h-[400px] w-full sm:h-[500px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="absolute -top-4 left-1/4 h-16 w-16 border border-white/10" variants={floatingVariants} animate="animate" />
          <motion.div className="absolute bottom-0 right-1/4 h-12 w-12 border border-white/10" variants={floatingVariants} animate="animate" style={{ transitionDelay: "0.5s" }} />
          <motion.div className="absolute bottom-1/4 left-4 h-6 w-6 bg-white/5" variants={floatingVariants} animate="animate" style={{ transitionDelay: "1s" }} />

          <motion.div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 bg-stotko-gray p-1 shadow-2xl sm:h-64 sm:w-64" variants={imageVariants}>
            <img src={images[0]} alt="Engineering" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div className="absolute right-0 top-1/3 h-40 w-40 bg-stotko-gray p-1 shadow-2xl sm:h-56 sm:w-56" variants={imageVariants}>
            <img src={images[1]} alt="Manufacturing" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div className="absolute bottom-0 left-0 h-32 w-32 bg-stotko-gray p-1 shadow-2xl sm:h-48 sm:w-48" variants={imageVariants}>
            <img src={images[2]} alt="Industrial" className="h-full w-full object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
