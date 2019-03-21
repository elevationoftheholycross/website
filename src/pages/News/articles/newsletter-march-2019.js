import React from 'react';

import { Link } from 'react-router-dom';

const OVERRIDE_COLOR = '#302171';

const newsletterMarch2019 = ({ imagePrefix }) => {
  return (
    <div className="content-container article">
      <div className="header">
        <div className="eyebrows">
          <div className="left">
            Quarterly Newsletter
          </div>
          <div className="right">
            March 2019
          </div>
        </div>

        <h1 style={{ color: OVERRIDE_COLOR }}>The Good News</h1>
        <h2>Elevation of the Holy Cross Orthodox Church, Sacramento</h2>
      </div>

      <div className="body">
        <div className="cols">
          <div className="left">
            <div className="section">
              <img src={ require( '../../../assets/images/news/newsletter-march-2019-retreat.jpg' ) } alt="Pre-Lenten retreat" />

              <h2 className="title" style={{ marginTop: '1rem', color: OVERRIDE_COLOR }}>
                Retreat at Holy Assumption Monastery
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <p>
                  On Saturday March 9th, Fr. Timothy and Fr. Ian led a pre-Lenten
                  retreat at the&nbsp;
                  <a href="https://www.holyassumptionmonastery.com/" target="_blank" rel="noopener noreferrer">Holy Assumption Monastery in Calistoga</a>.
                  The theme of the retreat was “Seeking first the Kingdom: Our
                  Lord’s Teaching from the Sermon on the Mount.”  Over twenty
                  parishioners from Holy Cross attended, along with many other
                  friends of the monastery from throughout Northern California.
                  Fr. Timothy first provided some theological background on how
                  the Sermon on the Mount is the New Testament fulfillment of
                  the Old Testament Law given on Mt. Sinai.  He stressed that we
                  Orthodox Christians are to live by these Gospel Commandments,
                  which can be expressed as a call to live a hidden and simple
                  life in Christ.  Fr. Ian continued on this theme, explaining
                  just what is the Kingdom that we seek and what it means to
                  seek first the Kingdom of God.  He also discussed how since
                  the lamp of the body is the eye, we need to strive for a pure
                  and sanctified vision of the world and people around us.  In
                  the afternoon, there was an open discussion facilitated by
                  Frs. Timothy and Ian, along with Mother Melania, the Abbess of
                  the sisterhood.
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Looking Ahead: Pascha Agape Meal & BBQ Potluck Picnic
              </h2>

              <div className="article-body">
                <p>
                  Following the midnight Divine Liturgy on Pascha we break our
                  fast in the early morning hours together at an Agape Meal in
                  our pavilion. The following afternoon after Paschal Vespers we
                  come together again to share in a BBQ Potluck Picnic. Both
                  meals are a potluck and everyone is encouraged to sign up and
                  share a dish as well as bring your own drinks.  For sign ups
                  please see Melissa Dubovik or the sign up sheet on the hall
                  bulletin board.
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                American River Blessing on Theophany
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <p style={{ float: 'left', maxWidth: '50%', marginRight: '2rem' }}>
                  <img src={ require('../../../assets/images/news/newsletter-march-2019-blessing.jpg') } alt="American River Blessing on Theophany" />
                </p>
                <p>
                  On Sunday, January 6<sup>th</sup>, Fr. Timothy and the faithful of Holy Cross gathered at the banks of the American River for the Great Blessing of the Waters. This is customarily celebrated on the Great Feast of Theophany, commemorating our Lord’s Baptism by John in the Jordan River. The American River is a 120 mile waterway that originates in the Sierra Nevada mountain range, and is the site where gold was discovered in 1848 that started the California Gold Rush. It flows into Folsom Lake just outside of Sacramento, and eventually joins the Sacramento River. By this confluence, the waters of the American River flow into the San Francisco Bay Watershed. These waters eventually join the Pacific Ocean, and through the Pacific, reach the rest of the world. Thus, by blessing the river off of this rainy, rocky bank, the Orthodox faithful invoke God's blessing on the living waters on the whole of His creation! "Great art Thou O Lord, and marvelous are Thy works, and there is no word sufficient to hymn Thy wonders!"
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Rector's Reflections
              </h2>
              <div className="author">
                by Fr. Timothy
              </div>

              <div className="article-body">
                <p>
                  Though we might be tempted to approach Great Lent as a somber time, we must remember that the Church calls us to enter into the Fast in a joyful spirit. Let us joyfully begin the all-hallowed season of abstinence, and let us shine with the bright radiance of Christ our God… (Matins of Clean Monday) Why is this? As we read in the Psalms, They that sow with tears shall reap with rejoicing (Ps. 125). During Great Lent, we intensify our personal repentance. The experience of the Church (and many of us personally) is that the more deeply we repent, the more we experience God’s love and mercy. We weep over our transgressions, and in the process, we are cleansed, we are purified, and we feel light once again. Our tears (metaphorical or actual) become the waters of our renewal in Christ. Therefore, in all our personal efforts of prayer, fasting and charitable works (almsgiving), we need to keep in mind that the proper Lenten spirit for all of this is one of joy and gratitude. We rejoice and are thankful for the opportunity to be healed of soul’s wounds, to draw closer to God, and to be of help to our brothers and sisters. Come, O ye people, and today let us accept the grace of the fast as a gift from God and a time for repentance (Lenten Triodion).
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Baptisms &amp; Births
              </h2>

              <div className="article-body">
                <ul style={{ paddingLeft: '16px' }}>
                  <li>Joshua Gray</li>
                  <li>Michael Herman Lineback</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="section">
              <h3 className="eyebrow">
                Holy Week Schedule
              </h3>

              <div className="article-body" style={{ marginBottom: '32px' }}>
                <span style={{ color: OVERRIDE_COLOR }}>Friday, April 19</span>
                <ul className="crossed-list">
                  <li>6:00 pm Vespers (Lazarus Saturday)</li>
                </ul>

                <span>
                  <span style={{ color: OVERRIDE_COLOR }}>Saturday, April 20</span>
                </span>
                <ul className="crossed-list">
                  <li>9:00 am Divine Liturgy (Lazarus Saturday) followed by all day parish work day to clean the grounds</li>
                  <li>5:30 pm Vigil (Palm Sunday)</li>
                </ul>

                <span>
                  <span style={{ color: '#48742c' }}>Sunday, April 21</span>
                </span>
                <ul className="crossed-list">
                  <li>9:00 am Divine Liturgy <span style={{ color: '#48742c' }}>(Palm Sunday)</span></li>
                </ul>

                <span>
                  <span style={{ color: OVERRIDE_COLOR }}>Holy Monday, April 22</span>
                </span>
                <ul className="crossed-list">
                  <li>6:00 pm Bridegroom Matins</li>
                </ul>

                <span>
                  <span style={{ color: OVERRIDE_COLOR }}>Holy Tuesday, April 23</span>
                </span>
                <ul className="crossed-list">
                  <li>6:00 pm Bridegroom Matins</li>
                </ul>

                <span>
                  <span style={{ color: OVERRIDE_COLOR }}>Holy Wednesday, April 24</span>
                </span>
                <ul className="crossed-list">
                  <li>6:00 pm Bridegroom Matins</li>
                </ul>

                <span>
                  <span style={{ color: OVERRIDE_COLOR }}>Holy Thursday, April 25</span>
                </span>
                <ul className="crossed-list">
                  <li>9:00 am Vesperal Divine Liturgy</li>
                  <li>6:00 pm Matins & 12 Gospel Readings</li>
                </ul>

                <span>
                  <span style={{ color: OVERRIDE_COLOR }}>Holy Friday, April 26</span>
                </span>
                <ul className="crossed-list">
                  <li>9:00 am Royal Hours</li>
                  <li>3:00 pm Vespers & Burial Service</li>
                  <li>6:00 pm Matins of Holy Saturday</li>
                </ul>

                <span>
                  <span style={{ color: OVERRIDE_COLOR }}>Holy Saturday, April 27</span>
                </span>
                <ul className="crossed-list">
                  <li>9:00 am Vesperal Divine Liturgy</li>
                  <li>11:30 pm <span style={{ color: OVERRIDE_COLOR }}>Great and Holy Pascha</span>: Nocturns, Matins & Divine Liturgy followed by Pascha Agape meal</li>
                </ul>

                <span>
                  <span style={{ color: OVERRIDE_COLOR }}>Sunday, April 28</span>
                </span>
                <ul className="crossed-list">
                  <li>2:00 pm Paschal Vespers, BBQ Potluck Picnic & Easter Egg Hunt</li>
                </ul>

                <span>
                  <span style={{ color: OVERRIDE_COLOR }}>Bright Wednesday, May 1</span>
                </span>
                <ul className="crossed-list">
                  <li>6:00 pm Vespers</li>
                </ul>

                <span>
                  <span style={{ color: OVERRIDE_COLOR }}>Bright Thursday, May 2</span>
                </span>
                <ul className="crossed-list">
                  <li>9:00 am Divine Liturgy</li>
                </ul>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ marginBottom: '1rem', color: OVERRIDE_COLOR }}>
                Building Fund Updates
              </h2>

              <img src={ require('../../../assets/images/news/newsletter-june-2018-church-model.jpg') } alt="Church Model" />

              <div className="article-body">
                <ul style={{ paddingLeft: '0', marginBottom: '0' }}>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong>YTD Raised:</strong> <span>$14,208</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong>Total:</strong> <strong>$324,698</strong>
                  </li>
                </ul>

                <span style={{ fontSize: '1rem' }}>
                  Numbers as of March 17, 2019
                </span>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Building Fund Matching Challenge
              </h2>

              <div className="article-body" style={{ marginBottom: '16px' }}>
                Following the success of our Nativity matching challenge, generous donors have offered up to a $10,000 donation in the form of a matching challenge throughout Great Lent. All donations to our Building Fund during will be doubled!  Please consider a gift for the building up of Christ’s Church during this Lenten Season.
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ marginBottom: '1rem', color: OVERRIDE_COLOR }}>
                Development Committee Design Thinking Session
              </h2>

              <img src={ require('../../../assets/images/news/newsletter-march-2019-matching.jpg') } alt="Brian Cederborg guiding the discussion" />
              <div className="image-caption">
                Brian Cederborg guiding the discussion
              </div>

              <div className="article-body">
                On Saturday February 16<sup>th</sup>, 14 members of our Development Committee met for an all-day “Design Thinking Session.” Leveraging his experience from the corporate world, Development Committee co-chair, Brian Cederborg guided all through an intense day of brainstorming, reflection, planning, and decision making. The group focused on both high level planning as well as specific projects.  Much progress was made toward finalizing a site-plan for our property and identifying next steps in our building program.  The fruits of this work will be finalized over the next couple of months and then communicated to the parish council and parish as a whole. All agreed it was a productive day and left encouraged about our ability to move forward. Many thanks to everyone who participated and contributed to this successful day, as well as to Janese and Anna Cederborg for their hospitality throughout the day.
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

export default newsletterMarch2019;
