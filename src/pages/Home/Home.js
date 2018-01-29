import React, { Component } from 'react';
import './Home.css';

import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <div className="hero">
          <h1>Elevation of the Holy Cross</h1>
          <h2>Orthodox Christian Church</h2>
        </div>

        <div className="content">
          <div className="section cross-section">
            <img src={ require('../../assets/images/holy-cross.png') }
                 className="cross-icon"
                 alt="Holy Cross icon" />

            <div className="box">
              <h1>
                O Lord, save Thy people<br/>
                And bless Thine inheritance
              </h1>
              <h3>
                Troparion of the Life Giving Cross
              </h3>
            </div>
          </div>

          <div className="section welcome">
            <h1 className="section-title">First time visitor?</h1>

            <div className="blurb">
              <p>
                It is our great joy to welcome you to Elevation of the Holy Cross Orthodox Christian Church!
              </p>
              <p>
                <Link to="/">Learn more</Link> about the Orthodox Christian faith, how to attend your first service,
                and what to expect for your first visit to Elevation of the Holy Cross.
              </p>
            </div>
          </div>

          <div className="section schedule">
            <h1 className="section-title">Services Schedule</h1>
            <h2 className="section-subtitle">Please join us for any of our services, or events</h2>

            <div className="grid-3">
              <div className="grid-item one">
                <h2>Vespers</h2>
                <span>
                  Saturdays at 5:30 PM <br/>
                  Confession available after.
                </span>
              </div>

              <div className="grid-item two">
                <h2>Divine Liturgy</h2>
                <span>
                  Sundays at 9:00 AM <br/>
                  Fellowship &amp; coffee hour after.
                </span>
              </div>

              <div className="grid-item three">
                <h2>Calendar</h2>
                <span>
                  Discover upcoming events and more on our <Link to="/">church calendar</Link>.
                </span>
              </div>
            </div>
          </div>

          <div className="section schedule">
            <h1 className="section-title">Get in Touch</h1>
            <h2 className="section-subtitle">Join us for services, give us a call, or reach out to us online</h2>

            <div className="grid-3">
              <div className="grid-item one">
                <h2>Visit us</h2>
                <span>
                  Elevation of the Holy Cross Orthodox Church<br/>
                  9000 Jackson Road<br/>
                  Sacramento, California 95826
                  <p>
                    <a href="https://google.com" target="_blank" rel="noopener noreferrer">Driving directions</a>
                  </p>
                </span>
              </div>

              <div className="grid-item two">
                <h2>Contact us</h2>
                <span>
                  Email:<br/>
                  <a href="mailto:hello@holycrosssacramento.com">hello@holycrosssacramento.com</a>
                  <p>
                    Telephone:<br/>
                    (916) 857-0806
                  </p>
                </span>
              </div>

              <div className="grid-item three">
                <h2>Follow us</h2>
                <span>
                  <a href="https://google.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                  <p>
                    <a href="https://google.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                  </p>
                  <p>
                    <a href="https://google.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                  </p>
                </span>
              </div>
            </div>
          </div>

          <div className="section">
            <img src={ require('../../assets/images/prayer-rope.png') } alt="Prayer rope" style={{ display: 'block', margin: '0 auto' }} />
          </div>

        </div>
      </div>
    )
  }
}

export default Home;
