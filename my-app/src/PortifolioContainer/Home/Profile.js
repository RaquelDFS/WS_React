/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./Profile.css"
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
          </div>
          <div className="profile-details-role">
            <span className="prymary-text">
              {" "}
              <h1> <em className='pink-Lorem'>Lorem Ipsum </em>is simply dummy text</h1>
              <span className="profile-role-tagline">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. 
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn"> Um Botão </button>
            <a href="photoo.jpg" download="Photo legal" className="bnt" id="dwld-btn">Get photo</a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
