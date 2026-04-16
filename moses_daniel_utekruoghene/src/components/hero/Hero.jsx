function Hero() {
  return (
    <section style={{
      minHeight: "90vh",
      background: "linear-gradient(135deg, #0a0a14 0%, #0d1a2a 50%, #0a0a14 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",
      padding: "60px 20px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(0,255,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,200,0.03) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }} />

      <p style={{
        fontFamily: "'Courier New', monospace",
        color: "#00ffc8",
        letterSpacing: "4px",
        fontSize: "13px",
        marginBottom: "20px",
        opacity: 0.8,
      }}>HELLO, WORLD — I'M</p>

      <h1 style={{
        fontFamily: "Georgia, serif",
        fontSize: "clamp(48px, 8vw, 96px)",
        color: "#ffffff",
        margin: "0 0 16px",
        lineHeight: 1.1,
        fontWeight: "normal",
        fontStyle: "italic",
      }}>
        Moses Daniel
      </h1>

      <h2 style={{
        fontFamily: "'Courier New', monospace",
        fontSize: "clamp(16px, 2.5vw, 22px)",
        color: "#00ffc8",
        fontWeight: "normal",
        letterSpacing: "3px",
        marginBottom: "40px",
      }}>
        COMPUTER SCIENCE STUDENT
      </h2>

      <p style={{
        color: "#888",
        maxWidth: "500px",
        lineHeight: 1.8,
        fontSize: "16px",
        marginBottom: "50px",
      }}>
        Building clean, functional, and beautiful web experiences. Passionate about code, design, and everything in between.
      </p>

      <a href="#about" style={{
        border: "1px solid #00ffc8",
        color: "#00ffc8",
        padding: "14px 40px",
        textDecoration: "none",
        fontFamily: "'Courier New', monospace",
        letterSpacing: "2px",
        fontSize: "13px",
        transition: "all 0.3s",
        position: "relative",
        zIndex: 1,
      }}
        onMouseEnter={e => { e.target.style.background = "#00ffc8"; e.target.style.color = "#000"; }}
        onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#00ffc8"; }}
      >
        EXPLORE →
      </a>
    </section>
  );
}

export default Hero;