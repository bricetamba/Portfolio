"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "about" },
  { label: "Experience", href: "experience" },
  { label: "Projects", href: "projects" },
  { label: "Skills", href: "skills" },
  { label: "Education", href: "education" },
  { label: "Contact", href: "contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const fn = () => {
      const scrollY = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollY > 40);
      setScrollProgress(docH > 0 ? (scrollY / docH) * 100 : 0);
      const reversed = [...links].reverse();
      for (const l of reversed) {
        const el = document.getElementById(l.href);
        if (el && el.getBoundingClientRect().top <= 100) { setActiveSection(l.href); break; }
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  return (
    <>
      <motion.div className="fixed top-0 left-0 h-[1.5px] z-[100]"
        style={{ width: `${scrollProgress}%`, background: "linear-gradient(90deg, #E6B54A, #F2C35B)" }} />

      <motion.nav
        initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          background: scrolled ? "var(--nav-bg)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
          transition: "all 0.4s ease",
        }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "none", border: "none", cursor: "pointer" }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: "linear-gradient(135deg, #C8922A, #E6B54A)", display: "flex", alignItems: "center", justifyContent: "center", color: "#07111F", fontWeight: 800, fontSize: "0.75rem", boxShadow: "0 2px 12px rgba(230,181,74,0.25)", transition: "all 0.2s" }}
              onMouseOver={e => { (e.currentTarget as HTMLDivElement).style.transform = "scale(1.05)"; }}
              onMouseOut={e => { (e.currentTarget as HTMLDivElement).style.transform = "scale(1)"; }}>BT</div>
            <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-secondary)" }}>Brice Tamba Prono</span>
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hidden md:flex">
            {links.map(l => {
              const isActive = activeSection === l.href;
              return (
                <button key={l.href} onClick={() => scrollTo(l.href)}
                  style={{ position: "relative", padding: "0.5rem 0.875rem", borderRadius: "var(--radius-md)", fontSize: "0.85rem", fontWeight: isActive ? 600 : 400, color: isActive ? "var(--text-primary)" : "var(--text-muted)", background: "none", border: "none", cursor: "pointer", transition: "color 0.2s" }}
                  onMouseOver={e => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)"; }}
                  onMouseOut={e => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)"; }}>
                  {l.label}
                  {isActive && <motion.div layoutId="nav-active" style={{ position: "absolute", inset: 0, borderRadius: "var(--radius-md)", background: "rgba(230,181,74,0.08)", border: "1px solid rgba(230,181,74,0.18)" }} transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />}
                </button>
              );
            })}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <button onClick={() => scrollTo("contact")} className="hidden md:flex"
              style={{ alignItems: "center", padding: "0.5rem 1.25rem", borderRadius: "var(--radius-md)", fontSize: "0.85rem", fontWeight: 600, background: "linear-gradient(135deg, #C8922A, #E6B54A)", color: "#07111F", border: "none", cursor: "pointer", boxShadow: "0 1px 8px rgba(230,181,74,0.2)", transition: "all 0.25s" }}
              onMouseOver={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = "translateY(-1px)"; b.style.boxShadow = "0 4px 16px rgba(230,181,74,0.3)"; }}
              onMouseOut={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = "translateY(0)"; b.style.boxShadow = "0 1px 8px rgba(230,181,74,0.2)"; }}>
              Get in Touch
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden"
              style={{ padding: "0.5rem", background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}>
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.2 }}
            style={{ position: "fixed", top: 72, left: 0, right: 0, zIndex: 40, padding: "1.25rem 1.5rem 1.5rem", backdropFilter: "blur(24px)", background: "rgba(7,17,31,0.96)", borderBottom: "1px solid var(--border)" }}>
            {links.map(l => (
              <button key={l.href} onClick={() => scrollTo(l.href)}
                style={{ display: "block", width: "100%", textAlign: "left", padding: "0.875rem 1rem", marginBottom: "0.25rem", borderRadius: "var(--radius-md)", fontSize: "0.95rem", fontWeight: 500, color: "var(--text-secondary)", background: "none", border: "none", cursor: "pointer", transition: "all 0.2s" }}
                onMouseOver={e => { const b = e.currentTarget as HTMLButtonElement; b.style.color = "var(--gold)"; b.style.background = "var(--gold-dim)"; }}
                onMouseOut={e => { const b = e.currentTarget as HTMLButtonElement; b.style.color = "var(--text-secondary)"; b.style.background = "none"; }}>
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
