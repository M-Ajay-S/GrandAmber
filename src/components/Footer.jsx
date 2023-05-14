import React from 'react'
import { styled } from 'styled-components'
import { Button } from '../styles/Button'
import { NavLink } from 'react-router-dom'
import { FaDiscord, FaInstagram, FaYoutube } from 'react-icons/fa'
const Wrapper = styled.section`
.contact-short{

    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
}

    .grid div:last-child{
        justify-self: end;
        align-self: center;
    }

    footer{
        padding: 14rem 0 3rem 0;
        background-color: ${({ theme }) => theme.colors.footer_bg};
        .footer-social-icons{
            display: flex;
            gap: 2rem;
            div{
                padding: 1rem;
                border-radius: 50%;
                border: 2px solid ${({ theme }) => theme.colors.white};
               
            }
        }
         .icons{
            
        color:${({ theme }) => theme.colors.white};
        font-size: 2.4rem;
        position:relative;
        cursor: pointer;
    }
    p{
        color:${({ theme }) => theme.colors.white}
    }
    h3{
        color:${({ theme }) => theme.colors.hr};
        margin-bottom:1.5rem;
    }
    }



    input[type=email]{
        width: 80%;
        padding: .9em .9em;
        margin-bottom: 1.5rem;
    }
.footer-bottom-section{

    padding-top: 9rem;
    hr{
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
    }
}

@media (max-width:${({ theme }) => theme.media.tab}){
        .contact-short{
            max-width: 85vw;
            padding: 3rem 2rem;
        }
        .grid div:last-child{
            justify-self: start;
        }
        .footer-contact{
            text-align: start;
        }
   
   .footer-bottom-section{
    padding-top: 3rem;
   }

}
    
    
   
    
`

const Footer = () => {
    return (
        <Wrapper>
            <section className="contact-short">
                <div className="grid grid-two-column">
                    <div>
                        <h3>Ready to transform your business? </h3>
                        <h3>Talk to us today</h3>
                    </div>

                    <div>
                        <NavLink to="/">
                            <Button>
                                Get Started
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container grid grid-four-column">
                    <div className="footer-about">
                        <h3>GrandAmber</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className="footer-suubscribe">
                        <h3>Subscribe to get important notification</h3>
                        <form action="#">
                            <input type="email" placeholder='Email' autoComplete='off' required />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>
                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className="footer-social-icons">
                            <div>
                                <a href="#">
                                    <FaDiscord className="icons" />
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <FaInstagram className="icons" />
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <FaYoutube className="icons" />
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="footer-contact">
                        <h3>Email</h3>
                        <h3>grandamber@mail.com</h3>
                    </div>
                </div>
                <div className="footer-bottom-section">
                    <hr />
                    <div className="container grid grid-two-column">
                        <p>
                            @{new Date().getFullYear()} GrandAmber.All Rights Reserved.
                        </p>
                        <div>
                            <p>PRIVACY POLICY</p>
                            <p>TERMS & CONDITIONS</p>
                        </div>
                    </div>
                </div>
            </footer>
        </Wrapper>
    )
}

export default Footer