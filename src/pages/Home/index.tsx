import About from "./sections/About/About"
import Contact from "./sections/Contact/Contact"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects"
import Skills from "./sections/Skills/Skills"

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Contact />
            <Projects />
        </>)
}
export default Home