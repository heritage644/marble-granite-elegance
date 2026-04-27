import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import staircase from "@/assets/staircase.jpg";
import staircase2 from "@/assets/staircase-2.jpg";
import countertop from "@/assets/countertop.jpg";
import kitchen from "@/assets/kitchen-2.jpg";
import wall from "@/assets/wall-cladding.jpg";
import bathroom from "@/assets/bathroom.jpg";
import bathroom2 from "@/assets/bathroom-2.jpg";
import hero from "@/assets/hero-kitchen.jpg";
import firstPic from "@/assets/image.png";
import thirdPic from "@/assets/image copy 2.png"
import secondDay from "@/assets/image copy.png"
import fouthDay from "@/assets/image copy 3.png"
import FifthDay from "@/assets/image copy 4.png"
import sixthDay from "@/assets/image copy 5.png"
import seventhDay from "@/assets/image copy 6.png"
import eightDay from "@/assets/image copy 7.png"
const imgs = [ secondDay,thirdPic, fouthDay, FifthDay, sixthDay, seventhDay, eightDay, firstPic];

export function ProjectGallery() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-x">
        <div className="text-center">
          <span className="eyebrow center">Our Work</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">See Our Recent Projects</h2>
        </div>
        <div className="mt-12 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {imgs.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="group relative overflow-hidden rounded-xl aspect-square"
            >
              <img src={src} alt={`Project ${i + 1}`} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/projects" className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors">
            View More Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
