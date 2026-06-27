"use client";
export function Footer() {
  return (
    <footer style={{ padding: "2.5rem 2rem", borderTop: "1px solid var(--border)", background: "var(--bg-primary)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
          <div style={{ width: 30, height: 30, borderRadius: 9, background: "linear-gradient(135deg, #C8922A, #E6B54A)", display: "flex", alignItems: "center", justifyContent: "center", color: "#07111F", fontWeight: 800, fontSize: "0.72rem" }}>BT</div>
          <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--text-muted)" }}>Brice Tamba Prono</span>
        </div>
        <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", opacity: 0.5 }}>© {new Date().getFullYear()} · Pharmaceutical Brand Manager · Pfizer</p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[{ l: "Experience", h: "experience" }, { l: "Projects", h: "projects" }, { l: "Contact", h: "contact" }].map(item => (
            <a key={item.l} href={`#${item.h}`} style={{ fontSize: "0.8rem", color: "var(--text-muted)", textDecoration: "none", opacity: 0.6, transition: "all 0.2s" }}
              onMouseOver={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.color = "var(--gold)"; a.style.opacity = "1"; }}
              onMouseOut={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.color = "var(--text-muted)"; a.style.opacity = "0.6"; }}>
              {item.l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
