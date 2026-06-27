"use client";
import { motion } from "framer-motion";
import { ExternalLink, Heart, Globe } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const projects = [
  { url: "https://www.silecoeurvousendit.fr/", name: "Si le Cœur Vous en Dit", subtitle: "Patient platform · Cardiac Amyloidosis (ATTR-CM)", brand: "VYNDAMAX · Pfizer Rare Disease", icon: Heart, accentColor: "#E07A8F", period: "2022 – 2024", role: "Omnichannel Manager — Digital Project Lead & Architect",
    context: "Cardiac amyloidosis (ATTR-CM) is a rare and often under-diagnosed disease. Patients and their families lacked a reliable, accessible digital resource to understand the disease, its symptoms and how it is managed.",
    strategy: "Design and deployment of a patient awareness website structured around the patient journey (understand → diagnose → treat → live with), including a video series to humanise the disease experience.",
    deliverables: ["Website architecture and information structure","SEO content strategy on cardiac amyloidosis","Digital media campaigns (SEA, display banners, social media)","Video series dedicated to patients and caregivers","Ongoing KPI optimisation (traffic, engagement, bounce rate)"],
    impact: "A reference digital patient platform for ATTR-CM in France, improving disease awareness and contributing to a reduction in diagnostic delay.",
    tags: ["SEO","SEA","Patient Content","Rare Disease","Veeva Vault","Digital Campaign"] },
  { url: "https://www.objectifrare.fr/", name: "Objectif Rare", subtitle: "Multi-disease HCP platform · Rare Diseases", brand: "Multi-Brand · Pfizer Rare Disease", icon: Globe, accentColor: "#4A9EE0", period: "2022 – 2024", role: "Omnichannel Manager — Digital Project Lead & Architect",
    context: "Healthcare professionals and patients dealing with rare diseases (amyloidosis, acromegaly, growth disorders, haemophilia, Duchenne Muscular Dystrophy) needed a single, structured digital entry point organised by profile and by condition.",
    strategy: "Development of a cross-Brand digital platform with navigation by profile (patient / HCP) and by pathology, integrating information modules, practical tools and clinical resources tailored to each audience.",
    deliverables: ["Cross-Brand architecture for the multi-disease platform","UX design for profile and pathology-based navigation","Deployment of patient and HCP modules by pathology","Integration of practical tools (HCP appointment booking, dashboards)","Internal team training on digital tools"],
    impact: "A strategic digital platform positioning Pfizer Rare Disease as the reference partner for healthcare professionals and patients across rare diseases.",
    tags: ["Multi-Brand Platform","UX/UI","HCP Engagement","Patient Education","Cross-BU","Drupal"] },
];

export function Projects() {
  return (
    <section id="projects" style={{ padding: "9rem 2rem", background: "var(--bg-primary)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader eyebrow="Digital Projects" title="Websites deployed" description="Two platforms designed and deployed at Pfizer Rare Disease to improve patient awareness and HCP engagement." />
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.name} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ borderRadius: "var(--radius-2xl)", border: "1px solid var(--border)", background: "var(--bg-card)", overflow: "hidden", transition: "border-color 0.3s" }}
                onMouseOver={e => (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.12)"}
                onMouseOut={e => (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)"}>
                <div style={{ height: 2, background: `linear-gradient(90deg, ${p.accentColor}, transparent)` }} />
                <div style={{ padding: "2rem 2.5rem 1.75rem", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "1.5rem", borderBottom: "1px solid var(--border)" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: `${p.accentColor}14` }}>
                    <Icon size={22} style={{ color: p.accentColor }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.625rem", marginBottom: "0.375rem" }}>
                      <span style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", padding: "0.2rem 0.65rem", borderRadius: "100px", background: `${p.accentColor}14`, color: p.accentColor, border: `1px solid ${p.accentColor}22` }}>{p.brand}</span>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{p.period}</span>
                    </div>
                    <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em", marginBottom: "0.25rem" }}>{p.name}</h3>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>{p.subtitle}</p>
                  </div>
                  <a href={p.url} target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.6rem 1.25rem", borderRadius: "var(--radius-md)", fontSize: "0.85rem", fontWeight: 600, background: "linear-gradient(135deg, #C8922A, #E6B54A)", color: "#07111F", textDecoration: "none", flexShrink: 0, boxShadow: "0 1px 8px rgba(230,181,74,0.2)", transition: "all 0.25s" }}
                    onMouseOver={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.transform = "translateY(-2px)"; a.style.boxShadow = "0 4px 16px rgba(230,181,74,0.3)"; }}
                    onMouseOut={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.transform = "translateY(0)"; a.style.boxShadow = "0 1px 8px rgba(230,181,74,0.2)"; }}>
                    <ExternalLink size={14} /> Visit website
                  </a>
                </div>
                <div style={{ padding: "2rem 2.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2.5rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {[{ label: "My role", value: p.role, highlight: true }, { label: "Context", value: p.context }, { label: "Strategy", value: p.strategy }].map(row => (
                      <div key={row.label}>
                        <p style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.09em", color: "var(--text-muted)", marginBottom: "0.375rem" }}>{row.label}</p>
                        <p style={{ fontSize: "0.875rem", color: row.highlight ? "var(--text-secondary)" : "var(--text-muted)", lineHeight: 1.65, fontWeight: row.highlight ? 500 : 400 }}>{row.value}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <div>
                      <p style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.09em", color: "var(--text-muted)", marginBottom: "0.75rem" }}>Key deliverables</p>
                      <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {p.deliverables.map((d, j) => (
                          <li key={j} style={{ display: "flex", gap: "0.625rem", fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.55 }}>
                            <span style={{ width: 4, height: 4, borderRadius: "50%", background: p.accentColor, flexShrink: 0, marginTop: "0.42rem" }} />{d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ padding: "1rem 1.25rem", borderRadius: "var(--radius-md)", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)" }}>
                      <p style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.09em", color: "var(--text-muted)", marginBottom: "0.375rem" }}>Impact</p>
                      <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{p.impact}</p>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {p.tags.map(t => <span key={t} style={{ fontSize: "0.72rem", padding: "0.25rem 0.7rem", borderRadius: "100px", background: "rgba(255,255,255,0.04)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>{t}</span>)}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
