import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div style={{ background: "#0a0a14", minHeight: "100vh" }}>
      <Header />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;