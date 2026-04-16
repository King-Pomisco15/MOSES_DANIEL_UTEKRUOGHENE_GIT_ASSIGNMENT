const services = [
  { icon: "🌐", title: "Web Development", desc: "Building responsive, fast, and modern websites using React and latest tools." },
  { icon: "🎨", title: "UI Design", desc: "Crafting clean, intuitive interfaces that users love to interact with." },
  { icon: "⚙️", title: "System Design", desc: "Designing scalable backend systems and efficient data architectures." },
];

function Services() {
  return (
    <section id="services" style={{
      background: "#0d0d1a",
      padding: "100px 60px",
      textAlign: "center",
    }}>
      <p style={{ color: "#00ffc8", fontFamily: "'Courier New', monospace", letterSpacing: "3px", fontSize: "12px", marginBottom: "16px" }}>02. WHAT I DO</p>
      <h2 style={{ color: "#fff", fontFamily: "Georgia, serif", fontStyle: "italic", fontWeight: "normal", fontSize: "40px", marginBottom: "60px" }}>
        Services
      </h2>

      <div style={{ display: "flex", gap: "30px", justifyContent: "center", flexWrap: "wrap" }}>
        {services.map((s) => (
          <div key={s.title} style={{
            border: "1px solid rgba(0,255,200,0.15)",
            padding: "40px 30px",
            width: "260px",
            background: "rgba(0,255,200,0.02)",
            transition: "border-color 0.3s, transform 0.3s",
            cursor: "default",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,255,200,0.6)"; e.currentTarget.style.transform = "translateY(-6px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,255,200,0.15)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <div style={{ fontSize: "36px", marginBottom: "20px" }}>{s.icon}</div>
            <h3 style={{ color: "#fff", fontFamily: "'Courier New', monospace", fontSize: "15px", letterSpacing: "1px", marginBottom: "14px" }}>{s.title}</h3>
            <p style={{ color: "#777", fontSize: "14px", lineHeight: 1.8 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;