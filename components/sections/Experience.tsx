"use client";

import { motion } from "framer-motion";
import { counters, experiences } from "@/lib/data";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Experience() {
  return (
    <section id="experience" className="px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto max-w-7xl" data-gsap-reveal>
        <SectionTitle index="04" title="Experience" />
        <div className="grid gap-7 lg:grid-cols-2">
          {experiences.map((experience, index) => (
            <motion.article key={experience.role} className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-2xl" initial={{ opacity: 0, x: index === 0 ? -24 : 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: index * 0.12 }}>
              <span className="absolute left-8 top-20 h-[calc(100%-6.5rem)] w-px bg-gradient-to-b from-violet-400/70 to-transparent" />
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-5">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-violet-300/40 bg-violet-500/20 text-3xl text-violet-200 shadow-glow"><experience.icon /></span>
                  <div><h3 className="font-display text-xl font-bold text-white">{experience.role}</h3><p className="text-sm font-semibold text-white/78">{experience.company}, {experience.location}</p></div>
                </div>
                <span className="w-fit rounded-full bg-violet-500/15 px-4 py-2 text-xs font-bold text-violet-200">{experience.period}</span>
              </div>
              <ul className="mt-6 space-y-2 pl-20 text-sm leading-6 text-white/68">{experience.points.map((point) => <li key={point} className="list-disc">{point}</li>)}</ul>
            </motion.article>
          ))}
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {counters.map((counter, index) => (
            <motion.div key={counter.label} className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-2xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }}>
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-violet-500/15 text-2xl text-violet-200 shadow-glow"><counter.icon /></span>
              <span><strong className="block font-display text-3xl text-white">{counter.value}</strong><span className="text-sm text-white/60">{counter.label}</span></span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
