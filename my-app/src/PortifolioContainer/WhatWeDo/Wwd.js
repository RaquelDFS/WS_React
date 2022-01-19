import React from "react";
import "./Wwd.css";

const Wwd = () => {
  return (
    <div id="wwdd" className="wwd-container">
      <div className="wwd-principal">
        <div className="colz middle-colz" />
        <h3 className="subtitle">What We Do</h3>
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
      
        <div className="table-blocks">
          <table className="table" >
            <tr>
              <td>
              <div className="blocks">
                <h2 className="title-block">Lorem Impsum</h2>
                <p className="paragraph-block">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
              </div>
              </td>
              <td>
              <div className="blocks">
                <h2 className="title-block">Lorem Impsum</h2>
                <p className="paragraph-block">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
              </div>
              </td>
            </tr>
            <tr>
            <td>
              <div className="blocks">
                <h2 className="title-block">Lorem Impsum</h2>
                <p className="paragraph-block">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
              </div>
              </td>
              <td>
              <div className="blocks">
                <h2 className="title-block">Lorem Impsum</h2>
                <p className="paragraph-block">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
              </div>
              </td>
            </tr>
          </table>
        </div>
      
    </div>
  );
};

export default Wwd;
