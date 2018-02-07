import React, { Component } from 'react';
import './About.css';

import { Link } from 'react-router-dom';

class About extends Component {

  render() {
    return (
      <div className="Page Blog About">
        <div className="content-container">
          <div className="header">
            <h1>About Us</h1>
            <h2>Welcome to Elevation of the Holy Cross</h2>
          </div>

          <div className="body">
            <div className="link">
              <Link to="/welcome">
                <h3>First time visitor?</h3>
              </Link>
              <p>
                A letter from Father Ian MacKinnon
              </p>
            </div>

            <div className="link">
              <Link to="/orthodoxy">
                <h3>What is Orthodox Christianity?</h3>
              </Link>
              <p>
                A brief exploration of Orthodoxy and its history
              </p>
            </div>

            {/* <div className="link">
              <Link to="/orthodoxy">
                <h3>Clergy and Lay Leadership</h3>
              </Link>
              <p>
                Meet a few (of our many) servants of God
              </p>
            </div> */}

            <div className="link">
              <Link to="/history">
                <h3>Parish History</h3>
              </Link>
              <p>
                How we got our start, and where we're headed
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
