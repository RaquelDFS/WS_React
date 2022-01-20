import React from "react";
import "./Wu.css";

const Wu = () => {
  return (
    <article id="whyusid" className="why-us-container">
      <div className="why-us-parent">
      <div className="profile-picture-background"></div>
      <section className="why-us-content">
        <div className="colz" />
        <div className="AboutUs-details-role">
          <span className="prymary-text">
            {" "}
            <h3 className="subtitle" id="why-us">Why Us</h3>
            <h1 className="h1">
              {" "}
              <em className="pink-Lorem">Lorem Ipsum </em>is simply dummy text.
            </h1>
            <span className="AboutUs-role-tagline">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
            <div className="why-us-table" >
              <div className="Left-wu">
              <p className="item-list">Lorem Ipsum</p>
               <p className="item-list">Lorem Ipsum</p>
              </div>
               <div className="Left-wu">
               <p className="item-list">Lorem Ipsum</p>
               <p className="item-list">Lorem Ipsum</p>
               </div>
            </div>
          </span>
        </div>
      </section>
      </div>
    </article>
  );
};

export default Wu;
