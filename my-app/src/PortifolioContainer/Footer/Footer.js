import React from 'react';
import './Footer.css'

const Footer = () => {
  return  <section className='footer'>
      <div className='line'></div>
  <div className='footer-components'>
      <p className='text-footer'> Texto legal colocado na esquerda</p>
      <div className='footer-site'>
          <p className='text-footer'>Lorem Ipsum</p>
          <p className='text-footer'>@Lorem Ipsum</p>
          <p className='text-footer'>Lorem Ipsum</p>
      </div>
  </div>

</section>;
};

export default Footer;
