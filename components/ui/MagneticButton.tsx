"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type IconType } from "react-icons";
import { HiArrowDownTray, HiArrowRight } from "react-icons/hi2";
import { cn } from "@/lib/utils";

export function MagneticButton({ href, children, variant = "primary", download, className, icon: Icon }: { href: string; children: React.ReactNode; variant?: "primary" | "ghost"; download?: boolean; className?: string; icon?: IconType }) {
  const ButtonIcon = Icon ?? (download ? HiArrowDownTray : HiArrowRight);
  return (
    <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Link href={href} download={download} className={cn("group inline-flex h-12 items-center justify-center gap-3 rounded-xl px-6 text-sm font-bold uppercase transition", variant === "primary" ? "bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-glow hover:shadow-cyan" : "border border-white/15 bg-white/[0.03] text-white hover:border-violet-300/60 hover:bg-white/[0.07]", className)}>
        {children}
        <ButtonIcon className="text-lg transition group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
