import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Award } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { ContactCTA } from "@/components/site/ContactCTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import kitchen from "@/assets/kitchen-2.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Buchex Impex Concept" },
      { name: "description", content: "Learn about Buchex Impex Concept, a trusted granite and marble company in Enugu with 10+ years of craftsmanship." },
      { property: "og:title", content: "About Buchex Impex Concept" },
      { property: "og:description", content: "10+ years of premium granite and marble craftsmanship in Enugu." },
      { property: "og:image", content: kitchen },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Chinedu Okeke", role: "Project Manager", initials: "CO" },
  { name: "Ifeanyi Nwosu", role: "Lead Installer", initials: "IN" },
  { name: "Adaeze Eze", role: "Interior Consultant", initials: "AE" },
];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Crafting Stone, Building Trust" description="A decade of premium
       granite and marble craftsmanship in Enugu." />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.img src={kitchen} alt="Our work" className="rounded-2xl shadow-elegant aspect-[4/3] object-cover"
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          />
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">A Decade of Premium Stone Finishing</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Founded with a vision for elegance and durability, Buchex Impex Concept has grown into one of Enugu's most trusted names in granite and marble installation. We have served hundreds of homes, hotels, and offices across Nigeria.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Every slab is handpicked. Every cut is measured twice. Our team blends old-world craftsmanship with modern installation techniques to deliver finishes that last generations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, title: "Our Mission", text: "To transform spaces with premium granite and marble craftsmanship." },
            { icon: Eye, title: "Our Vision", text: "To become the leading marble finishing company in Nigeria." },
            { icon: Award, title: "Our Promise", text: "Uncompromising quality, on-time delivery, and finishes that endure." },
          ].map((c) => (
            <div key={c.title} className="bg-white rounded-2xl p-8 shadow-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center"><c.icon className="h-5 w-5" /></div>
              <h3 className="mt-5 text-xl font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading center eyebrow="Our Team" title="Meet the Craftsmen" description="A small, dedicated team obsessed with detail." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="bg-white rounded-2xl p-8 text-center shadow-card hover:shadow-elegant transition-shadow">
                <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-primary to-primary-hover text-primary-foreground flex items-center justify-center text-2xl font-bold font-display">
                  {m.initials}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{m.name}</h3>
                <div className="text-sm text-primary font-medium">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ContactCTA />
    </>
  );
}
