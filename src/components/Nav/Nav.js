import React, { Component } from 'react';
import './Nav.css';

import Headroom from 'react-headroom';
import Media from 'react-media';
import { Link } from 'react-router-dom';

class Nav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  toggleMenu = () => {
    this.setState((prevState, props) => {
      return { isOpen: !prevState.isOpen }
    })
  }

  renderNav = () => {
    return (
      <div className="nav-container">
        <nav>
          <Link to="/">
            <img src={ require('../../assets/images/oca-logo.png') } alt="Holy Cross Home" style={{ height: '60px' }} />
          </Link>

          <Media query="(max-width: 768px)">
            {
              matches => matches ? (
                <button onClick={ this.toggleMenu }>
                  <i className="material-icons">&#xE5D2;</i>
                </button>
              ) : (
                this.renderLinks()
              )
            }
          </Media>
        </nav>
      </div>
    )
  }

  renderLinks = () => {
    return (
      <div className={`links ${ this.state.isOpen ? 'open' : 'closed' }` }>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* <Link to="/">Ministries</Link> */}
        <Link to="/">Calendar</Link>
        <Link to="/">Contact</Link>
      </div>
    )
  }

  renderMenu = () => {
    return (
      <div className="nav-container" style={ this.state.isOpen ? {} : { display: 'none' } }>
        <nav>
          <button onClick={ this.toggleMenu }>
            <i className="material-icons">&#xE5D2;</i>
          </button>

          { this.renderLinks() }
        </nav>
      </div>
    )
  }

  render() {
    return (
        <div className="Nav">
          <Headroom>
            { this.renderNav() }
          </Headroom>

          <Media query="(max-width: 768px)" render={ this.renderMenu } />
        </div>
    )
  }
}

export default Nav;
