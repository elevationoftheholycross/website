import React from 'react';

import { Link } from 'react-router-dom';

import { Helmet } from "react-helmet";

const OVERRIDE_COLOR = 'rgb( 183, 28, 28 )';

const newsletterDecember2021 = ({ imagePrefix }) => {
  return (
    <div className="content-container article">
      <Helmet>
        <title>The Good News - December 2021 | Elevation of the Holy Cross Sacramento</title>
      </Helmet>

      <div className="header">
        <div className="eyebrows">
          <div className="left">
            Quarterly Newsletter
          </div>
          <div className="right">
            December 2021
          </div>
        </div>

        <h1 style={{ color: OVERRIDE_COLOR }}>The Good News</h1>
        <h2>Elevation of the Holy Cross Orthodox Church, Sacramento</h2>
      </div>

      <div className="body">
        <div className="cols">
          <div className="left">

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Reflection
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <div style={{ float: 'right', maxWidth: '50%', marginLeft: '2rem' }}>
                  <img src={ require('../../../assets/images/news/newsletter-december-2021-1.jpg') } alt="Reflection" />
                </div>

                <p>
                  The Nativity Fast is a time of preparation to greet the coming of our Savior as a little Child on Christmas Day. It’s a time marked by much activity – aside from our work or schooling, which are in full swing, there’s the shopping, decorating, travel arrangements, visiting with friends and family, and many other things, not to mention lingering stresses about the coronavirus and how it may affect our holiday plans. But we’re also reminded of our Lord’s admonition to Martha: <em>Martha, Martha, you are worried and troubled about many things, but one thing is needful…</em> And how needful it is for us too! 
                </p>

                <p>
                  There’s a great temptation to try to calm the turmoil and unease we feel with yet more activity or entertainment…but our Lord invites us to take time during this Advent period to quiet our hearts and reflect upon this great mystery: 
                </p>

                <p>
                  <em>
                    Come, O God-inspired faithful, <br/>
                    Arise and behold the descent of God from on high!<br/>
                    He manifests Himself to us in Bethlehem.<br/>
                    Let us cleanse our minds and offer Him a life of virtue instead of myrrh.<br/>
                    Let us prepare with faith to celebrate His Nativity,<br/>
                    Storing up spiritual treasure and crying out:<br/>
                    "Glory in the highest to God in Trinity!"
                  </em>
                </p>

                <p>
                  So this year let’s not just prepare externally with gifts, meals, and hospitality, but also prepare our hearts to greet this Great Day with JOY: reading the Holy Scriptures, (if possible together with our families), going to confession, and setting aside more time to pray, especially in the angelic words: <em>Glory to God in the highest, and on earth peace, goodwill among men!</em> A blessed Nativity of our Lord Jesus Christ to all you! Christ is Born! Glorify Him!
                </p>

                <p>
                  <em>–fr timothy</em>
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Feast Day
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <div style={{ float: 'left', maxWidth: '50%', marginRight: '2rem' }}>
                  <img src={ require('../../../assets/images/news/newsletter-december-2021-feast-day.jpg') } alt="Feast Day" />
                </div>

                <p style={{ minHeight: '535px' }}>
                  Our patronal feast on September 14th was blessed with the presence of our Archbishop Benjamin and several visiting priests. The focus of the service was on Christ’s sacrifice for us on the Cross which restored to life all of humanity, defeating the bonds of death. The Hierarchal Liturgy was followed by a celebratory lunch with encouragement for the continued growth of the parish and our work toward our new church building. It was a great joy to celebrate together with our Archbishop and many visiting friends this year!
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Wine Stroll
              </h2>

              <div className="article-body">
                <p>
                  On Saturday October 16th, we held our Wine Stroll fundraiser once again. It was a lovely, windless Autumn evening with about a hundred people in attendance and featuring six award-winning local wineries from the Amador, Lodi and El Dorado regions.  Guests enjoyed sampling a wide variety of local wines and tasty hors d’oeuvres. There was a silent auction, including a week time-share stay and autographed Kings memorabilia, and a wide variety of raffle prizes.  When all was said and done, we raised over $7,100 toward our Building Program! Thanks to everyone who helped make this happen and everyone who participated…we look forward to holding it again next year, God willing!
                </p>
              </div>

              <img src={ require( '../../../assets/images/news/newsletter-december-2021-wine-stroll.jpg' ) } alt="Wine Stroll" style={{ marginTop: '1rem' }} />

              <h2 className="title" style={{ marginTop: '2rem', color: OVERRIDE_COLOR }}>
                Christmas Around the World
              </h2>

              <div className="article-body">
                <p>
                  Christmas Around the World took place once again this year on November 13th with cooperation of around seven local parishes and hosted by Annunciation Greek Orthodox Church in their Hellenic Center. It featured delicious foods from around the world, along with unique crafts and gifts. This year we also raised around $3,500 for our building program!
                </p>
              </div>

              <img src={ require( '../../../assets/images/news/newsletter-december-2021-christmas.jpg' ) } alt="Christmas Around the World" style={{ marginTop: '1rem' }} />

              <h2 className="title" style={{ marginTop: '2rem', color: OVERRIDE_COLOR }}>
                Building Program Update
              </h2>

              <div className="article-body">
                <p>
                  Our building program work is moving ahead! On Oct. 27th we completed a soil survey to assist in finalizing our site plan and assure the foundational stability of our new church. Along with this soils report, the preliminary architectural work and site planning work are wrapping up. We hope to begin our permitting process with the County early next year and, God willing, begin the site improvement phase of our work! This will involve site grading for drainage, paving for parking, and preparing utility connections for the new church.  We also have our <strong>Nativity Fast matching donation challenge</strong> underway, where gifts toward the Building Fund will be matched up to $10,000. If we meet this match, we will reach our goal of raising $100,000 again this year and surpassing $600,000 in our Building Fund!
                </p>
              </div>

              <img src={ require( '../../../assets/images/news/newsletter-december-2021-building-program.jpg' ) } alt="Building Program Update" style={{ marginTop: '1rem', marginBottom: '1rem' }} />

            </div>

            <div className="section" style={{ borderBottom: 'none' }}>
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Save the Date
              </h2>

              <div className="article-body">
                <ul style={{ paddingLeft: '16px' }}>
                  <li>
                    Parish Retreat at the Monastery of St John: December 10 - December 12 
                  </li>
                </ul>
              </div>

              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Nativity Services
              </h2>

              <div className="article-body">
                <ul style={{ paddingLeft: '16px' }}>
                  <li>
                    Friday, December 24<br/>
                    <ul>
                      <li>Royal Hours - 9:00 AM</li>
                      <li>Nativity Vigil - 4:00 PM</li>
                    </ul>
                  </li>
                  <li>
                    Saturday, December 25<br/>
                    <ul>
                      <li>Divine Liturgy - 9:00 AM</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="article-body">
                <strong><em>Christ is Born! Glorify Him!</em></strong>
              </div>
            </div>
          </div>
        </div>

        <div className="article-footer">
          9000 Jackson Rd, Sacramento, CA 95826 <Link to={ `/` }>holycrosssacramento.org</Link><br/>
          Mailing: 2443 Fair Oaks Blvd #295, Sacramento, CA 95825
        </div>
      </div>
    </div>
  );
}

export default newsletterDecember2021;
