import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground font-display font-bold text-lg shadow-sm">
        B
      </div>
      <div className="leading-tight">
        <div className={`font-display font-bold text-lg tracking-tight ${light ? "text-white" : "text-foreground"}`}>
          Buchex
        </div>
        <div className={`text-[10px] font-semibold tracking-[0.18em] ${light ? "text-white/70" : "text-muted-foreground"}`}>
          IMPEX CONCEPT
        </div>
      </div>
    </Link>
  );
}
