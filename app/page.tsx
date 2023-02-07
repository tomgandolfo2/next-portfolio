import type { NextPage } from "next"
import About from "./About/page"
import Contact from "./Contact/page"
import Hero from "./Hero/page"
import Projects from "./Projects/page"

const Home: NextPage = () => {
    return (
        <div className="">
            {/* Hero */}
            <section id="hero">
                <Hero />
            </section>
            {/* About */}
            <section id="about">
                <About />
            </section>
            {/* Projects */}
            <section id="projects">
                <Projects />
            </section>
            {/* Contact */}
            <section id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Home
