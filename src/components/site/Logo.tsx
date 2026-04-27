import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2 group">
     
      <div className="leading-snug pt-3">
        <div className={`font-header tracking-wide  lg:text-5xl sm:text-3xl text-2xl racking-tight ${light ? "text-yellow-400" : "text-foreground"}`}>
          Buchex
        </div>
        <div className={`text-[15px] tracking-wide italic font-semibold tracking-[0.18em] ${light ? "text-white/70" : "text-muted-foreground"}`}>
          IMPEX CONCEPT
        </div>
        <div className={`text-[10px] tracking-wide font-semibold tracking-[0.18em] ${light ? "text-yellow-400" : "text-muted-foreground"}`}>
            GRANITE AND MARBLES
        </div>
      </div>
    </Link>
  );
}
