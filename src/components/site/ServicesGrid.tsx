import { motion } from "framer-motion";
import { ChefHat, MoveUpRight, Layers, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import countertop from "@/assets/countertop.jpg";
import staircase from "@/assets/staircase-2.jpg";
import wall from "@/assets/wall-cladding.jpg";
import kitchen from "@/assets/kitchen-2.jpg";

const services = [
  { icon: ChefHat, title: "Kitchen Countertops", desc: "Beautiful, polished granite surfaces built for durability and style.", img: countertop },
  { icon: MoveUpRight, title: "Staircase Finishing", desc: "Modern marble and granite stair designs that elevate your home.", img: staircase },
  { icon: Layers, title: "Marble Installations", desc: "Clean, precise marble works for floors, walls, and interiors.", img: wall },
  { icon: Wrench, title: "Custom Projects", desc: "We bring your ideas to life with tailored stone solutions.", img: kitchen },
];

export function ServicesGrid() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-x">
        <div className="text-center">
          <span className="eyebrow center">Our Services</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">What We Offer</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute -bottom-5 left-5 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-elegant">
                  <s.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6 pt-8">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
