import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
}
html{
    font-size:62.5%;
    overflow-x:hidden;
}       
body{
    overflow-x: hidden;
}
::-webkit-scrollbar{

    width: 1.5rem;
}
::-webkit-scrollbar-track{
    background-color: rgb(24 24 29);
}
::-webkit-scrollbar-thumb{
    background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}
h1{
    color:${({ theme }) => { theme.colors.heading }};
    font-size:6rem;
    font-weight:900;
}
h2{
    color:${({ theme }) => { theme.colors.heading }};
    font-size: 4.4rem;
    font-weight: 300;

    white-space: normal;
    text-align: center;

}
h3{
font-size: 1.8rem;
font-weight: 400;
}

p{
    color:${({ theme }) => theme.colors.text};
    opacity: 0.7;
    font-size: 1.65rem;
    line-height: 1.5;

    margin-top: 1rem;
    font-weight: 400;
}
a{
    text-decoration: none;
}
li{
    list-style: none;
}
.container{
    max-width: 120rem;
    margin:0 auto;
}

.grid{
    display: grid;
    gap: 9em;
}
.grid-two-column{
    grid-template-columns: repeat(2,1fr);
}
.grid-three-column{
    grid-template-columns: repeat(3,1fr);
}
.grid-four-column{
    grid-template-columns: 1fr 1.2fr .5fr .8fr;
}
.common-heading{
    font-size: 3.8rem;
    font-weight: 600;
    margin-bottom: 6rem;
    text-transform: capitalize  ;
}
input[type=submit]{
    
  background-color: rgb(98 84 243);
  color: rgb(255 255 255);
  padding: 1.4rem 2.4rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  font-size: 1.2rem;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
  }
}

@media (max-width:${({ theme }) => theme.media.tab}){
        .container{
            padding: 0 3.2rem;
        }
        .grid-three-column{
            grid-template-columns: 1fr 1fr;
        }

}
@media (max-width:${({ theme }) => theme.media.mobile}){
       .grid{
            gap:3.2rem;
       }
       .grid-four-column,.grid-three-column,.grid-two-column{
        grid-template-columns: 1fr;
       }
    }



`;
export default GlobalStyle;