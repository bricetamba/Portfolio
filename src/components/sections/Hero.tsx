"use client";
import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, Briefcase } from "lucide-react";
import Image from "next/image";

const particles = [
  { id: 0, x: 78, y: 22, size: 1.5, duration: 9, delay: 0 },
  { id: 1, x: 15, y: 55, size: 2, duration: 12, delay: 1.5 },
  { id: 2, x: 88, y: 68, size: 1.2, duration: 8, delay: 0.8 },
  { id: 3, x: 42, y: 18, size: 1.8, duration: 11, delay: 2.2 },
  { id: 4, x: 65, y: 78, size: 1.3, duration: 10, delay: 0.4 },
  { id: 5, x: 28, y: 88, size: 1.6, duration: 13, delay: 3.0 },
  { id: 6, x: 92, y: 35, size: 1.1, duration: 9, delay: 1.8 },
  { id: 7, x: 55, y: 92, size: 1.4, duration: 7, delay: 0.2 },
  { id: 8, x: 8, y: 30, size: 1.7, duration: 11, delay: 2.6 },
  { id: 9, x: 72, y: 45, size: 1.2, duration: 8, delay: 1.1 },
  { id: 10, x: 35, y: 62, size: 1.5, duration: 10, delay: 3.4 },
  { id: 11, x: 85, y: 15, size: 1.3, duration: 12, delay: 0.6 },
];

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <div style={{ position: "absolute", inset: 0, background: "var(--bg-primary)" }} />
        <div style={{ position: "absolute", top: "15%", left: "40%", transform: "translateX(-50%)", width: 1000, height: 700, background: "radial-gradient(ellipse at center, rgba(27,56,110,0.4) 0%, rgba(7,17,31,0) 65%)", pointerEvents: "none" }} />
        <motion.div animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: -120, right: -80, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(230,181,74,0.16) 0%, transparent 65%)", filter: "blur(40px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.025, backgroundImage: "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        {particles.map(p => (
          <motion.div key={p.id} style={{ position: "absolute", left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, borderRadius: "50%", background: "rgba(230,181,74,0.45)", boxShadow: "0 0 6px rgba(230,181,74,0.25)" }}
            animate={{ y: [0, -18, 0], opacity: [0.1, 0.45, 0.1] }} transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }} />
        ))}
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", paddingTop: "8rem", paddingBottom: "6rem", width: "100%", display: "grid", gridTemplateColumns: "1fr auto", gap: "4rem", alignItems: "center" }} className="hero-grid">

        {/* Left — Text */}
        <div style={{ maxWidth: "680px" }}>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }} style={{ marginBottom: "2.5rem" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.375rem 0.875rem", borderRadius: "100px", fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.09em", background: "rgba(230,181,74,0.08)", color: "var(--gold)", border: "1px solid rgba(230,181,74,0.2)" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)", display: "inline-block", animation: "pulse 2.5s infinite" }} />
              Open to new opportunities
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.035em", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
            Brice<br />
            <span style={{ background: "linear-gradient(135deg, #C8922A 0%, #E6B54A 45%, #F5D98A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "drop-shadow(0 0 28px rgba(230,181,74,0.22))" }}>
              Tamba Prono
            </span>
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ width: 32, height: 1.5, background: "var(--text-muted)", flexShrink: 0 }} />
            <p style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--text-secondary)", letterSpacing: "0.01em" }}>
              Pharmaceutical Brand Manager | Omnichannel Strategy | Digital Marketing
            </p>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.42, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ fontSize: "1.05rem", fontWeight: 400, lineHeight: 1.75, color: "var(--text-muted)", maxWidth: "520px", marginBottom: "3rem" }}>
            Drawing on a dual background in science and marketing, I design and implement brand strategies and omnichannel initiatives that support the development of 
            innovative healthcare solutions while creating value for healthcare professionals, patients, and organizations.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.52, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "4rem" }}>
            <button onClick={() => scrollTo("experience")}
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", borderRadius: "var(--radius-md)", fontSize: "0.9rem", fontWeight: 600, background: "linear-gradient(135deg, #C8922A, #E6B54A)", color: "#07111F", border: "none", cursor: "pointer", boxShadow: "0 2px 12px rgba(230,181,74,0.25)", transition: "all 0.25s ease" }}
              onMouseOver={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = "translateY(-2px)"; b.style.boxShadow = "0 6px 24px rgba(230,181,74,0.35)"; }}
              onMouseOut={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = "translateY(0)"; b.style.boxShadow = "0 2px 12px rgba(230,181,74,0.25)"; }}>
              <Briefcase size={15} /> View Experience
            </button>

            <button onClick={() => scrollTo("projects")}
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.375rem", borderRadius: "var(--radius-md)", fontSize: "0.875rem", fontWeight: 500, background: "rgba(255,255,255,0.04)", color: "var(--text-secondary)", border: "1px solid var(--border)", cursor: "pointer", transition: "all 0.25s ease" }}
              onMouseOver={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "rgba(255,255,255,0.08)"; b.style.borderColor = "var(--border-hover)"; b.style.transform = "translateY(-1px)"; }}
              onMouseOut={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "rgba(255,255,255,0.04)"; b.style.borderColor = "var(--border)"; b.style.transform = "translateY(0)"; }}>
              Digital Projects
            </button>

            <a href="mailto:brice.tamba.pr@gmail.com"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.375rem", borderRadius: "var(--radius-md)", fontSize: "0.875rem", fontWeight: 500, background: "rgba(255,255,255,0.04)", color: "var(--text-secondary)", border: "1px solid var(--border)", textDecoration: "none", transition: "all 0.25s ease" }}
              onMouseOver={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "rgba(255,255,255,0.08)"; a.style.transform = "translateY(-1px)"; }}
              onMouseOut={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "rgba(255,255,255,0.04)"; a.style.transform = "translateY(0)"; }}>
              <Mail size={15} /> Contact
            </a>

            <a href="https://www.linkedin.com/in/brice-tamba-prono" target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.375rem", borderRadius: "var(--radius-md)", fontSize: "0.875rem", fontWeight: 500, background: "rgba(10,102,194,0.1)", color: "#7CB9E8", border: "1px solid rgba(10,102,194,0.2)", textDecoration: "none", transition: "all 0.25s ease" }}
              onMouseOver={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "rgba(10,102,194,0.18)"; a.style.transform = "translateY(-1px)"; }}
              onMouseOut={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "rgba(10,102,194,0.1)"; a.style.transform = "translateY(0)"; }}>
              <Linkedin size={15} /> LinkedIn
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.75 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem", paddingTop: "2.5rem", borderTop: "1px solid var(--border)" }}>
            {[
              { value: "5 years", label: " experience in pharmaceutical companies" },
              { value: "3", label: "therapeutic areas" },
              { value: "2", label: "websites deployed" },
              { value: "2 MSc", label: "degrees" },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: "1.6rem", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.03em", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.375rem" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Photo */}
        <motion.div initial={{ opacity: 0, scale: 0.9, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }} className="hero-photo">
          <div style={{ position: "relative" }}>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ position: "absolute", inset: -4, borderRadius: "50%", background: "conic-gradient(from 0deg, #E6B54A, #07111F 40%, #C8922A 60%, #07111F 80%, #E6B54A)", zIndex: 0 }} />
            <div style={{ position: "absolute", inset: -1, borderRadius: "50%", background: "var(--bg-primary)", zIndex: 1 }} />
            <div style={{ position: "relative", zIndex: 2, width: 260, height: 260, borderRadius: "50%", overflow: "hidden", border: "3px solid var(--bg-primary)" }}>
              <Image src="/photo.jpg" alt="Brice Tamba Prono — Pharmaceutical Brand Manager" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
            </div>
            <div style={{ position: "absolute", inset: -20, borderRadius: "50%", background: "radial-gradient(circle, rgba(230,181,74,0.12) 0%, transparent 70%)", zIndex: 0, filter: "blur(12px)" }} />
          </div>
        </motion.div>
      </div>

      <motion.button onClick={() => scrollTo("about")} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
        style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.12em", transition: "color 0.2s" }}
        onMouseOver={e => (e.currentTarget as HTMLButtonElement).style.color = "var(--gold)"}
        onMouseOut={e => (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)"}>
        <span>Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.button>

      <style>{`
        .hero-grid { grid-template-columns: 1fr auto; }
        @media (max-width: 768px) { .hero-grid { grid-template-columns: 1fr !important; } .hero-photo { display: none !important; } }
      `}</style>
    </section>
  );
}
