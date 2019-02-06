import React, { Component } from 'react';
import './Giving.css';

import Tithely from './tithely';

class Giving extends Component {

  componentDidMount() {
    var tw = Tithely.create_tithely_widget();
    console.log(tw);
    console.log(Tithely.create_tithely_widget);
  }

  render() {
    return (
      <div className="Page Blog Giving">
        <div className="content-container">
          <div className="header">
            <h1>Giving</h1>
            <h2>Thank you</h2>
          </div>

          <div className="body">
            <button className="tithely-give-btn" data-church-id="594092">Give</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Giving;
