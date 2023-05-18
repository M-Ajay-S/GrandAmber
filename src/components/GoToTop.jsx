import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { styled } from "styled-components";


const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    .top-btn{
        font-size: 2.4rem;
        width: 6rem;
        height: 6rem;

        color: #fff;
        background-color: ${({ theme }) => theme.colors.btn};
        box-shadow: ${({ theme }) => theme.colors.shadow};
        border-radius: 50%;
        position: fixed;
        bottom:5rem;
        right: 5rem;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        z-index: 2;
        display: flex;
        
        @keyframes gototop {
            0%{
                transform: translateY(-0.5rem);
            }
            100%{
                transform: translateY(1rem);
            }
        }
        .icon{
            animation: gototop 1.2s linear infinite alternate-reverse;
        }

    }
    @media (max-width:${({ theme }) => theme.media.tab}){
        .top-btn{
            left:85%;
            bottom: 3%;
        }
   }
 
`

const GoToTop = () => {

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    return (
        <Wrapper>
            <div className="top-btn" onClick={goToBtn}>
                <FaArrowUp className="icon" />
            </div>
        </Wrapper>
    )
}

export default GoToTop