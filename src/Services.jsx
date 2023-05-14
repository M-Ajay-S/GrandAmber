import React from 'react'
import { useGlobalContext } from './context'
import styled from "styled-components"
import { NavLink } from 'react-router-dom'
import { Button } from './styles/Button'

const Wrapper = styled.section`
padding: 9rem 0;
background-color: ${({ theme }) => theme.colors.bg};

h2{
    margin: 2rem 0;
}
.container{
    max-width: 120rem;
}

.btn{
        color: rgb(98 84 243);
        background-color: white;
        border: 0.1rem solid rgb(98 84 243);
        border-color: rgb(98 84 243);
        &:hover{
        color: white;
        background-color: rgb(98 84 243);
       
    }
    
}
figure{
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after{
        content: "";
        position: absolute;
        top:0;
        left: 0;
        width:0 ;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        transition: all 0.2s linear;
        cursor: pointer;
    }
    &:hover::after{
        width: 100%;
    }
    &:hover img{
        transform:scale(1.2) ;
    }
    img{
        max-width: 90%;
        margin-top: 1.5rem;
        height: 20rem;
        transition: all 0.2s linear;

    }
}


`


const Services = () => {
    const { services } = useGlobalContext()
    return (
        <Wrapper className="heading">
            <h2 className="common-heading">
                Our Services
            </h2>
            <div className="container grid grid-three-column">
                {

                    services.map((service) => {
                        const { id, name, image, description } = service
                        return (
                            <div key={id} className='card'>
                                <figure>
                                    <img src={image} />
                                </figure>
                                <div className="card-data">
                                    <h3>{name}</h3>
                                    <p>{description}</p>
                                    <NavLink to="/">
                                        <Button className='btn'>Read More</Button>
                                    </NavLink>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}

export default Services