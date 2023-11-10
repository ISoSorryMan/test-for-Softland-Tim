import React, { Component } from 'react';
import '../css/App.css';

class URLGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: 'https://example.com/',
      parameterName: '',
      parameterValue: '',
      generatedUrl: '',
    };
  }

  handleParameterNameChange = (event) => {
    this.setState({ parameterName: event.target.value });
  };

  handleParameterValueChange = (event) => {
    this.setState({ parameterValue: event.target.value });
  };

  generateURL = () => {
    const { baseUrl, parameterName, parameterValue } = this.state;
    const generatedUrl = `${baseUrl}?${parameterName}=${parameterValue}`;
    this.setState({ generatedUrl });
  };

  copyURLToClipboard = () => {
    const { generatedUrl } = this.state;
    if (generatedUrl) {
      navigator.clipboard.writeText(generatedUrl)
        .then(() => {
          alert('URL copied to clipboard!');
        })
        .catch((error) => {
          console.error('Copy failed: ', error);
        });
    }
  };

  render() {
    return (
      <div className='info-block forms'>
        <h1>URL Generator</h1>
        <div>
          <label>Base URL</label>
          <input
            type="text"
            value={this.state.baseUrl}
            readOnly
          />
        </div>
        <div>
          <input
            type="text"
            value={this.state.parameterName}
            placeholder='Parameter Name'
            onChange={this.handleParameterNameChange}
          />
        </div>
        <div>
          <input
            type="text"
            value={this.state.parameterValue}
            placeholder='Parameter Value'
            onChange={this.handleParameterValueChange}
          />
        </div>
        <button onClick={this.generateURL}>Generate URL</button>
        {this.state.generatedUrl && (
          <div className='gen'>
            <span>Generated URL</span>
            <input
              type="text"
              value={this.state.generatedUrl}
              readOnly
            />
            <button onClick={this.copyURLToClipboard}>Copy URL</button>
          </div>
        )}
      </div>
    );
  }
}

export default URLGenerator;
