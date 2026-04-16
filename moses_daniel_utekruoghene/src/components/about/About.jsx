function About() {
  return (
    <section id="about" style={{
      background: "#0a0a14",
      padding: "100px 60px",
      display: "flex",
      gap: "80px",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
    }}>
      <div style={{
        width: "200px", height: "200px",
        border: "1px solid rgba(0,255,200,0.3)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "80px",
        flexShrink: 0,
        background: "rgba(0,255,200,0.03)",
      }}>
        👨‍💻
      </div>

      <div style={{ maxWidth: "500px" }}>
        <p style={{ color: "#00ffc8", fontFamily: "'Courier New', monospace", letterSpacing: "3px", fontSize: "12px", marginBottom: "16px" }}>01. ABOUT ME</p>
        <h2 style={{ color: "#fff", fontFamily: "Georgia, serif", fontStyle: "italic", fontWeight: "normal", fontSize: "40px", marginBottom: "24px", lineHeight: 1.2 }}>
          Who I Am
        </h2>
        <p style={{ color: "#888", lineHeight: 1.9, fontSize: "16px", marginBottom: "16px" }}>
          I'm a 400-level Computer Science student with a deep interest in web development, systems, and building things that matter.
        </p>
        <p style={{ color: "#888", lineHeight: 1.9, fontSize: "16px" }}>
          I enjoy turning ideas into reality through clean code and thoughtful design.
        </p>
      </div>
    </section>
  );
}

export default About;