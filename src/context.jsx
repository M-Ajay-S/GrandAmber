// create a context `
// provider
// consumer
import React, { useContext, useEffect, useReducer } from "react"
import reducer from "./reducer"
import data from "./servicesList"


const AppContext = React.createContext()

const initialState = {
    topData: "",
    name: "",
    content: "",
    image: "",
    services: []
}



const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const updateHomePage = () => {

        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                topData: 'Welcome to',
                name: 'GrandAmber',
                content: 'we are dedicated to crafting exquisite wood products that bring elegance and warmth to your living spaces. With a deep passion for working with wood, we offer a diverse range of high-quality wooden furniture and home decor items. Each piece is meticulously handcrafted, showcasing our commitment to craftsmanship and attention to detail. We value the unique qualities of wood and prioritize sustainability by responsibly sourcing our materials. Our focus on quality means that every item undergoes rigorous checks to guarantee long-lasting satisfaction',
                image: './images/hero.jpg'
            }
        })
    }

    const updateAboutPage = () => {
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: {
                topData: 'Our',
                name: 'Philosophy',
                content: 'Our extensive selection of wood is carefully sourced from sustainable forests, ensuring that you can enjoy the beauty of nature while also contributing to its preservation. From solid hardwoods like oak, maple, and cherry to softwoods such as pine and cedar, we offer an array of options to suit your specific project requirements.',
                image: "./images/about.jpg"
            }
        })
    }
    // to get api data

    const getServices = () => {
        try {

            dispatch({ type: "GET_SERVICES", payload: data })
        }
        catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getServices()
    }, [])

    return <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>{children}</AppContext.Provider>
}



// global custom hook

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useGlobalContext }