import React, { Component } from 'react';
import './Ministries.css';

import { Link } from 'react-router-dom';

class Ministries extends Component {

  render() {
    return (
      <div className="Page Blog Ministries">
        <div className="content-container">
          <div className="header">
            <h1>Ministries</h1>
            <h2 style={{ color: '#b71c1c' }}>"And whatever you do, do it heartily, as to the Lord and not to men"</h2>
            <h2>Col. 3:23</h2>
          </div>

          <div className="body">

            <div className="link">
              <Link to="/outreachandcharity">
                <h3>Outreach and Charity</h3>
              </Link>
              <p>
                <em>My little children, let us not love in word or in tongue, but in deed and in truth.</em>
                <br/>
                1 John 3:18
              </p>
            </div>

            <div className="link">
              <Link to="/education">
                <h3>Education</h3>
              </Link>
              <p>
                <em>O how I have loved Thy law, O Lord! The whole day long it is my meditation.</em>
                <br/>
                Psalm 118/119:97
              </p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Ministries;
