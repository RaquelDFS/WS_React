import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div id="AboutUs"className="AboutUs-container">
      <div className="AboutUs-parent">
        <div className="AboutUs-picture">
          <div className="profile-picture-background"></div>
        </div>
        <div className="AboutUs-details">
          <div className="colz"></div>
          <div className="AboutUs-details-role">
            <span className="prymary-text">
              {" "}
              <h3 className='subtitle'>
                About Us
              </h3>
              <h1>
                {" "}
                <em className="pink-Lorem">Lorem Ipsum </em>is simply dummy text.
              </h1>
              <span className="AboutUs-role-tagline">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </span>
          </div>
          <div className="AboutUs-options">
            <a href="#" className="ALink"> Um Botão que vai recarregar a página </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
