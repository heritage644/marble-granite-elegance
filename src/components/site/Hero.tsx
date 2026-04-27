import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight, BadgeCheck } from "lucide-react";
import heroImg from "@/assets/hero-kitchen.jpg";

const stagger = { animate: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } };
const item = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Premium marble kitchen"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="relative z-10 container-x flex min-h-screen items-center pt-28 pb-20">
        <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-2xl text-white">
          <motion.span variants={item} className="inline-flex items-center text-xs
           font-semibold tracking-[0.22em] text-yellow-400 uppercase">
            Premium Quality. Excellent Finish.
          </motion.span>
          <motion.h1 variants={item} className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-[1.05]">
            Premium Granite<br />& Marble Finishes
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-xl text-base md:text-lg  text-white/80 leading-relaxed">
            Transform your kitchen, staircase, and <br /> interiors with high-quality granite and <br /> marble installations crafted to perfection.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/2348154780100"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2  bg-whatsapp px-10 py-3.5 text-sm 
              font-semibold text-whatsapp-foreground shadow-elegant hover:scale-[1.03] transition-transform"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
           
          </motion.div>
          <motion.div variants={item} className="mt-10 inline-flex items-center gap-2 text-sm text-white/80">
            <BadgeCheck className="h-5 w-5 text-green-400 " />
            Trusted by homes & businesses in Enugu
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
