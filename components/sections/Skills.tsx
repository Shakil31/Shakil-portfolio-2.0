"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { skills } from "@/lib/data";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Skills() {
  return (
    <section id="skills" className="px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto max-w-7xl" data-gsap-reveal>
        <SectionTitle index="02" title="Tech Stack" action={<a href="#contact" className="hidden h-10 items-center gap-2 rounded-xl border border-white/10 px-4 text-xs font-bold uppercase text-white/80 transition hover:border-violet-300/60 hover:text-white sm:inline-flex">View All Skills <HiArrowRight /></a>} />
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11">
          {skills.map((skill, index) => (
            <motion.div key={skill.name} className="group flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl transition hover:border-violet-300/60 hover:bg-white/[0.07] hover:shadow-glow" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} whileHover={{ y: -8 }}>
              <skill.icon className="text-4xl transition group-hover:scale-110" style={{ color: skill.color }} />
              <span className="text-center text-sm text-white/76">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
