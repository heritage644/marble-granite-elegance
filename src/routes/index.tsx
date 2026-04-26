import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { AboutSection } from "@/components/site/AboutSection";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { ProjectGallery } from "@/components/site/ProjectGallery";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { ContactCTA } from "@/components/site/ContactCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Buchex Impex Concept — Premium Granite & Marble in Enugu" },
      { name: "description", content: "Premium granite and marble installations for kitchens, staircases and interiors in Enugu. Crafted with precision and elegance." },
      { property: "og:title", content: "Buchex Impex Concept — Premium Granite & Marble" },
      { property: "og:description", content: "Premium granite and marble installations crafted to perfection." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesGrid />
      <ProjectGallery />
      <WhyChooseUs />
      <ContactCTA />
    </>
  );
}
