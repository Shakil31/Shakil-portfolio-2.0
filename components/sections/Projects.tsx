"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiArrowRight, HiArrowUpRight } from "react-icons/hi2";
import { allGithubProjects, githubProjectCount, projects } from "@/lib/data";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

const accentClasses = {
  violet: "from-violet-500/55 to-fuchsia-500/25 text-violet-100",
  emerald: "from-emerald-400/45 to-teal-400/20 text-emerald-100",
  sky: "from-sky-400/50 to-cyan-400/20 text-sky-100"
};

export function Projects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="border-y border-white/10 px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto max-w-7xl" data-gsap-reveal>
        <SectionTitle
          index="03"
          title="Featured Projects"
          action={
            <button
              type="button"
              onClick={() => setShowAll((value) => !value)}
              className="hidden h-10 items-center gap-2 rounded-xl border border-white/10 px-4 text-xs font-bold uppercase text-white/80 transition hover:border-violet-300/60 hover:text-white sm:inline-flex"
            >
              {showAll ? "Show Featured" : "View All Projects"} <HiArrowRight />
            </button>
          }
        />
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article key={project.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-[1px] shadow-2xl shadow-black/25" initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -10 }}>
              <div className={cn("absolute inset-0 opacity-0 blur-xl transition group-hover:opacity-100", `bg-gradient-to-br ${accentClasses[project.accent as keyof typeof accentClasses]}`)} />
              <div className="relative h-full rounded-2xl bg-[#080b14]/90 p-6 backdrop-blur-xl">
                <div className={cn("mb-6 grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br text-3xl shadow-glow", accentClasses[project.accent as keyof typeof accentClasses])}><project.icon /></div>
                <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-1 text-sm text-white/55">{project.category}</p>
                <p className="mt-6 min-h-24 text-sm leading-7 text-white/70">{project.description}</p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/80">{tech}</span>)}</div>
                  <Link href={project.url} target="_blank" aria-label={`Open ${project.title} on GitHub`} className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 text-white transition group-hover:border-violet-300/60 group-hover:bg-violet-500/15"><HiArrowUpRight /></Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setShowAll((value) => !value)}
          className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl border border-white/10 px-4 text-xs font-bold uppercase text-white/80 transition hover:border-violet-300/60 hover:text-white sm:hidden"
        >
          {showAll ? "Show Featured" : "View All Projects"} <HiArrowRight />
        </button>

        {showAll ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-9 rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-2xl md:p-6"
          >
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-violet-300">GitHub Archive</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-white">{githubProjectCount.originalProjects}+ original projects</h3>
              </div>
              <p className="max-w-xl text-sm leading-6 text-white/60">
                Pulled from Shakil&apos;s public GitHub profile: {githubProjectCount.publicRepos} public repositories total, with one fork excluded from the completed-project count.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {allGithubProjects.map((repo, index) => (
                <motion.article
                  key={repo.name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(index * 0.025, 0.35) }}
                  className="group rounded-2xl border border-white/10 bg-[#080b14]/75 p-5 transition hover:-translate-y-1 hover:border-violet-300/60 hover:shadow-glow"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-display text-lg font-bold text-white">{repo.name}</h4>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/62">{repo.description}</p>
                    </div>
                    <Link href={repo.url} target="_blank" aria-label={`Open ${repo.name} on GitHub`} className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 text-white transition group-hover:bg-violet-500/15">
                      <HiArrowUpRight />
                    </Link>
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-violet-200">{repo.language}</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/55">{repo.updated}</span>
                    {repo.fork ? <span className="rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-xs text-amber-100">Fork</span> : null}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
