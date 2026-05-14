"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { HiEnvelope, HiMapPin } from "react-icons/hi2";
import { personal } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

const codeLines = ["class Developer:", "    def __init__(self):", "        self.name = 'Shakil Barua'", "        self.role = 'Backend Developer'", "        self.skills = ['Python', 'Django', 'Laravel',", "                       'REST API', 'MySQL', 'AWS']", "        self.passion = 'Building Scalable Solutions'", "", "    def build(self):", "        return 'Clean Code. Scalable Impact.'", "", "# Always learning. Always building."];

export function About() {
  return (
    <section id="about" className="border-y border-white/10 px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div data-gsap-reveal>
          <SectionTitle index="01" title="About Me" />
          <p className="max-w-2xl text-base leading-8 text-white/72">Computer Science and Engineering graduate with experience in backend development using Python (Django), Laravel, and RESTful APIs. Skilled in building scalable web applications, database optimization, and secure system architecture.</p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">Passionate about developing efficient software solutions and solving real-world technical problems.</p>
          <div className="mt-7 flex flex-wrap gap-3"><InfoPill icon={HiMapPin} text={personal.location} /><InfoPill icon={FaPhoneAlt} text={personal.phone} /><InfoPill icon={HiEnvelope} text={personal.email} /></div>
        </div>
        <GlassCard className="relative overflow-hidden p-5" data-gsap-reveal>
          <div className="absolute right-8 top-7 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/80">Python</div>
          <div className="mb-6 flex gap-2"><span className="h-3 w-3 rounded-full bg-red-500" /><span className="h-3 w-3 rounded-full bg-yellow-400" /><span className="h-3 w-3 rounded-full bg-emerald-400" /></div>
          <pre className="overflow-hidden font-mono text-[13px] leading-7 text-white/80 sm:text-sm">
            {codeLines.map((line, index) => (
              <motion.code key={`${line}-${index}`} className="block" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.065 }}>
                <span className="text-violet-300">{line.slice(0, 12)}</span><span className="text-lime-300">{line.slice(12)}</span>
              </motion.code>
            ))}
          </pre>
          <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
        </GlassCard>
      </div>
    </section>
  );
}

function InfoPill({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return <span className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 text-xs text-white/78"><Icon className="shrink-0 text-violet-300" />{text}</span>;
}
