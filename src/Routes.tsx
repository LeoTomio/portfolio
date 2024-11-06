import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/Home/sections/About/About";
import Skills from "./pages/Home/sections/Skills/Skills";
import Footer from "./components/Footer";
import Contact from "./pages/Home/sections/Contact/Contact";
import Projects from "./pages/Home/sections/Projects/Projects";
import ProjectComponent from "./pages/Projects/index"
import { DictionaryProvider } from "./utils/context/DictionaryContext";
import Page404 from "./pages/NotFound";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <DictionaryProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectComponent />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </DictionaryProvider>
  );
};

export default AppRoutes;
