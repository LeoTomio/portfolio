import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/sections/Home/Home";
import About from "./pages/Home/sections/About/About";
import Skills from "./pages/Home/sections/Skills/Skills";
import Footer from "./components/Footer";
import Contact from "./pages/Home/sections/Contact/Contact";
import Projects from "./pages/Home/sections/Projects/Projects";
import Project from "./pages/Projects/index"
import { DictionaryProvider } from "./utils/context/DictionaryContext";

const AppRoutes = () => {
  return (
    <DictionaryProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Skills />
                <Contact />
                <Projects />
              </>
            }
          />
          
          <Route path="/project/:id" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </DictionaryProvider>
  );
};

export default AppRoutes;
