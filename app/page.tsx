import type { NextPage } from "next"
import About from "./About/page"
import Hero from "./Hero/page"

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
            {/* Contact */}
            <div>
                <h1>Thomas Gandolfo</h1>
            </div>
        </div>
    )
}

export default Home
