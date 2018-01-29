import React, { Component } from 'react';
import './Nav.css';

import Headroom from 'react-headroom';
import { Link } from 'react-router-dom';

class Nav extends Component {

  render() {
    return (
      <Headroom>
        <div className="Nav">
          <nav>
            <Link to="/">
              <img src={ require('../../assets/images/oca-logo.png') } alt="Holy Cross Home" style={{ height: '60px' }} />
            </Link>

            <div className="links">
              <Link to="/">Home</Link>
              <Link to="/">About</Link>
              <Link to="/">Ministries</Link>
              <Link to="/">Calendar</Link>
              <Link to="/">Contact</Link>
            </div>
          </nav>
        </div>
      </Headroom>
    )
  }
}

export default Nav;
