import { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './context'
import Services from "./Services"
import Contact from "./Contact"



const Home = () => {
    // const data = {
    //     topData: 'Welcome to',
    //     name: 'GrandAmber',
    //     content: 'we are dedicated to crafting exquisite wood products that bring elegance and warmth to your living spaces. With a deep passion for working with wood, we offer a diverse range of high-quality wooden furniture and home decor items. Each piece is meticulously handcrafted, showcasing our commitment to craftsmanship and attention to detail. We value the unique qualities of wood and prioritize sustainability by responsibly sourcing our materials. Customization options are available, ensuring that our products fit your individual vision and needs. Our focus on quality means that every item undergoes rigorous checks to guarantee long-lasting satisfaction',
    //     image: './images/hero.jpg'
    // }
    const { updateHomePage } = useGlobalContext()

    useEffect(() => {
        updateHomePage();
    }, [])
    return (
        <>
            <HeroSection />
            <Services />
            <Contact />

        </>
    )
}

export default Home