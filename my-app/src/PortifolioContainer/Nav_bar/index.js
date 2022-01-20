import React from 'react';
import './NavBar.css'

const NavBarSection = () => {
  return (
  <>
    <nav  id="NavBB"className='NavBarContainer'>
        <div clasName='NavLogo'>
            <div className='LogoImage'></div>
            <h1 className='LogoText'>LOGO</h1>
        </div>
        <div className='NavLinks'>
            <ul className='NUl'>
                <li className='Nlink'>
                    <a href="#AboutUs" className='behave-a'> About Us</a>
                </li>
                <li className='Nlink'>
                    <a href="#wwdd" className='behave-a'> What We Do</a>
                </li>
                <li className='Nlink'>
                    <a href="#whyusid" className='behave-a'> Why Us</a>
                </li>
                <li className='Nlink'>
                    <a href="#prices" className='behave-a' > Prices</a>
                </li>
                <li className='Nlink'>
                    <a href="#testmonial" className='behave-a'> Testimonial</a>
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
