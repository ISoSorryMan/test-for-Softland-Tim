import React, { Component } from 'react';
import '../css/App.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      submitted: false,
      emailError: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, emailError: '' });
  };

  validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email } = this.state;

    if (!this.validateEmail(email)) {
      this.setState({ emailError: 'Please enter a valid email address' });
      return;
    }

    this.setState({ submitted: true, emailError: '' });

    this.setState({
      name: '',
      email: '',
      message: '',
    });
  };

  render() {
    const { name, email, message, submitted, emailError } = this.state;

    return (
      <div className='info-block forms'>
        <h1>Contact Us</h1>
        {submitted ? (
          <div>
            <p>Thank you for your message! We will get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                value={name}
                placeholder='Name'
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={email}
                placeholder='Email'
                onChange={this.handleInputChange}
                required
              />
              {emailError && <p className="error-message">{emailError}</p>}
            </div>
            <div>
              <textarea
                name="message"
                value={message}
                placeholder='Your message'
                onChange={this.handleInputChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default ContactForm;
