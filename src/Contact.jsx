import React from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.section`
padding: 9rem 0;
h2{
    margin: 2rem 0;
}
.container{

    margin-top: 6rem;
    display: flex ;
    flex-direction: row-reverse;
    background-color: rgb(249 249 255);
    padding: 5rem 5rem;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    iframe{
        flex: 1;
        
    }
    .contact-form{
        
        margin: auto;
        flex: 1;
    }
}
.contact-inputs{
    display: flex;
    flex-direction: column; 
    gap: 2em;
    padding: 3em 3em;

    input[type=text],[type=email],textarea{
        width: 80%;
        padding: .9em .9em;
    }
}



label{
    display: block;
    text-align: start;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;

}

@media (max-width:${({ theme }) => theme.media.tab}){
        
            padding: 1em;
        
        .container{
            flex-direction: column;
            height: 100em;
            
            margin-bottom: 0;
            gap: 2em;
            input[type=text],[type=email],textarea{
                width: 100%;
            }
        }
       
    
    }
`;

const Contact = () => {
    return (
        <Wrapper className='section'>
            <h2 className="common-heading">Contact Us</h2>
            <div className="container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.6983259305!2d77.63093949999997!3d12.953997400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1683993737576!5m2!1sen!2sin"
                    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="contact-form">
                    <form action="#" method='POST' className='contact-inputs'>
                        <div className="item">
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" id="fullname" name='Fullname' placeholder='Fullname' autoComplete='off' required />
                        </div>
                        <div className="item">

                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name='email' placeholder='email' autoComplete='off' required />
                        </div>
                        <div className="item">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id='subject' name="subject" placeholder='subject' />
                        </div>
                        <div className="item">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols="50" rows="5" autoComplete='off' required></textarea>
                        </div>
                        <input type="submit" value="send" />

                    </form>
                </div>
            </div>
        </Wrapper >
    )
}

export default Contact