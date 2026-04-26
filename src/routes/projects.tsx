import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ContactCTA } from "@/components/site/ContactCTA";
import staircase from "@/assets/staircase.jpg";
import staircase2 from "@/assets/staircase-2.jpg";
import countertop from "@/assets/countertop.jpg";
import kitchen from "@/assets/kitchen-2.jpg";
import wall from "@/assets/wall-cladding.jpg";
import bathroom from "@/assets/bathroom.jpg";
import bathroom2 from "@/assets/bathroom-2.jpg";
import hero from "@/assets/hero-kitchen.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Buchex Impex Concept" },
      { name: "description", content: "Browse a portfolio of premium granite and marble projects completed across Enugu and Nigeria." },
      { property: "og:title", content: "Our Projects — Buchex Impex Concept" },
      { property: "og:description", content: "12+ premium granite and marble installations across Nigeria." },
      { property: "og:image", content: hero },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  { img: hero, title: "Marble Kitchen Renovation", category: "Kitchen", location: "GRA, Enugu", date: "Mar 2026", desc: "Full Calacatta marble island and matching backsplash." },
  { img: staircase2, title: "Black Marble Grand Staircase", category: "Staircase", location: "Independence Layout", date: "Feb 2026", desc: "Dramatic black marble steps with glass railing." },
  { img: countertop, title: "Polished Granite Countertop", category: "Countertop", location: "New Haven", date: "Feb 2026", desc: "Glossy black granite with mirror finish." },
  { img: bathroom2, title: "Luxury Master Bathroom", category: "Bathroom", location: "Trans-Ekulu", date: "Jan 2026", desc: "Wall-to-wall white marble with bronze fixtures." },
  { img: staircase, title: "White Marble Stair Hall", category: "Staircase", location: "Achara Layout", date: "Jan 2026", desc: "Soft white marble with glass balustrade." },
  { img: kitchen, title: "Modern Kitchen Island", category: "Kitchen", location: "Uwani", date: "Dec 2025", desc: "Quartz island in a minimalist dark kitchen." },
  { img: wall, title: "Marble Feature Wall", category: "Cladding", location: "Ogui Road", date: "Dec 2025", desc: "Book-matched marble TV wall." },
  { img: bathroom, title: "Floating Vanity Marble Top", category: "Bathroom", location: "Coal Camp", date: "Nov 2025", desc: "Custom floating vanity with round mirror." },
  { img: hero, title: "Hotel Lobby Granite Floor", category: "Commercial", location: "Independence Layout", date: "Oct 2025", desc: "Large-format granite tiles for hotel lobby." },
  { img: staircase2, title: "Office Reception Stairs", category: "Commercial", location: "Ogui Road", date: "Oct 2025", desc: "Granite steps with brass nosing." },
  { img: kitchen, title: "Restaurant Bar Counter", category: "Commercial", location: "GRA, Enugu", date: "Sep 2025", desc: "12m granite bar in a fine-dining restaurant." },
  { img: countertop, title: "Outdoor Stone Patio", category: "Outdoor", location: "Trans-Ekulu", date: "Aug 2025", desc: "Weather-grade granite patio installation." },
];

function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Our Work" title="Recent Projects & Installations" description="A small selection of our most loved installations." image={staircase2} />

      <section className="py-20">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all"
            >
              <div className="relative h-60 overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">{p.category}</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {p.location}</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
