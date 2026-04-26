import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-md text-sm text-white/70 leading-relaxed">
            Premium Granite & Marble Solutions. Built with strength. Finished with elegance.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 text-white">Explore</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/projects" className="hover:text-primary">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 text-white">Contact</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>#72/73 Kenyetta Street,<br />Uwani, Enugu</li>
            <li>08154780100</li>
            <li>info@bucheximpex.com</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a href="#" className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href="https://wa.me/2348154780100" className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"><MessageCircle className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-center text-xs text-white/60">
          © 2026 Buchex Impex Concept. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
