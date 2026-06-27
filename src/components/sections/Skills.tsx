"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const categories = [
  { id: "brand", label: "Brand Management", skills: ["Brand Strategy","Brand Planning","Lifecycle Management","Forecasting","Competitive Positioning","Market Intelligence","Budget Management","Promotional Mix"] },
  { id: "digital", label: "Digital Marketing", skills: ["SEO","SEA / Google Ads","Website Management","Social Media Ads","Display Campaigns (DSP)","Email Automation","Digital Content","Veeva Vault"] },
  { id: "omnichannel", label: "Omnichannel", skills: ["Omnichannel Strategy","Customer Journey (HCP & Patient)","CRM Marketing","Salesforce Marketing Cloud","HCP Engagement","Pharmacy Activation","Webinars","RTEs & HQ Emails"] },
  { id: "data", label: "Data & Analytics", skills: ["KPI Dashboards","Google Analytics","Adobe Analytics","Power BI","Performance Analysis","Tracking & Optimisation","Market Research","Commercial Reporting"] },
  { id: "leadership", label: "Leadership", skills: ["Team Management","Team Training","Cross-BU Project Management","Agency Coordination","Stakeholder Management","AI & Digital Training","Change Management","Presentation Skills"] },
];

export function Skills() {
  const [active, setActive] = useState("brand");
  const current = categories.find(c => c.id === active)!;
  return (
    <section id="skills" style={{ padding: "9rem 2rem", background: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader eyebrow="Skills" title="Expertise at a glance." description="A hybrid profile combining brand strategy, digital marketing, data analytics and leadership." centered />
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem", marginBottom: "2rem" }}>
          {categories.map(c => {
            const isActive = active === c.id;
            return (
              <button key={c.id} onClick={() => setActive(c.id)}
                style={{ padding: "0.5rem 1.125rem", borderRadius: "var(--radius-md)", fontSize: "0.85rem", fontWeight: isActive ? 600 : 400, cursor: "pointer", background: isActive ? "linear-gradient(135deg, #C8922A, #E6B54A)" : "rgba(255,255,255,0.04)", color: isActive ? "#07111F" : "var(--text-muted)", border: isActive ? "none" : "1px solid var(--border)", transition: "all 0.25s ease", boxShadow: isActive ? "0 2px 10px rgba(230,181,74,0.25)" : "none" }}
                onMouseOver={e => { if (!isActive) { const b = e.currentTarget as HTMLButtonElement; b.style.color = "var(--text-secondary)"; b.style.background = "rgba(255,255,255,0.07)"; } }}
                onMouseOut={e => { if (!isActive) { const b = e.currentTarget as HTMLButtonElement; b.style.color = "var(--text-muted)"; b.style.background = "rgba(255,255,255,0.04)"; } }}>
                {c.label}
              </button>
            );
          })}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}
            style={{ padding: "2.5rem", borderRadius: "var(--radius-2xl)", border: "1px solid var(--border)", background: "var(--bg-card)" }}>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "1.5rem" }}>{current.label} — {current.skills.length} skills</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
              {current.skills.map((s, i) => (
                <motion.span key={s} initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.035 }}
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", padding: "0.5rem 1.125rem", borderRadius: "100px", fontSize: "0.85rem", fontWeight: 500, background: "rgba(255,255,255,0.04)", color: "var(--text-secondary)", border: "1px solid var(--border)", transition: "all 0.2s", cursor: "default" }}
                  onMouseOver={e => { const el = e.currentTarget as HTMLSpanElement; el.style.background = "var(--gold-dim)"; el.style.color = "var(--gold)"; el.style.borderColor = "var(--gold-border)"; }}
                  onMouseOut={e => { const el = e.currentTarget as HTMLSpanElement; el.style.background = "rgba(255,255,255,0.04)"; el.style.color = "var(--text-secondary)"; el.style.borderColor = "var(--border)"; }}>
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
