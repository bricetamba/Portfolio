"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, MapPin, Download } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: "brice.tamba.pr@gmail.com", href: "mailto:brice.tamba.pr@gmail.com" },
    { icon: Phone, label: "Phone", value: "+33 6 75 64 27 57", href: "tel:+33675642757" },
    { icon: Linkedin, label: "LinkedIn", value: "@Brice TAMBA PRONO", href: "https://www.linkedin.com/in/brice-tamba-prono" },
    { icon: MapPin, label: "Location", value: "London — Paris", href: null },
  ];
  return (
    <section id="contact" style={{ padding: "9rem 2rem", background: "var(--bg-primary)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader eyebrow="Contact" title="Let's work together." description="Open to new opportunities in pharmaceutical brand management, omnichannel marketing and digital transformation." centered />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2.5rem" }}>
          {items.map((item, i) => {
            const Icon = item.icon;
            const inner = (
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{ padding: "1.75rem 1.5rem", borderRadius: "var(--radius-xl)", border: "1px solid var(--border)", background: "var(--bg-card)", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.875rem", transition: "all 0.25s ease", cursor: item.href ? "pointer" : "default" }}
                onMouseOver={ev => { if (item.href) { const el = ev.currentTarget as HTMLDivElement; el.style.borderColor = "var(--gold-border)"; el.style.transform = "translateY(-3px)"; el.style.background = "var(--bg-card-hover)"; } }}
                onMouseOut={ev => { const el = ev.currentTarget as HTMLDivElement; el.style.borderColor = "var(--border)"; el.style.transform = "translateY(0)"; el.style.background = "var(--bg-card)"; }}>
                <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(230,181,74,0.08)" }}>
                  <Icon size={18} style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <p style={{ fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "0.35rem" }}>{item.label}</p>
                  <p style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)" }}>{item.value}</p>
                </div>
              </motion.div>
            );
            return item.href ? <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ textDecoration: "none" }}>{inner}</a> : <div key={item.label}>{inner}</div>;
          })}
        </div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.875rem" }}>
          <a href="mailto:brice.tamba.pr@gmail.com"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", borderRadius: "var(--radius-md)", fontSize: "0.9rem", fontWeight: 700, background: "linear-gradient(135deg, #C8922A, #E6B54A)", color: "#07111F", textDecoration: "none", boxShadow: "0 2px 14px rgba(230,181,74,0.25)", transition: "all 0.25s" }}
            onMouseOver={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.transform = "translateY(-2px)"; a.style.boxShadow = "0 6px 24px rgba(230,181,74,0.35)"; }}
            onMouseOut={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.transform = "translateY(0)"; a.style.boxShadow = "0 2px 14px rgba(230,181,74,0.25)"; }}>
            <Mail size={16} /> Send an email
          </a>
          <a href="/Tamba_Prono_Brice_Resume.pdf" download
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", borderRadius: "var(--radius-md)", fontSize: "0.9rem", fontWeight: 600, background: "rgba(255,255,255,0.04)", color: "var(--text-secondary)", textDecoration: "none", border: "1px solid var(--border)", transition: "all 0.25s" }}
            onMouseOver={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "rgba(255,255,255,0.08)"; a.style.borderColor = "var(--border-hover)"; a.style.transform = "translateY(-1px)"; }}
            onMouseOut={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "rgba(255,255,255,0.04)"; a.style.borderColor = "var(--border)"; a.style.transform = "translateY(0)"; }}>
            <Download size={16} /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
