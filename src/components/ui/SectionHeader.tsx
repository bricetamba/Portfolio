"use client";
import { motion } from "framer-motion";

interface Props { eyebrow: string; title: string; description?: string; centered?: boolean; }

export function SectionHeader({ eyebrow, title, description, centered = false }: Props) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ marginBottom: "4rem", textAlign: centered ? "center" : "left" }}>
      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", padding: "0.3rem 0.8rem", borderRadius: "100px", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.25rem", background: "rgba(230,181,74,0.08)", color: "var(--gold)", border: "1px solid rgba(230,181,74,0.16)" }}>
        <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} />
        {eyebrow}
      </span>
      <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em", color: "var(--text-primary)", marginBottom: description ? "1rem" : 0 }}>
        {title}
      </h2>
      {description && (
        <p style={{ fontSize: "1.05rem", lineHeight: 1.7, fontWeight: 400, color: "var(--text-muted)", maxWidth: "44rem", margin: centered ? "0 auto" : undefined }}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
