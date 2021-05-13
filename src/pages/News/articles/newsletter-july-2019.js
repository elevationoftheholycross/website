import React from 'react';

import { Link } from 'react-router-dom';

import { Helmet } from "react-helmet";

const OVERRIDE_COLOR = '#48742c';

const newsletterJuly2019 = ({ imagePrefix }) => {
  return (
    <div className="content-container article">
      <Helmet>
        <title>The Good News - July 2019 | Elevation of the Holy Cross Sacramento</title>
      </Helmet>

      <div className="header">
        <div className="eyebrows">
          <div className="left">
            Quarterly Newsletter
          </div>
          <div className="right">
            July 2019
          </div>
        </div>

        <h1 style={{ color: OVERRIDE_COLOR }}>The Good News</h1>
        <h2>Elevation of the Holy Cross Orthodox Church, Sacramento</h2>
      </div>

      <div className="body">
        <div className="cols">
          <div className="left">
            <div className="section">
              <img src={ require( '../../../assets/images/news/newsletter-july-2019-manton-retreat.jpg' ) } alt="Fr. Timothy and parishioners on a work party and retreat at Manton." />
              <div className="image-caption">
                Fr. Timothy and parishioners on a work party and retreat at Manton.
              </div>

              <h2 className="title" style={{ marginTop: '1rem', color: OVERRIDE_COLOR }}>
                Retreat and Work Party at the Monastery of St. John
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <p>
                  From May 16<sup>th</sup> to 19<sup>th</sup>, Fr. Timothy and a group of Holy Cross
                  parishioners made a pilgrimage to the Monastery of St. John in
                  beautiful Manton, CA, near Lassen National Park. A group of
                  young people from the St. John Academy in San Francisco also
                  happened to be visiting the same weekend. Together, we entered
                  into the daily schedule of services, with an emphasis on the
                  practice of the Jesus Prayer. We also helped out with a number
                  of projects around the monastery, including thinning the
                  forest to reduce fire risks, working in the candle factory,
                  and cleaning the monastery church and buildings.  Though we
                  worked hard, we all left feeling spiritually refreshed from
                  our visit.
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Rector's Reflections
              </h2>
              <div className="author">
                by Father Timothy
              </div>

              <div className="article-body">
                <p>
                  The holy season of Pentecost is renewing and life-giving.
                  During the Paschal season, we rejoiced in the triumph of our
                  Savior’s Resurrection, and the victory of Life over death.
                  Following His Ascension, we abided in spirit in the Upper Room
                  with the disciples, awaiting the Promise of the Father and
                  power from on high (<em>cf.</em> Lk. 24:49). And now, with the
                  descent of the Holy Spirit on Pentecost, we understand our
                  calling as Christians to be <em>sanctification</em> and
                  &nbsp;<em>evangelization</em>: we are called to both become saints,
                  and to become <em>witnesses</em> of our Lord, God and Savior
                  Jesus Christ.
                </p>
                <p>
                  Whatever activities we may take part in this summer, whatever work we may be doing, and whatever aspirations we may have, let us never forget our high calling as revealed on Pentecost: to sanctify the Lord God in our hearts, and to always be ready to give an answer for the hope that is in us (<em>cf.</em> 1 Pet. 3:15). And we do this through purifying our hearts and remaining firmly rooted in Christ, that we might bear the fruits of the Spirit (Gal. 5:22-23) and fulfill our calling as the light of the world (Mt. 5:14). But let us not ‘overthink’ how to share our faith and evangelize either; rather, I’d suggest that we simply pray that the Lord help us to become His witnesses, and to share His light and His love with those around us. And once we’ve done this (or better, continue to do this), we should simply be open to the encounters and conversations that He Himself arranges. Because a gentle and kind word at the right moment can change a life and convict a heart much more readily than any carefully crafted argument.
                </p>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="section">
              <h2 className="title" style={{ marginBottom: '1rem', color: OVERRIDE_COLOR }}>
                Great Lent Building Fund Match
              </h2>

              <div className="article-body">
                <p>
                  During the Lenten Season, we not only met but exceeded our matching donation challenge! Let’s keep up the momentum as we work toward our goal of $400,000 in the Building Fund by the end of the year! Stay tuned for some exciting news from our Development Committee on our next steps in moving forward this Fall.
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Ministry Fair
              </h2>

              <div className="article-body" style={{ marginBottom: '16px' }}>
                <p>
                  On Sunday June 2, our first ever Ministry Fair was held during Coffee Hour. This exciting event –with over 15 ministries, committees and study classes represented– showcased our active parish life. The goal of the event was to familiarize and connect our parishioners with many ways in which we can get more involved in parish life. A parish–as the local manifestation of the Body of Christ– needs all of its members to contribute in some way for the Body to be healthy and thriving. And no matter how else we might contribute, we certainly all need each other’s prayers and encouragement!
                </p>

                <img src={ require('../../../assets/images/news/newsletter-july-2019-fair.jpg') } alt="Ministry fair" />
              </div>
            </div>

            <div className="section">
              <h3 className="eyebrow">Looking Ahead</h3>
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                3rd Annual Wine Stroll
              </h2>

              <div className="article-body" style={{ marginBottom: '16px' }}>
                <p>
                  Join us Saturday September 28, from 5 to 8 p.m. at our outdoor pavilion! Taste wines from several local area wineries while enjoying a variety of delicious appetizers. We will also have a raffle/auction for some great prizes! Tickets are $35 presale and $40 at the door. All proceeds go to the Holy Cross Building Program.
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ marginBottom: '1rem', color: OVERRIDE_COLOR }}>
                Building Fund Updates
              </h2>

              <div className="article-body">
                <ul style={{ paddingLeft: '0', marginBottom: '0' }}>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong>YTD Raised:</strong> <span>$33,511</span>
                  </li>

                  <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong>Total:</strong> <strong>$344,001</strong>
                  </li>
                </ul>

                <span style={{ fontSize: '1rem' }}>
                  Numbers as of June 30, 2019
                </span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '16px', paddingTop: '32px', borderTop: '1px solid rgba(0, 0, 0, .2)' }}>
          <div className="section">
            <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
              May God Grant You Many Years!
            </h2>

            <div className="article-body">
              <ul style={{ paddingLeft: '16px' }}>
                <li>
                  <strong>Marriages</strong>
                  <ul>
                    <li>
                      Adam Seraphim Torruella &amp; Brittany Euphrosyne Bonitata
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Baptisms &amp; Chrismations</strong>
                  <ul>
                    <li>Michael Herman Lineback</li>
                    <li>Brittany Euphrosyne Bonitata</li>
                    <li>Patrick Eugene Odland</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="section" style={{ marginBottom: '8px', paddingBottom: 0, border: 'none' }}>
            <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
              Remembering Archbishop John (Shahovskoy):
            </h2>

            <div className="article-body" style={{ clear: 'all' }}>
              <p style={{ float: 'right', maxWidth: '50%', marginLeft: '2rem' }}>
                <img src={ require('../../../assets/images/news/newsletter-july-2019-archbishop-john-shahovskoy.png') } alt="Archbishop John Shahovskoy" />
              </p>
              <p>
                <span style={{ color: OVERRIDE_COLOR }}>Prayer for those who have departed this life also cleanses the heart of the one who prays…prayer for the living can at times be accompanied by our own self-interest, but such can never be the case with prayer for the departed – it always exudes heavenly, purified love, the veritable air of eternity.</span>
                <br />
                -Archbishop John Shahovskoy
              </p>
              <p>
                Thursday May 30, 2019 marked the 30th Anniversary of the repose of the remarkable hierarch and former Archpastor of our Diocese of the West–Archbishop John Shahovskoy. After receiving monastic tonsure on Mt. Athos in 1926, the future Archbishop began an active missionary ministry throughout Europe  before later moving to the United States. Archbishop John served as the Archbishop of San Francisco for nearly three decades, from 1950-1973, and again, after being called out of retirement, from 1975-1979, during which time he blessed the founding of our parish.  A prolific writer and poet, Archbishop John is best-known for a treatise on the priesthood – The Orthodox Pastor. His monastic cross, containing a relic of the True Cross and relics of five saints, was posthumously gifted to our parish, where it is now venerated by our faithful. A memorial Liturgy was held in Christ the Savior Church in San Francisco, his former residence, where Fr. Timothy concelebrated together with Fr. Philip Halliwell.
              </p>
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

export default newsletterJuly2019;
