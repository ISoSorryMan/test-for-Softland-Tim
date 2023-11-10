import React, { Component } from 'react';
import '../css/App.css';

class AffiliateProgram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      affiliateCode: '',
      affiliateLinks: [],
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  generateAffiliateCode = () => {
    // Ось деякий спосіб генерувати унікальний партнерський код для користувача
    const { username } = this.state;
    const affiliateCode = username.slice(0, 5) + Math.random().toString(36).substring(2, 7);
    this.setState({ affiliateCode });
  };

  generateAffiliateLink = () => {
    const { affiliateCode } = this.state;
    const affiliateLink = `https://example.com/?affiliate=${affiliateCode}`;
    this.setState((prevState) => ({
      affiliateLinks: [...prevState.affiliateLinks, affiliateLink],
    }));
  };

  render() {
    return (
      <div className='info-block forms'>
        <h1>Partnership</h1>
        <div>
          <input
            type="text"
            value={this.state.username}
            placeholder='Enter your username'
            onChange={this.handleUsernameChange}
          />
          <button onClick={this.generateAffiliateCode}>Generate Affiliate Code</button>
        </div>
        {this.state.affiliateCode && (
          <div className='code'>
            <label>Your Affiliate Code:</label>
            <input
              type="text"
              value={this.state.affiliateCode}
              readOnly
            />
            <button onClick={this.generateAffiliateLink}>Generate Affiliate Link</button>
          </div>
        )}
        {this.state.affiliateLinks.length > 0 && (
          <div className='link'>
            <h2>Your Affiliate Links:</h2>
            <ul>
              {this.state.affiliateLinks.map((link, index) => (
                <li key={index}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default AffiliateProgram;
