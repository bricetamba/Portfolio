"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const roles = [
  { id: "vaccine", company: "Pfizer", period: "March 2025 – Present", location: "Paris, France", role: "Brand Manager — Vaccines", type: "Brand Management", color: "#4A9EE0",
    summary: "Leading the commercial strategy and execution for the PCV20 vaccine brand in France — brand planning, omnichannel Direct-to-Consumer (DTC) activation, pharmacy strategy and field team training.",
    responsibilities: ["Omnichannel DTC campaign (TV, DOOH, SEA, social media) to drive patient awareness and pharmacy demand for PCV20","Define the Brand Plan and Tactical Plan — market share growth and competitive positioning","Product forecast preparation and monitoring","Design and delivery of field team training sessions","Pharmacy strategy: service-based approach, discount policy, pharmacist promotional materials and pharmacy group partnerships"],
    achievements: ["Launched and managed a multi-channel DTC campaign (TV, DOOH, SEA, Social Media)","Developed a structured pharmacy strategy built around a service-based approach","Strengthened the competitive positioning of PCV20 on the French market"],
    tools: ["Veeva Vault","Salesforce CRM","SEA / Google Ads","Social Media Ads","Tableau"] },
  { id: "specialty", company: "Pfizer", period: "June 2024 – March 2025", location: "Paris, France", role: "Brand Manager — Rare Diseases ", type: "Brand Management", color: "#9B7FE8",
    summary: "Launch of two rare diseases  products, including an innovative gene therapy in a hospital setting and monoclonal antibody — Leading scientific communication and pre-commercialization activities in coordination with cross-functional teams.",
    responsibilities: ["Support to the launch of two products, including an innovative gene therapy in a hospital setting","Contribution to Brand Plan and Tactical Plan","Commercial performance analysis, budget tracking and control","Competitive intelligence: market analysis and competitor benchmarking","Market research to better understand target HCP needs","Design and delivery of field team training sessions"],
    achievements: ["Contributed to the commercial launch of a gene therapy — a highly innovative product in a hospital setting","Deployed market research translated into targeted marketing actions","Established rigorous budget tracking and commercial performance reporting"],
    tools: ["Veeva Vault","CRM","Market Research Tools","Tableau","Excel"] },
  { id: "omnichannel", company: "Pfizer", period: "Sept. 2022 – June 2024", location: "Paris, France", role: "Omnichannel Manager — Rare Diseases", type: "Omnichannel & Digital", color: "#4DC9A8",
    summary: "Designing and deploying the omnichannel digital strategy for Pfizer Rare Disease brands — including the development of silecoeurvousendit.fr, objectifrare.fr and an internal resource platform.",
    responsibilities: ["Design and deployment of the omnichannel digital strategy for Rare Disease brands","Creation and deployment of field digital tools (RTEs, HQ emails, DSPs, videos, websites)","Development of websites and an internal platform to centralise product resources","Management of omnichannel campaigns (SEA, SEO, banners, email) to improve HCP knowledge and reduce diagnostic delay","Regular digital KPI analysis and tactical adjustments","Development of dashboards and HCP appointment booking tools","Management and upskilling of two team members","Training of Pfizer France teams on digital tools and AI"],
    achievements: ["Deployed silecoeurvousendit.fr — the reference patient platform for ATTR-CM in France","Deployed objectifrare.fr — a multi-Brand HCP and patient platform for rare diseases","Improved HCP knowledge and contributed to reducing diagnostic delay through digital campaigns","Managed and developed two team members","Trained all Pfizer France marketing teams on digital tools and AI"],
    tools: ["Veeva Vault","SEA/SEO","Salesforce Marketing Cloud","Adobe Analytics","DSPs"] },
  { id: "sanofi", company: "Sanofi", period: "Sept. 2022 – June 2024", location: "Paris, France", role: "Digital Transformation Lead & Serialization", type: "Digital Transformation", color: "#E07A5F",
    summary: "Leading digital transformation initiatives within commercial operations at Sanofi and serialization manager.",
    responsibilities: ["Implemented an innovative process to improve interactions between Sanofi's customers and Sanofi's manufacturing sites", " Coordination of Supply Chain, IT, Regulatory and Commercial teams","Deployment of pharmaceutical serialization compliance (traceability)","Cross-functional management of digital transformation projects"],
    achievements: ["Successfully deployed serialization compliance infrastructure on schedule","Digitalized process improving the fluidity of client/production interactions"],
    tools: ["Project Management Tools","Agile methodology (Scrum)","SharePoint","Serialization Software"] },
];

function RoleCard({ role, index }: { role: typeof roles[0]; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ display: "flex", gap: "1.75rem" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div style={{ width: 12, height: 12, borderRadius: "50%", marginTop: "0.375rem", flexShrink: 0, background: role.color, boxShadow: `0 0 16px ${role.color}50`, border: "2px solid var(--bg-primary)" }} />
        <div style={{ width: 1, flex: 1, marginTop: "0.5rem", background: "linear-gradient(to bottom, var(--border), transparent)", minHeight: 24 }} />
      </div>
      <div style={{ flex: 1, paddingBottom: "3rem" }}>
        <div onClick={() => setExpanded(!expanded)} style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", cursor: "pointer", marginBottom: "0.75rem" }}>
          <div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.625rem", marginBottom: "0.375rem" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em", padding: "0.2rem 0.65rem", borderRadius: "100px", background: `${role.color}14`, color: role.color, border: `1px solid ${role.color}28` }}>{role.type}</span>
              <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{role.company} · {role.period} · {role.location}</span>
            </div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.3, letterSpacing: "-0.01em" }}>{role.role}</h3>
          </div>
          <button style={{ padding: "0.375rem", borderRadius: "var(--radius-sm)", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", color: "var(--text-muted)", cursor: "pointer", flexShrink: 0, marginTop: "0.25rem", transition: "all 0.2s" }}>
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>
        <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "0.75rem" }}>{role.summary}</p>
        <AnimatePresence>
          {expanded && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.32 }} style={{ overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem", paddingTop: "0.5rem" }}>
                {[{ label: "Responsibilities", items: role.responsibilities, dot: role.color }, { label: "Key Achievements", items: role.achievements, dot: "#4DC9A8" }].map(col => (
                  <div key={col.label} style={{ padding: "1.25rem 1.5rem", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)", background: "var(--bg-card)" }}>
                    <p style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.09em", color: "var(--text-muted)", marginBottom: "0.875rem" }}>{col.label}</p>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                      {col.items.map((item, i) => (
                        <li key={i} style={{ display: "flex", gap: "0.625rem", fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.55 }}>
                          <span style={{ width: 4, height: 4, borderRadius: "50%", background: col.dot, flexShrink: 0, marginTop: "0.42rem" }} />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "0.875rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {role.tools.map(t => <span key={t} style={{ fontSize: "0.72rem", padding: "0.25rem 0.75rem", borderRadius: "100px", background: "rgba(255,255,255,0.04)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>{t}</span>)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" style={{ padding: "9rem 2rem", background: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader eyebrow="Experience" title="Career journey" description="From digital transformation at Sanofi to vaccine, rare disease brand manager and Omnichannel manager at Pfizer." />
        <div>{roles.map((r, i) => <RoleCard key={r.id} role={r} index={i} />)}</div>
      </div>
    </section>
  );
}
