import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Food from "./components/Food";
import Footer from "./components/Footer";
import Home from "./pages";
import About from "./pages/about";
import Menu from "./pages/menu";
import Contact from "./pages/contact";
import { Routes, Route } from "react-router-dom";
import Dropmenu from "./components/Dropmenu";

function App() {
  const [isOpen, setOpen] = useState(false);

  function toogle() {
    setOpen(!isOpen);
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => window.removeEventListener("resize", hideMenu);
  });

  return (
    <div>
      <Navbar toogle={toogle} />
      <Dropmenu isopen={isOpen} toogle={toogle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
