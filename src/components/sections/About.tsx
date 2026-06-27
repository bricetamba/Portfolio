"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const pillars = [
  { title: "Brand Strategy", desc: "Define and execute the brand plan and tactical plan — with a clear vision of market dynamics and competitive positioning." },
  { title: "Omnichannel Marketing", desc: "Integrated customer journeys combining digital, field and pharmacy channels to maximise HCP and patient engagement." },
  { title: "Digital Marketing", desc: "Digital platforms, digital tools and media campaigns — from conception through to performance measurement." },
  { title: "Team Leadership", desc: "Team management, cross-BU coordination and training colleagues on digital tools and AI." },
  
];

export function About() {
  return (
    <section id="about" style={{ padding: "9rem 2rem", background: "var(--bg-primary)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gap: "5rem", alignItems: "start" }} className="about-grid">
          <div>
            <SectionHeader eyebrow="About" title="Where science meets strategy." />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                "I am a pharmaceutical brand manager at Pfizer, with a dual background in biology and digital marketing and data analysis.",
                "My expertise as a brand manager in vaccines and rare diseases, 2 radically different market dynamics that have sharpened my ability to adapt my strategic thinking to any commercial context.",
                "I have not only designed omnichannel strategies but also deployed them concretely: two live websites, field digital tools and media campaigns with measurable impact on HCP knowledge and patient engagement.",
              ].map((text, i) => (
                <motion.p key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-muted)" }}>
                  {text}
                </motion.p>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
            {pillars.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
                style={{ padding: "1.5rem", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)", background: "var(--bg-card)", transition: "all 0.3s ease", cursor: "default" }}
                onMouseOver={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "var(--gold-border)"; el.style.background = "var(--bg-card-hover)"; el.style.transform = "translateY(-2px)"; }}
                onMouseOut={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "var(--border)"; el.style.background = "var(--bg-card)"; el.style.transform = "translateY(0)"; }}>
                <h3 style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`.about-grid { grid-template-columns: 1fr 1fr; } @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
