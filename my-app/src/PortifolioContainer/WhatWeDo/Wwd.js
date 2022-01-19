import React from "react";
import "./Wwd.css";

const Wwd = () => {
  return (
    <div className="wwd-container">
      <div className="wwd-principal">
        <div className="colz middle-colz" />
        <h3 className="subtitle">Lorem Ipsum</h3>
        <h1>
          {" "}
          Lorem Ipsum is simply <em className="pink-Lorem">dummy text.</em>
        </h1>
        <span className="AboutUs-role-tagline">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </span>
      </div>
      <div className="wwd-blocks">
        <div className="blocks">
          <ul>
            <li className="left-grid">
              <h2 className="title-block">Lorem Impsum</h2>
              <p className="paragraph-block">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <div className="blocks">
                <h2 className="title-block">Lorem Impsum</h2>
                <p className="paragraph-block">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
              </div>
            </li>
            <li className="left-grid">
              <h2 className="title-block">Lorem Impsum</h2>
              <p className="paragraph-block">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <div className="blocks">
                <h2 className="title-block">Lorem Impsum</h2>
                <p className="paragraph-block">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Wwd;
