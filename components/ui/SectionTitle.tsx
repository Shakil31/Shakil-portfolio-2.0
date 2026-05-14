import { cn } from "@/lib/utils";

export function SectionTitle({ index, title, action, className }: { index: string; title: string; action?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mb-8 flex items-center justify-between gap-5", className)}>
      <div className="flex items-center gap-5">
        <span className="grid h-11 w-11 place-items-center rounded-lg border border-violet-400/70 bg-violet-500/10 font-mono text-sm text-violet-200 shadow-glow">{index}</span>
        <div>
          <h2 className="font-display text-2xl font-bold uppercase tracking-normal text-white md:text-3xl">{title}</h2>
          <span className="mt-2 block h-px w-14 bg-gradient-to-r from-violet-400 to-cyan-300" />
        </div>
      </div>
      {action}
    </div>
  );
}
