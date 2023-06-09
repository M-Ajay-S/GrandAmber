import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { CgMenu, CgCloseR } from 'react-icons/cg'


const Nav1 = styled.nav`
     .navbar-list{
      display: flex;
      gap: 4.8rem;

      li{
        list-style: none;

        .navbar-link{
          &:link,
          &:visited{
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color:${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }

          &:hover,
          &:active{
            color:${({ theme }) => theme.colors.helper};
          }
        }
      }
     }
.mobile-navbar-btn{
  display: none;
}

.mobile-navbar-btn[name="close-outline"]{
  display: none;
}

@media (max-width:${({ theme }) => theme.media.mobile}) {
  .mobile-navbar-btn{
    display: inline-block;
    z-index: 3;
    border:${({ theme }) => theme.colors.black};
    .mobile-nav-icon{
      font-size: 4.2rem;
      color: ${({ theme }) => theme.colors.black};
    }
    .close-outline{
      display: none;

    }
  }
  
  .navbar-list{
    width: 100vw;
    height: 100vh;
    position: absolute;
    flex-direction: column;
    top: 0;
    left: 0;
    background-color: #fff;

    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    transform: translateX(100%);
    visibility: hidden;
    opacity: 0;
    li{

      .navbar-link{
        &:link,
          &:visited{

            font-size: 4.2rem;
          }

          &:hover,
          &:active{
            color:${({ theme }) => theme.colors.helper};
          }
      }
    }

  
  }
 .active .mobile-nav-icon{
  display: none;
  font-size: 4.2rem;
  position: absolute;
  top: 3%;
  right: 10%;
  color: ${({ theme }) => theme.colors.black};
  z-index: 3;
 }

.active .close-outline{
  display: inline-block;
}
  .active .navbar-list{
    z-index: 3;
    transform: translateX(0);
    visibility: visible;
    opacity: 1;
  }
}

  `

const Nav = () => {

  const [isMenu, setIsMenu] = useState(false)
  return (
    <Nav1>
      <div className={isMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" to="/" onClick={() => { setIsMenu(false) }} >Home </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/about" onClick={() => { setIsMenu(false) }} > About </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/service" onClick={() => { setIsMenu(false) }} >Services </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contact" onClick={() => { setIsMenu(false) }} >Contact</NavLink>
          </li>
        </ul>
        <div className="mobile-navbar-btn">

          <CgMenu name='menu-outline' className='mobile-nav-icon' onClick={() => { setIsMenu(true) }} />
          <CgCloseR name='close-outline' className='close-outline mobile-nav-icon' onClick={() => { setIsMenu(false) }} />
        </div>
      </div>
    </Nav1>
  )


}

export default Nav