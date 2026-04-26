import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow, title, description, center = false,
}: { eyebrow: string; title: string; description?: string; center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}
    >
      <span className={`eyebrow ${center ? "center" : ""}`}>{eyebrow}</span>
      <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
        {title}
      </h2>
      {description && <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>}
    </motion.div>
  );
}
