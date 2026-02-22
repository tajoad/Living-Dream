import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Stats from "./components/Stats";
import WhyChoose from "./components/WhyChoose";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Stats />
      <WhyChoose />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
