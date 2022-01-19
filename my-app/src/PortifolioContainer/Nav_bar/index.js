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
            <ul className='NUl'>
                <li className='Nlink'>
                    <a href="#AboutUs"> About Us</a>
                </li>
                <li className='Nlink'>
                    <a href="#wwdd"> What We Do</a>
                </li>
                <li className='Nlink'>
                    <a href="#whyusid"> Why Us</a>
                </li>
                <li className='Nlink'>
                    <a href="#prices"> Prices</a>
                </li>
                <li className='Nlink'>
                    <a href="#"> Testimonial</a>
                </li>
                <li className='Nlink'>
                    <button className='btn'>Contact Me</button>
                </li>
            </ul>
        </div>
    </nav>
  </>
  )
};

export default NavBarSection;
