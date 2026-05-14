"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cleanupAnimations: (() => void) | undefined;
    let active = true;
    const timer = window.setTimeout(() => setLoading(false), 1250);

    async function loadMotionEnhancements() {
      const [{ default: Lenis }, { default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("@studio-freight/lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger")
      ]);

      if (!active) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({ duration: 1.2, smoothWheel: true, wheelMultiplier: 0.9 });
      let frame = 0;

      const raf = (time: number) => {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      };

      frame = requestAnimationFrame(raf);

      gsap.utils.toArray<HTMLElement>("[data-gsap-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 36, filter: "blur(10px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 82%" }
          }
        );
      });

      gsap.to("[data-parallax]", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1 }
      });

      cleanupAnimations = () => {
        window.cancelAnimationFrame(frame);
        lenis.destroy();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }

    loadMotionEnhancements();

    return () => {
      active = false;
      window.clearTimeout(timer);
      cleanupAnimations?.();
    };
  }, []);

  return (
    <>
      <CursorGlow />
      <AnimatePresence>
        {loading ? (
          <motion.div className="fixed inset-0 z-[100] grid place-items-center bg-night" exit={{ opacity: 0, filter: "blur(18px)" }} transition={{ duration: 0.75, ease: "easeInOut" }}>
            <motion.div className="relative h-24 w-24 rounded-full border border-violet-400/40" animate={{ rotate: 360 }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}>
              <span className="absolute inset-3 rounded-full border border-cyan-300/40 shadow-cyan" />
              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-violet-300 shadow-glow" />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      {children}
    </>
  );
}

function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const update = (event: PointerEvent) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", update);
    return () => window.removeEventListener("pointermove", update);
  }, []);
  return <motion.div className="pointer-events-none fixed z-[90] hidden h-44 w-44 rounded-full bg-violet-500/20 blur-3xl lg:block" animate={{ x: position.x - 88, y: position.y - 88 }} transition={{ type: "spring", stiffness: 120, damping: 24, mass: 0.4 }} />;
}
