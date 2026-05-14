"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { HiBolt } from "react-icons/hi2";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const hideTimer = useRef<number | null>(null);

  useEffect(() => {
    const shouldAutoHide = () => window.scrollY > window.innerHeight * 0.45;

    const clearHideTimer = () => {
      if (hideTimer.current) {
        window.clearTimeout(hideTimer.current);
      }
    };

    const scheduleHide = () => {
      clearHideTimer();
      if (shouldAutoHide() && !open) {
        hideTimer.current = window.setTimeout(() => setVisible(false), 1400);
      }
    };

    const handleScroll = () => {
      if (shouldAutoHide()) {
        setVisible(false);
        setOpen(false);
      } else {
        setVisible(true);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!shouldAutoHide()) {
        setVisible(true);
        return;
      }

      setVisible(true);
      if (event.clientY > 120) {
        scheduleHide();
      } else {
        clearHideTimer();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    handleScroll();

    return () => {
      clearHideTimer();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [open]);

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 px-4 py-4"
      animate={{
        y: visible || open ? 0 : -112,
        opacity: visible || open ? 1 : 0
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setVisible(true)}
    >
      <div
        className="fixed inset-x-0 top-0 h-5"
        onMouseEnter={() => setVisible(true)}
        aria-hidden="true"
      />
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-4 py-3 backdrop-blur-2xl md:px-6">
        <Link href="#home" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-violet-300/50 bg-violet-500/10 font-display text-2xl font-bold text-white shadow-glow">S</span>
          <span className="hidden font-display text-sm font-semibold uppercase tracking-[0.28em] text-white/80 sm:block">Barua</span>
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item, index) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="group relative text-xs font-semibold uppercase text-white/68 transition hover:text-white">
              {item}
              <span className={cn("absolute -bottom-3 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-violet-300 opacity-0 shadow-glow transition group-hover:opacity-100", index === 0 && "opacity-100")} />
            </Link>
          ))}
        </div>
        <Link href="#contact" className="hidden h-11 items-center gap-3 rounded-full border border-violet-400/70 px-5 text-xs font-bold uppercase text-white shadow-glow transition hover:bg-violet-500/15 md:inline-flex">
          Let&apos;s Connect <HiBolt className="rounded-full bg-violet-500 p-1 text-xl" />
        </Link>
        <button className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>
      {open ? (
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="mx-auto mt-3 grid max-w-7xl gap-2 rounded-2xl border border-white/10 bg-black/80 p-4 backdrop-blur-2xl lg:hidden">
          {navItems.map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold uppercase text-white/75 hover:bg-white/10 hover:text-white">{item}</Link>
          ))}
        </motion.div>
      ) : null}
    </motion.header>
  );
}
