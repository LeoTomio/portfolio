import React from "react"
import Header from "./components/Header"
import Home from "./pages/Home/sections/Home/Home"
import About from "./pages/Home/sections/About/About"
import Skills from "./pages/Home/sections/Skills/Skills"
import Footer from "./components/Footer"
import Contact from "./pages/Home/sections/Contact/Contact"
import Projects from "./pages/Home/sections/Projects/Projects"
import { DictionaryProvider } from "./utils/context/DictionaryContext"

const App = () => {

  return (

    <DictionaryProvider>
      <React.Fragment>
        <Header />
        <Home />
        <About />
        <Skills />
        <Contact />
        <Projects />
        <Footer />
      </React.Fragment>
    </DictionaryProvider>
  )
}

export default App
