import React, { Component } from 'react';
import './Giving.css';

import { Helmet } from "react-helmet";

import AplosModal from '../../components/AplosModal';
import TithelyButton from '../../components/TithleyButton';

class Giving extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      showAplosModal: false
    };
  }

  toggleAplosModal = () => {
    if( this.state.showAplosModal ) {
      document.querySelector( 'body' ).setAttribute( 'style', '' )
    } else {
      document.querySelector( 'body' ).setAttribute( 'style', 'overflow: hidden;' )
    }

    this.setState({ showAplosModal: !this.state.showAplosModal });
  }

  render() {
    return (
      <div className="Page Blog Giving">
        <Helmet>
          <title>Giving| Elevation of the Holy Cross Sacramento</title>
        </Helmet>

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

            {/*<TithelyButton text="Donate online" />*/}
            <button className="donate-button" onClick={ this.toggleAplosModal }>Donate online</button>

            {/*<p style={{ padding: '.5rem 1rem', borderRadius: '4px', backgroundColor: 'rgba(0, 0, 0, .05)', fontSize: '1rem' }}>
              We have temporary switched to Tithe.ly as our giving platform while issues with APLOS are being addressed. Thank you for your patience.
            </p>*/}

            <p>
              Pledges and all other giving to support our Parish and related ministries may also be mailed to parish mailbox at:
            </p>
            <p style={{ textAlign: 'center' }}>
              2443 Fair Oaks Blvd<br/>
              #295<br/>
              Sacramento, CA 95825-7684
            </p>

            <p>
              <strong>Please indicate in a memo note if your support is for a Pledge, General Donation, Building Fund, Food Closet, or another purpose.</strong>
            </p>

            <h3 style={{ margin: '1em auto' }}>
              May the Lord bless you!
            </h3>
          </div>
        </div>

        <AplosModal show={ this.state.showAplosModal } toggle={ this.toggleAplosModal } />
      </div>
    )
  }
}

export default Giving;
