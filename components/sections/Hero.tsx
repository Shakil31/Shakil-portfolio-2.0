"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { counters, personal, socials } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 pt-28 md:px-8 lg:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_68%_28%,rgba(139,92,246,0.32),transparent_28%),radial-gradient(circle_at_20%_24%,rgba(79,140,255,0.12),transparent_30%)]" />
      <div data-parallax className="absolute inset-x-0 top-20 -z-10 h-[720px] opacity-70">
        <div className="absolute left-[52%] top-24 h-[420px] w-[420px] rounded-full border border-violet-400/35 shadow-[0_0_80px_rgba(139,92,246,0.45)] md:h-[560px] md:w-[560px]" />
        <div className="city-glow absolute bottom-0 left-0 right-0 h-72 opacity-55" />
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.15fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-3 rounded-xl border border-violet-400/50 bg-violet-500/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.28em] text-violet-100 shadow-glow">
            <span className="h-2 w-2 rounded-full bg-violet-300 shadow-glow" /> Backend Developer
          </div>
          <h1 className="font-display text-[clamp(4.4rem,12vw,9.6rem)] font-black uppercase leading-[0.78] tracking-normal text-white">
            <motion.span className="block" initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>Shakil</motion.span>
            <motion.span className="block bg-gradient-to-r from-violet-500 via-cyan-300 to-violet-200 bg-clip-text text-transparent" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.12 }}>Barua</motion.span>
          </h1>
          <p className="mt-5 font-display text-xl font-bold text-white">Software Engineer / <span className="text-violet-300">Backend Developer</span></p>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/70">I build scalable, secure and high-performance backend systems using Python (Django) and Laravel. Passionate about clean code, problem solving and turning ideas into real-world solutions.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <MagneticButton href="#projects">View My Work</MagneticButton>
            <MagneticButton href={personal.cv} variant="ghost" download>Download CV</MagneticButton>
          </div>
          <div className="mt-9">
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.35em] text-violet-200">Connect with me</p>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <Link key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} className="group inline-flex h-12 items-center gap-3 rounded-xl border border-white/12 bg-white/[0.035] px-4 text-sm text-white/80 transition hover:-translate-y-1 hover:border-violet-300/60 hover:text-white hover:shadow-glow" aria-label={social.label}>
                  <social.icon className="text-xl" />
                  <span className="hidden sm:block">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
        <div className="relative min-h-[540px] lg:min-h-[720px]">
          <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/25 blur-3xl" />
          <div className="particle-field absolute inset-0" />
          <motion.div className="absolute bottom-0 left-1/2 w-[min(92vw,560px)] -translate-x-1/2" animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} whileHover={{ scale: 1.025 }}>
            <div className="absolute inset-x-8 top-12 h-80 rounded-full border border-violet-300/45 shadow-[0_0_110px_rgba(139,92,246,0.55)]" />
            <Image src="/shakil-portrait.png" alt="Shakil Barua portrait" width={560} height={660} priority className="relative z-10 mx-auto h-auto w-full drop-shadow-[0_0_45px_rgba(139,92,246,0.45)]" />
            <div className="absolute bottom-0 left-0 right-0 z-20 h-36 bg-gradient-to-t from-night to-transparent" />
          </motion.div>
          <div className="absolute right-0 top-20 hidden w-44 space-y-8 xl:block">
            {counters.map((counter, index) => (
              <motion.div key={counter.label} className="flex items-center gap-4" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + index * 0.1 }}>
                <span className="grid h-16 w-16 place-items-center rounded-full border border-white/10 bg-violet-500/12 text-2xl text-violet-200 shadow-glow"><counter.icon /></span>
                <span><strong className="block font-display text-3xl text-white">{counter.value}</strong><span className="text-sm leading-5 text-white/70">{counter.label}</span></span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
