import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import kitchen from "@/assets/kitchen-2.jpg";
import staircase from "@/assets/staircase.jpg";
import bathroom from "@/assets/bathroom.jpg";

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow ">Who We Are</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">
            Experts in Granite<br /><span className="text-primary">& </span>Marble Solutions
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Buchex Impex Concept is a trusted name in granite and marble solutions based in Enugu. We specialize in delivering clean, durable, and elegant finishes for homes and commercial spaces.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            From kitchens to staircases, we combine craftsmanship with premium materials to give your space a refined look that lasts.
          </p>
          <Link
            to="/about"
            className="mt-7 inline-flex items-center gap-2  border-2 border-primary text-primary px-6 py-3 text-sm font-semibold  hover:bg-primary-hover hover:text-primary-foreground transition-colors"
          >
            Learn More About Us <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="grid grid-cols-2  rounded-xl border gap-1  border-yellow-400 p-2">
            <img src={kitchen} alt="Marble kitchen" loading="lazy" className="rounded-xl 
            shadow-card aspect-[1/2] h-full object-cover row-span-2" />
         <div className="flex flex-col gap-2   h-full">
             <img src={staircase} alt="Marble staircase" loading="lazy" className="rounded-xl 
            shadow-card aspect-square object-cover h-full" />
            <img src={bathroom} alt="Marble bathroom" loading="lazy" className="rounded-xl 
            shadow-card aspect-square object-cover h-full" />
         </div>
          </div>

          <div className="absolute -bottom-5 -left-5 bg-yellow-500 text-primary-foreground w-25 rounded-2xl px-3 py-5 shadow-elegant">
            <div className="text-3xl font-bold font-display text-center leading-none">10+</div>
            <div className="text-xs mt-1 opacity-90 text-center leading-tight max-w-[100px]">Years of Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
