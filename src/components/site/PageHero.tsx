import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-kitchen.jpg";

export function PageHero({ eyebrow, title, description, image = heroImg }: { eyebrow: string; title: string; description?: string; image?: string }) {
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      <div className="relative z-10 container-x flex h-full items-end pb-16 pt-32">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl text-white">
          <span className="text-xs font-semibold tracking-[0.22em] text-yellow-500 uppercase">{eyebrow}</span>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold">{title}</h1>
          {description && <p className="mt-4 max-w-xl text-white/80">{description}</p>}
          <div className="mt-5 text-xs text-white/60">
            <Link to="/" className="hover:text-white">Home</Link> <span className="mx-2">/</span> {eyebrow}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
