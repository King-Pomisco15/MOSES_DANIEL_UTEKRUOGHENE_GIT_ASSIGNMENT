function Header() {
  return (
    <header style={{ background: "#282c34", color: "white", padding: "20px", textAlign: "center" }}>
      <h1>My React Website</h1>
      <nav>
        <a href="#about" style={{ color: "lightblue", margin: "0 10px" }}>About</a>
        <a href="#services" style={{ color: "lightblue", margin: "0 10px" }}>Services</a>
        <a href="#footer" style={{ color: "lightblue", margin: "0 10px" }}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;