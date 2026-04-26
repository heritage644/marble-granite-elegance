import { motion } from "framer-motion";
import { Gem, Shield, Hammer, Clock, Smile } from "lucide-react";

const items = [
  { icon: Gem, title: "Premium Materials", desc: "We use only the best granite and marble." },
  { icon: Shield, title: "Durable & Long Lasting", desc: "Built to withstand time and daily use." },
  { icon: Hammer, title: "Skilled Craftsmanship", desc: "Expert finishing with attention to detail." },
  { icon: Clock, title: "Timely Delivery", desc: "We value your time and deliver as promised." },
  { icon: Smile, title: "Customer Satisfaction", desc: "We are committed to excellence." },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="bg-primary text-primary-foreground py-12">
      <div className="container-x grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="flex items-start gap-4"
          >
            <div className="h-11 w-11 shrink-0 rounded-full bg-white/15 flex items-center justify-center">
              <it.icon className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold">{it.title}</h4>
              <p className="mt-1 text-xs text-white/85 leading-relaxed">{it.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
