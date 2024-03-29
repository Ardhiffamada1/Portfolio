import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/HeroSection'
import Headers from './components/headers'
import Aboutme from './pages/aboutme'
import Skill from "./pages/skillspage"
import Projects from "./pages/project"
import Contact from './pages/contactme';

function Web () {

    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <>
        <Hero />
        <Headers />
        <Aboutme />
        <Skill />
        <Projects />
        <Contact />
        </>
    )
}

export default Web