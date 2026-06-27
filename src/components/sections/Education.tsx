"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const education = [
  { degree: "MSc Digital Marketing Strategy & Data Analysis", school: "KEDGE Business School", location: "Paris, France", period: "2022 – 2023", desc: "Advanced programme in digital marketing strategy, data analytics and business digital transformation. Core skills: SEO, SEA, CRM, marketing automation and digital performance management.", tags: ["Digital Strategy","Data Analytics","SEO/SEA","CRM","Marketing Automation"] },
  { degree: "MSc Biology (M2)", school: "University of Poitiers", location: "Poitiers, France", period: "2017 – 2022", desc: "Specialisation in cellular and molecular biology. A rigorous scientific foundation enabling the understanding and communication of complex clinical data to commercial audiences.", tags: ["Cellular Biology","Molecular Biology","Scientific Research","Data Analysis"] },
];

export function Education() {
  return (
    <section id="education" style={{ padding: "9rem 2rem", background: "var(--bg-primary)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader eyebrow="Education" title="Academic background." description="A dual degree in biology and digital marketing — the ideal combination for pharmaceutical marketing." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem", marginBottom: "4rem" }}>
          {education.map((e, i) => (
            <motion.div key={e.degree} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
              style={{ padding: "2rem", borderRadius: "var(--radius-xl)", border: "1px solid var(--border)", background: "var(--bg-card)", transition: "all 0.3s ease" }}
              onMouseOver={ev => { const el = ev.currentTarget as HTMLDivElement; el.style.borderColor = "rgba(255,255,255,0.12)"; el.style.transform = "translateY(-3px)"; }}
              onMouseOut={ev => { const el = ev.currentTarget as HTMLDivElement; el.style.borderColor = "var(--border)"; el.style.transform = "translateY(0)"; }}>
              <p style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--gold)", marginBottom: "0.875rem" }}>{e.period} · {e.location}</p>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem", letterSpacing: "-0.01em", lineHeight: 1.3 }}>{e.degree}</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", fontWeight: 500, marginBottom: "1rem" }}>{e.school}</p>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>{e.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {e.tags.map(t => <span key={t} style={{ fontSize: "0.72rem", padding: "0.25rem 0.7rem", borderRadius: "100px", background: "rgba(255,255,255,0.04)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "1rem" }}>Languages</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {[{ lang: "French", level: "Native" }, { lang: "English", level: "Professional" }].map(l => (
              <div key={l.lang} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1.25rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border)", background: "var(--bg-card)" }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)", display: "inline-block", flexShrink: 0 }} />
                <span style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "0.875rem" }}>{l.lang}</span>
                <span style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>{l.level}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
