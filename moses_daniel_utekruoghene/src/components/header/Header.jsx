function Header() {
  return (
    <header style={{
      background: "rgba(10, 10, 20, 0.95)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid rgba(0, 255, 200, 0.2)",
      padding: "18px 60px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        fontSize: "22px",
        fontFamily: "'Courier New', monospace",
        color: "#00ffc8",
        letterSpacing: "2px",
        fontWeight: "bold",
      }}>
        &lt;MOSES /&gt;
      </div>
      <nav style={{ display: "flex", gap: "32px" }}>
        {["About", "Skills", "Services", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            color: "#aaa",
            textDecoration: "none",
            fontFamily: "'Courier New', monospace",
            fontSize: "14px",
            letterSpacing: "1px",
            transition: "color 0.3s",
          }}
            onMouseEnter={e => e.target.style.color = "#00ffc8"}
            onMouseLeave={e => e.target.style.color = "#aaa"}
          >{item}</a>
        ))}
      </nav>
    </header>
  );
}

export default Header;