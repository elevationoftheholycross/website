import React, { Component } from 'react';
import './Giving.css';

import TithelyButton from '../../components/TithleyButton';

class Giving extends Component {

  render() {
    return (
      <div className="Page Blog Giving">
        <div className="content-container">
          <div className="header">
            <span className="eyebrow">And remember the words of the Lord Jesus, that He said,</span>
            <h1 style={{ color: '#b71c1c' }}>"It is more blessed to give than to receive."</h1>
            <h2>Acts. 20:35</h2>
          </div>

          <div className="body" style={{ display: 'flex', flexDirection: 'column', margin: '0 auto' }}>
            <p>
              Thank you for your generous support of our ministries at Elevation
              of the Holy Cross!  If you would like to make a donation to
              support our parish, our Building Program, Food Closet ministry, or
              other ministries, you may do so and even designate where you would
              like it to go.
            </p>

            <TithelyButton text="Donate" />

            <h3 style={{ margin: '1em auto' }}>
              May the Lord bless you!
            </h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Giving;
