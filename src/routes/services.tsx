import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ContactCTA } from "@/components/site/ContactCTA";
import countertop from "@/assets/countertop.jpg";
import staircase from "@/assets/staircase-2.jpg";
import wall from "@/assets/wall-cladding.jpg";
import bathroom from "@/assets/bathroom-2.jpg";
import kitchen from "@/assets/kitchen-2.jpg";
import hero from "@/assets/hero-kitchen.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Buchex Impex Concept" },
      { name: "description", content: "Granite countertops, marble staircases, wall cladding, bathroom finishing, outdoor stone and commercial installations." },
      { property: "og:title", content: "Our Services — Buchex Impex Concept" },
      { property: "og:description", content: "Full-service granite and marble installation across Enugu and beyond." },
      { property: "og:image", content: countertop },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { img: countertop, title: "Granite Countertops", desc: "Polished, sealed, and built to outlast trends. Ideal for kitchens and vanities.", benefits: ["Heat & scratch resistant", "Easy to clean", "Custom edging"], process: "Measure → Slab selection → Precision cut → On-site install." },
  { img: staircase, title: "Marble Staircases", desc: "Stunning marble step finishing for residential and commercial properties.", benefits: ["Premium polish", "Slip-resistant options", "Glass railing compatible"], process: "Site survey → Riser fabrication → Layered installation → Final polish." },
  { img: wall, title: "Wall Cladding", desc: "Floor-to-ceiling marble feature walls that turn rooms into statements.", benefits: ["Book-matched veining", "Seamless joints", "Indoor & outdoor"], process: "Layout planning → Slab matching → Adhesive mounting → Sealing." },
  { img: bathroom, title: "Bathroom Marble Finishing", desc: "Spa-grade marble walls, floors, and vanity tops for luxury bathrooms.", benefits: ["Waterproof seal", "Mold resistant finish", "Custom shapes"], process: "Design consult → Waterproofing → Marble laying → Grouting & seal." },
  { img: hero, title: "Outdoor Stone Projects", desc: "Driveways, garden walls, patios, and façades with weather-grade stone.", benefits: ["UV stable", "Frost & rain proof", "Slip-textured options"], process: "Site prep → Base laying → Stone install → Weather sealing." },
  { img: kitchen, title: "Commercial Stone Installations", desc: "Large-format installations for hotels, offices, banks, and showrooms.", benefits: ["Project management", "Bulk material sourcing", "Fast turnaround"], process: "Site assessment → Procurement → Phased install → Handover." },
];

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Premium Stone, End to End" description="From bespoke kitchens to large commercial installations." image={countertop} />

      <section className="py-20 md:py-28">
        <div className="container-x space-y-20">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`grid gap-10 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <img src={s.img} alt={s.title} loading="lazy" className="rounded-2xl shadow-elegant aspect-[4/3] object-cover w-full" />
              <div>
                <span className="eyebrow">0{i + 1} / Service</span>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold">{s.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-xl bg-cream p-4 text-sm">
                  <span className="font-semibold text-primary">Our Process: </span>
                  <span className="text-muted-foreground">{s.process}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
