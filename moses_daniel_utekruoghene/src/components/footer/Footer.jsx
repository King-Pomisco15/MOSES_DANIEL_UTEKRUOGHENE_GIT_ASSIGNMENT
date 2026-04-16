function Footer() {
  return (
    <footer id="contact" style={{
      background: "#0a0a14",
      borderTop: "1px solid rgba(0,255,200,0.15)",
      padding: "60px 60px",
      textAlign: "center",
    }}>
      <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", color: "#fff", fontSize: "28px", marginBottom: "8px" }}>
        Let's work together.
      </p>
      <p style={{ color: "#555", fontFamily: "'Courier New', monospace", fontSize: "13px", letterSpacing: "2px", marginBottom: "30px" }}>
        OPEN TO OPPORTUNITIES
      </p>
      <a href="mailto:moses@email.com" style={{
        color: "#00ffc8",
        fontFamily: "'Courier New', monospace",
        textDecoration: "none",
        fontSize: "14px",
        letterSpacing: "2px",
        borderBottom: "1px solid #00ffc8",
        paddingBottom: "2px",
      }}>
        moses@email.com
      </a>
      <p style={{ color: "#333", fontFamily: "'Courier New', monospace", fontSize: "11px", marginTop: "50px", letterSpacing: "2px" }}>
        © 2025 MOSES DANIEL UTEKRUOGHENE
      </p>
    </footer>
  );
}

export default Footer;