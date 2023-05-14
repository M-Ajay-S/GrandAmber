import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './context'

const About = () => {
    // const data = {
    //     topData: 'Our',
    //     name: 'Philosophy',
    //     content: 'Our extensive selection of wood is carefully sourced from sustainable forests, ensuring that you can enjoy the beauty of nature while also contributing to its preservation. From solid hardwoods like oak, maple, and cherry to softwoods such as pine and cedar, we offer an array of options to suit your specific project requirements.',
    //     image: "./images/about.jpg"
    // }

    const { updateAboutPage } = useGlobalContext()

    useEffect(() => {
        updateAboutPage();
    }, [])
    return (
        <HeroSection />
    )
}

export default About