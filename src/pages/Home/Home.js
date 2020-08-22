import React, { Component } from 'react';
import './Home.css';

import { Link } from 'react-router-dom';
import TithelyButton from '../../components/TithleyButton';
import AplosModal from '../../components/AplosModal';

class Home extends Component {

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
                <Link to="/welcome">Learn more</Link> about the Orthodox Christian faith, how to attend your first service,
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
                  Discover upcoming events and more on our&nbsp;
                  <a href="https://calendar.google.com/calendar/embed?src=holycross.oca%40gmail.com&ctz=America%2FLos_Angeles" target="_blank" rel="noopener noreferrer nofollow">church calendar</a>.
                </span>
              </div>
            </div>
          </div>

          <div className="section schedule" id="contact" name="contact">
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
                    <a href="https://www.google.com/maps/place/Elevation+of+the+Holy+Cross+Orthodox+Church/@38.536261,-121.3692,17z/data=!3m1!4b1!4m5!3m4!1s0x809adbf17af1107f:0x7d5277f1659e8b1d!8m2!3d38.536261!4d-121.367006" target="_blank" rel="noopener noreferrer">Driving directions</a>
                  </p>
                </span>
              </div>

              <div className="grid-item two">
                <h2>Contact us</h2>
                <span>
                  E-mail:<br/>
                  <a href="mailto:frtimothywinegar@gmail.com">frtimothywinegar@gmail.com</a>
                  <p>
                    Telephone:<br/>
                    (916) 857-0806
                  </p>
                  <p>
                    Mailing address:<br/>
                    2443 Fair Oaks Blvd<br/>
                    #295<br/>
                    Sacramento, CA 95825-7684
                  </p>
                </span>
              </div>

              <div className="grid-item three">
                <h2>Follow us</h2>
                <span>
                  <a href="https://www.facebook.com/holycrosssacramento/" target="_blank" rel="noopener noreferrer">Facebook</a>
                  <p>
                    <a href="https://twitter.com/HolyCrossOCA" target="_blank" rel="noopener noreferrer">Twitter</a>
                  </p>
                  <p>
                    <a href="https://www.instagram.com/holycross.sac/" target="_blank" rel="noopener noreferrer">Instagram</a>
                  </p>
                </span>
              </div>
            </div>
          </div>

          <div className="section stewardship" id="contact" name="contact">
            <h1 className="section-title">Stewardship</h1>
            <h2 className="section-subtitle">Get involved in good works</h2>

            <div className="grid-3">
              <div className="grid-item one">
                <h2>Ministries</h2>
                <span>
                  Your stewardship contributes to our ongoing ministries within the community, and within the parish.
                  We will always welcome a helping hand. More details coming soon!
                </span>
              </div>

              <div className="grid-item two">
                <h2>Giving</h2>
                <span>
                  Contribute directly to the Food Closet, the building fund, your pledge, and other ministries.
                  <p>
                    {/*<TithelyButton text="Donate" />*/}
                    <button className="donate-button" onClick={ this.toggleAplosModal }>Donate online</button>
                  </p>
                </span>
              </div>

              <div className="grid-item three">
                <h2>Learn more</h2>
                <span>
                  <Link to="/giving">Learn more</Link> about stewardship and how your generous contributions are put to good use.
                </span>
              </div>
            </div>
          </div>

          <div className="section">
            <img src={ require('../../assets/images/prayer-rope.png') } alt="Prayer rope" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }} />
          </div>

          <AplosModal show={ this.state.showAplosModal } toggle={ this.toggleAplosModal } />
        </div>
      </div>
    )
  }
}

export default Home;
