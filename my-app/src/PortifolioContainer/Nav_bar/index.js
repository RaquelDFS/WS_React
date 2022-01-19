import React from 'react';
import './NavBar.css'

const NavBarSection = () => {
  return (
  <>
    <nav className='NavBarContainer'>
        <div clasName='NavLogo'>
            <div className='LogoImage'></div>
            <h1 className='LogoText'>LOGO</h1>
        </div>
        <div className='NavLinks'>
            <ul>
                <li className='Nlink'>
                    <a href="#"> Home</a>
                </li>
                <li className='Nlink'>
                    <a href="#"> About Us</a>
                </li>
                <li className='Nlink'>
                    <a href="#"> What We Do</a>
                </li>
                <li className='Nlink'>
                    <a href="#"> Why Us</a>
                </li>
                <li className='Nlink'>
                    <a href="#"> Prices</a>
                </li>
                <li className='Nlink'>
                    <a href="#"> Testimonial</a>
                </li>
                <li className='Nlink'>
                    <button id="contactMe">Contact Me</button>
                </li>
            </ul>
        </div>
    </nav>
  </>
  )
};

export default NavBarSection;
