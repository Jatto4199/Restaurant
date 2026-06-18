import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from "./Pages/Home";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Menu from "./Components/Menu";
import ContactPage from "./Pages/ContactPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Services from "./Pages/Services";
import NotFound from "./Pages/NotFound";


function App() {
  return (
    <div className="min-h-screen flex flex-col">

    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;