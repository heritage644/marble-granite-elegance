import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="eyebrow ">Let's Work Together</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Let's Upgrade<br /><span className="text-primary">Your Space</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
            Ready to upgrade your home or project with premium granite and marble? Reach out now and let's get started.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="grid gap-4">
          <div className="bg-white rounded-2xl p-6 shadow-card grid gap-4">
            <Row icon={MapPin} title="Address" lines={["#72/73 Kenyetta Street, Uwani, Enugu"]} />
            <Row icon={Phone} title="Phone" lines={["08154780100", "09050377975"]} />
            <Row icon={Mail} title="Email" lines={["info@bucheximpex.com"]} />
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-card flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-11 w-11 rounded-full bg-whatsapp/15 text-whatsapp flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-sm">Chat on WhatsApp</div>
                <div className="text-xs text-muted-foreground">Get a fast response on WhatsApp</div>
              </div>
            </div>
            <a href="https://wa.me/2348154780100" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-xs font-semibold text-whatsapp-foreground hover:opacity-90 transition-opacity whitespace-nowrap">
              Click to Chat <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Row({ icon: Icon, title, lines }: { icon: typeof MapPin; title: string; lines: string[] }) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{title}</div>
        {lines.map((l) => <div key={l} className="text-sm text-foreground">{l}</div>)}
      </div>
    </div>
  );
}
