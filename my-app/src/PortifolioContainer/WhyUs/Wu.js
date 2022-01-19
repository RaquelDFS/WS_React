import React from "react";
import "./Wu.css";

const Wu = () => {
  return (
    <article className="why-us-container">
      <div className="profile-picture-background" />
      <section className="why-us-content">
        <div className="colz" />
        <div className="AboutUs-details-role">
          <span className="prymary-text">
            {" "}
            <h3 className="subtitle">Lorem Ipsum</h3>
            <h1>
              {" "}
              <em className="pink-Lorem">Lorem Ipsum </em>is simply dummy text.
            </h1>
            <span className="AboutUs-role-tagline">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
            <table className="why-us-table">
                <tr>
                    <td className="item-list">
                        <p>Lorem Ipsum</p>
                    </td>
                    <td className="item-list">
                        <p>Lorem Ipsum</p>
                    </td>
                </tr>
                <tr>
                    <td className="item-list">
                        <p>Lorem Ipsum</p>
                    </td>
                    <td className="item-list">
                        <p>Lorem Ipsum</p>
                    </td>
                </tr>
            </table>
          </span>
        </div>
      </section>
    </article>
  );
};

export default Wu;
