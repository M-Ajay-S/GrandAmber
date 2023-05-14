import React from 'react'
import { styled } from 'styled-components'
import { Button } from './styles/Button'
import { NavLink } from 'react-router-dom'
const Wrapper = styled.section`
padding: 9em 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

.btn{

}
img{
    width: 50%;
    opacity: .9;
}
`
const Error = () => {
    return (
        <Wrapper>
            <img src="images/error.png" />
            <NavLink to="/">
                <Button className='btn'>Go Back</Button>
            </NavLink>
        </Wrapper>
    )
}

export default Error