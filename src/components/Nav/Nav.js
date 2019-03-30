import React, { Component } from 'react';
import './Nav.css';

import Headroom from 'react-headroom';
import Media from 'react-media';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
        <Link to="/" onClick={ this.toggleMenu }>Home</Link>
        <Link to="/about" onClick={ this.toggleMenu }>About</Link>
        <Link to="/giving" onClick={ this.toggleMenu }>Giving</Link>
        <Link to="/news" onClick={ this.toggleMenu }>News</Link>
        {/* <Link to="/" onClick={ this.toggleMenu }>Ministries</Link> */}
        <a href="https://calendar.google.com/calendar/embed?src=holycross.oca%40gmail.com&ctz=America%2FLos_Angeles" target="_blank" rel="noopener noreferrer nofollow">Calendar</a>
        <HashLink to="/home#contact" onClick={ this.toggleMenu }>Contact</HashLink>
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
