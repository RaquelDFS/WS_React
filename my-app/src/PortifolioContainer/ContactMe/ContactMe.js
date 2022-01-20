import React from 'react';
import './ContactMe.css'

const contactMe = () => {
  return <article  id="contacto" className='container-contactMe'>
      <section className='content-contactMe'>
      <div className="AboutUs-details">
          <div className="diferent"></div>
          <div className="AboutUs-details-role">
            <span className="prymary-text">
              {" "}
              <h3 className='subtitle white'>
                About Us
              </h3>
              <h1 className='white'>
                {" "}
                Lorem Ipsum is simply dummy text.
              </h1>
              <span className="AboutUs-role-tagline">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </span>
          </div>
          <div className="AboutUs-options">
          <a href="#NavBB" className='btn strange'>Back to top</a>
          </div>
        </div>
      </section>

  </article>;
};

export default contactMe;
