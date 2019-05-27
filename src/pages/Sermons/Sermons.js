import React, { Component } from 'react';
import './Sermons.css';

import { Link } from 'react-router-dom';

class Sermons extends Component {

  renderLink = ( fileName, text ) => {
    const baseUrl = 'https://github.com/elevationoftheholycross/sermons/raw/master';

    return (
      <a href={ `${ baseUrl }/${ fileName }` } target="_blank" rel="noopener noreferrer">
        <h3>{ text }</h3>
      </a>
    )
  }

  render() {
    return (
      <div className="Page Blog About">
        <div className="content-container">
          <div className="header">
            <h1>Sermons</h1>
            <h2>Listen to recent sermons given by our priests</h2>
          </div>

          <div className="body">
            <div className="link">
              { this.renderLink( 'Fr.Timothy05122019.mp3', 'May 12th, 2019 - Sunday of the Holy Myrrhbearing Women' ) }
              <p>
                Fr. Timothy
              </p>
            </div>

            <div className="link">
              { this.renderLink( 'Fr.Timothy_05052019.mp3', 'May 5th, 2019 - St. Thomas Sunday' ) }
              <p>
                Fr. Timothy
              </p>
            </div>

            <div className="link">
              { this.renderLink( 'Fr.Timothy04142019.mp3', 'April 14th - St. Mary of Egypt' ) }
              <p>
                Mark 10:32-45, Fr. Timothy
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Sermons;
