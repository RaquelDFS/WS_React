import React from 'react';
import './Price.css'
const Price = () => {
  return <article className='conteiner-price'>
             <div className="wwd-principal">
        <div className="colz middle-colz" />
        <h3 className="subtitle" id="prices">Prices</h3>
        <h1>
          {" "}
           <em className="pink-Lorem">Lorem Ipsum</em> is simply dummy text.
        </h1>
        <span className="AboutUs-role-tagline">
        </span>
      </div> 
      <div class="stch-container">
  <div id="group">
    <fieldset class="switch">
      
      <input id="yes" name="view" type="radio" checked/>
      <label for="yes">Lorem</label>

      <input id="no" name="view" type="radio"/>
      <label for="no">Ipsum</label>

      <span class="switch-button"></span>
    </fieldset>
  </div>
</div>
      
  </article>;
};

export default Price;
