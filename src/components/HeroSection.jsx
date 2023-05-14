import React from 'react'
import styled from "styled-components"
import { NavLink } from 'react-router-dom'
import { Button } from '../styles/Button'
import { useGlobalContext } from '../context'


const Wrapper = styled.section`
    padding: 9em 0;
    .section-hero-data{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .btn{

        max-width: 16em;
    }
    
    .hero-top-data{
        text-transform: uppercase;
        font-weight: 500;
        font-size: 1.5rem;
        color:${({ theme }) => theme.colors.helper}
    }
    .hero-heading{
        text-transform: uppercase;
        font-size: 6.4rem;
    }
    .hero-para{
        margin-top: 1.5rem;
        margin-bottom: 3.4rem;
        max-width: 60rem;


    }

     .section-hero-image{
        display: flex;
        justify-content:center;
        align-items :center ;
        picture{
            text-align: center;
        }
        
        img{
            max-width: 90%;
        }
     }

     @media (max-width:${({ theme }) => theme.media.tab}){
      .section-hero-data{
        width: 80%;
        .hero-heading{
            font-size: 4.4rem;
        }
      }

    }
    `
const HeroSection = () => {


    const { topData, name, content, image } = useGlobalContext()
    return (
        <Wrapper>
            <div className="container grid grid-two-column">
                <div className="section-hero-data">
                    <p className='hero-top-data'>{topData}</p>
                    <h1 className='hero-heading'>{name}</h1>
                    <p className="hero-para"> {content}
                    </p>
                    <Button className="btn hireme-btn">
                        <NavLink to="/contact">Get Info</NavLink>
                    </Button>

                </div>
                <div className="section-hero-image">
                    <picture>
                        <img src={image} />
                    </picture>
                </div>

            </div>
        </Wrapper>
    )
}

export default HeroSection