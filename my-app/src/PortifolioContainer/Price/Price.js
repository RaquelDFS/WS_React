import React from "react";
import "./Price.css";
const Price = () => {
  return (
    <div className="conteiner-price">
      <div className="wwd-principal">
        <div className="colz middle-colz" />
        <h3 className="subtitle" id="prices">
          Prices
        </h3>
        <h1>
          {" "}
          <em className="pink-Lorem">Lorem Ipsum</em> is simply dummy text.
        </h1>
        <span className="AboutUs-role-tagline"></span>
      </div>
      <div class="stch-container">
        <div id="group">
          <fieldset class="switch">
            <input id="yes" name="view" type="radio" checked />
            <label for="yes">Lorem</label>

            <input id="no" name="view" type="radio" />
            <label for="no">Ipsum</label>

            <span class="switch-button"></span>
          </fieldset>
        </div>
      </div>
      <section>
        <div className="sessao-price-tag">
          <div className="price-component first">
            <div className="price-tag">
              <h1>Lorem Ipsum</h1>
              <p className="price-price">
                <em className="pink-Lorem">
                  R$ 149<small>/month</small>
                </em>
              </p>
            </div>
            <ul>
              <li className="item-price have">
                <p>Lorem ipsum isso tem</p>
              </li>
              <li className="item-price have">
                <p>Lorem ipsum isso tem</p>
              </li>
              <li className="item-price not-have">
                <p>Lorem ipsum isso n tem</p>
              </li>
              <li className="item-price not-have">
                <p>Lorem ipsum isso n tem</p>
              </li>
              <li className="item-price not-have">
                <p>Lorem ipsum isso n tem</p>
              </li>
              <li>
                <button className="btn not">Comprar</button>
              </li>
            </ul>
          </div>
          <div className="price-component second">
            <div className="price-tag">
              <h1>Lorem Ipsum</h1>
              <p className="price-price">
                <em className="pink-Lorem">
                  R$ 149<small>/month</small>
                </em>
              </p>
            </div>
            <ul>
              <li className="item-price have">
                <p>Lorem ipsum isso tem</p>
              </li>
              <li className="item-price have">
                <p>Lorem ipsum isso tem</p>
              </li>
              <li className="item-price have">
                <p>Lorem ipsum isso tem</p>
              </li>

              <li className="item-price not-have">
                <p>Lorem ipsum isso n tem</p>
              </li>
              <li className="item-price not-have">
                <p>Lorem ipsum isso n tem</p>
              </li>
              <li>
                <button className="btn yes">Comprar</button>
              </li>
            </ul>
          </div>
          <div className="price-component terceiro">
            <div className="price-tag">
              <h1>Lorem Ipsum</h1>
              <p className="price-price">
                <em className="pink-Lorem">
                  R$ 149<small>/month</small>
                </em>
              </p>
            </div>
            <ul>
              <li className="item-price have">
                <p>Lorem ipsum isso tem</p>
              </li>
              <li className="item-price have">
                <p>Lorem ipsum isso tem</p>
              </li>
              <li className="item-price have">
                <p>Lorem ipsum isso tem</p>
              </li>
              <li className="item-price have">
                <p>Lorem ipsum isso tem</p>
              </li>
              <li className="item-price have">
                <p>Lorem ipsum isso tem</p>
              </li>

              <li>
                <button className="btn not">Comprar</button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Price;
