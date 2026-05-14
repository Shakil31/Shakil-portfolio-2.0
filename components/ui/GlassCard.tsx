import { cn } from "@/lib/utils";

export function GlassCard({ children, className, ...props }: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("rounded-2xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/30 backdrop-blur-2xl", className)} {...props}>
      {children}
    </div>
  );
}
