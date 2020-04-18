import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
