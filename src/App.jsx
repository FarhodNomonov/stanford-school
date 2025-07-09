import React from "react";
import "./index.css";
import { motion } from "framer-motion";
import About from "./components/about/About";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import Programs from "./components/programs/Programs";
import ServicesSection from "./components/services/ServicesSection";
import ServicesSection2 from "./components/ServicesSection/ServicesSection2";
import TeachersSection from "./components/teachers/TeachersSection";
import Footer from "./components/footer/Footer";
import ContactSection from "./components/contactUs/ContactSection";

function App() {
  return (
    <div className="App">
      <motion.header
        className="header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Добро пожаловать в нашу школу!</h1>
      </motion.header>
      <>
        <Header />
        <Main />
        <About />
        <Programs />
        <ServicesSection />
        <ServicesSection2 />
        <TeachersSection />
        <ContactSection />
        <Footer />
      </>
    </div>
  );
}

export default App;
