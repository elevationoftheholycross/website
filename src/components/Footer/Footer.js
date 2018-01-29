import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <div className="Footer">
        <a href="https://oca.org" className="oca" target="_blank" rel="noopener noreferrer">
          <img src={ require('../../assets/images/oca-logo.png') } alt="Orthodox Church in America Logo" />
        </a>

        <p>
          Copyright © Elevation of the Holy Cross Orthodox Church<br/>
          9000 Jackson Road, Sacramento, CA 95826
        </p>
      </div>
    )
  }
}

export default Footer;
