import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import About from "./components/About";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/Service";
import NotFound from "./pages/Notfound";


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