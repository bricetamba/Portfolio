"use client";
import { motion } from "framer-motion";
import { Flame, Trophy } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Volunteering() {
  return (
    <section id="volunteering" style={{ padding: "9rem 2rem", background: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader eyebrow="Beyond the Office" title="Community & volunteering." description="Leadership is built outside the boardroom too." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {[
            { icon: Trophy, role: "Football Coach", context: "Amateur Football Club", color: "#E6B54A", desc: "Coaching and mentoring young players — developing tactical understanding, team cohesion and individual performance. A daily exercise in leadership, motivation and strategic thinking that translates directly into commercial team management.", skills: ["Leadership","Motivation","Communication","Mentoring","Tactical Thinking"] },
            { icon: Flame, role: "Volunteer Firefighter", context: "Fire Brigade", color: "#E07A5F", desc: "Responding to emergency situations requiring rapid assessment, decisive action and seamless team coordination under pressure. This experience has forged resilience and composure that translate directly into managing complex situations in professional environments.", skills: ["Resilience","Decision-making under Pressure","Teamwork","Discipline","Adaptability"] },
          ].map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div key={v.role} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
                style={{ padding: "2rem", borderRadius: "var(--radius-xl)", border: "1px solid var(--border)", background: "var(--bg-card)", transition: "all 0.3s ease" }}
                onMouseOver={ev => { const el = ev.currentTarget as HTMLDivElement; el.style.borderColor = "rgba(255,255,255,0.12)"; el.style.transform = "translateY(-3px)"; }}
                onMouseOut={ev => { const el = ev.currentTarget as HTMLDivElement; el.style.borderColor = "var(--border)"; el.style.transform = "translateY(0)"; }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.25rem" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: `${v.color}14` }}>
                    <Icon size={20} style={{ color: v.color }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.3 }}>{v.role}</h3>
                    <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>{v.context}</p>
                  </div>
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "1.5rem" }}>{v.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {v.skills.map(s => <span key={s} style={{ fontSize: "0.72rem", padding: "0.25rem 0.7rem", borderRadius: "100px", background: "rgba(255,255,255,0.04)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>{s}</span>)}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
