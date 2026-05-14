import Link from "next/link";
import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";
import { contactItems, personal } from "@/lib/data";

export function Footer() {
  return (
    <footer id="contact" className="px-4 pb-8 md:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_2fr_0.8fr] lg:items-center">
          <div className="flex items-center gap-5">
            <span className="grid h-16 w-16 place-items-center rounded-full border border-violet-300/60 bg-violet-500/15 font-display text-4xl font-black text-white shadow-glow">S</span>
            <p className="font-display text-xl font-bold text-white">Let&apos;s build something <span className="text-violet-300">amazing together.</span></p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {contactItems.map((item) => (
              <Link key={item.label} href={item.href} className="group">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-violet-300">{item.label}</span>
                <span className="inline-flex items-center gap-2 text-sm text-white/70 transition group-hover:text-white"><item.icon className="shrink-0" />{item.value}</span>
              </Link>
            ))}
          </div>
          <div className="flex gap-3 lg:justify-end">
            <Social href={personal.github} label="GitHub" icon={<FaGithub />} />
            <Social href={personal.linkedin} label="LinkedIn" icon={<FaLinkedin />} />
            <Social href={`mailto:${personal.email}`} label="Email" icon={<HiEnvelope />} />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-5 flex max-w-7xl flex-col gap-3 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Shakil Barua. All rights reserved.</p>
        <p className="inline-flex items-center gap-2">Built with<bold>BITAVIO</bold></p>
      </div>
    </footer>
  );
}

function Social({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return <Link href={href} target={href.startsWith("http") ? "_blank" : undefined} aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-violet-300/45 bg-violet-500/10 text-xl text-white transition hover:-translate-y-1 hover:bg-violet-500/25 hover:shadow-glow">{icon}</Link>;
}
