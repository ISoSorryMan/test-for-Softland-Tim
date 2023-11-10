import React, { Component } from 'react';
import '../css/App.css';

class AdOfferConsole extends Component {
  render() {
    return (
      <div className="info-block ad-offer-console">
        
        <div className="info-block forms">
          <h1>Advertising offers</h1>
          <p>Create a new offer</p>
          <form>
            <input type="text" id="offerName" name="offerName" placeholder='Name of the offer' />
            <textarea id="offerDescription" name="offerDescription" placeholder='Description'></textarea>
            <input type="number" id="offerPrice" name="offerPrice" placeholder='Price'/>
            <button type="submit">Створити</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AdOfferConsole;
