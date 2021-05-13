import React from 'react';

import { Link } from 'react-router-dom';

import { Helmet } from "react-helmet";

const newsletterJune2018 = ({ imagePrefix }) => {
  return (
    <div className="content-container article">
      <Helmet>
        <title>The Good News - June 2018 | Elevation of the Holy Cross Sacramento</title>
      </Helmet>

      <div className="header">
        <div className="eyebrows">
          <div className="left">
            Quarterly Newsletter
          </div>
          <div className="right">
            June 2018
          </div>
        </div>

        <h1>The Good News</h1>
        <h2>Elevation of the Holy Cross Orthodox Church, Sacramento</h2>
      </div>

      <div className="body">
        <div className="main-article">
          <img src={ require('../../../assets/images/news/newsletter-june-2018-miter.jpg') }
               alt="His Eminence Archbishop Benjamin blessing the Mitred Archpriest Ian" />
          <div className="image-caption">
            His Eminence Archbishop Benjamin blessing the Mitred Archpriest Ian
          </div>

          <div className="section" style={{ marginTop: '16px' }}>
            <h2 className="title">
              Many years, Fr. Ian and Mat. Nina!
            </h2>
            <div className="author">
              by Claudia Dubovik
            </div>

            <div className="article-body">
              <p>
                What a joy it was to celebrate Fr. Ian's retirement on
                Sunday, May 13th! The day started with a
                Hierarchical Liturgy celebrated by both His Eminence,
                Archbishop Benjamin and His Grace, Bishop Daniel.
                During the Liturgy, Archbishop Benjamin, on behalf of
                the Holy Synod of Bishops, presented Fr. Ian with the
                highest award a priest may receive, the Mitre! This
                marked his 40 years of priestly ministry, including
                many faithful years of service as the chancellor of
                the Diocese of the West and rector at Holy Cross.
              </p>
              <p>
                Later that afternoon, a retirement banquet attended
                by over 300 people was held at the Annunciation
                Greek Orthodox Church Hall. At the conclusion of the
                banquet, Fr. Ian and Mat. Nina were presented with
                the gift of a trip to Rome, Italy.
              </p>
            </div>
          </div>
        </div>

        <div className="cols">
          <div className="left">
            <div className="section">
              <h2 className="title">
                Rector's Reflections
              </h2>
              <div className="author">
                by Father Timothy
              </div>

              <div className="article-body">
                <p>
                  <span className="scripture">
                    You shall receive power when the Holy Spirit has come upon
                    you; and you shall be witnesses to me in Jerusalem, and in all
                    Judea, and Samaria, and even to the ends of the earth (Acts
                    1:8)
                  </span>
                </p>
                <p>
                  During this season of Pentecost, we reflect upon our
                  calling as Orthodox Christians to be witnesses of Christ’s love
                  – witnesses of His Death and Resurrection on our behalf –
                  right here where we find ourselves: in Sacramento, in all
                  California, and even to the ends of the earth. This apostolic
                  mission finds its foundation in our celebration of the Holy
                  Eucharist together as the Body of Christ each Sunday and
                  Feast Day, and extends outward from there into every one of
                  our encounters and relationships throughout the week.
                </p>
                <p className="quote">
                  “I sent you to reap that for
                  which you have not labored;
                  others have labored, and you
                  have entered into their labors.“
                  <br/>
                  John 4:38
                </p>
                <p>
                  Dear friends, it is an exciting time to be at Holy Cross. We are
                  blessed to have a vibrant, welcoming, and growing
                  community that fills our worship space most Sundays. We lift
                  up our hearts unto God, and rejoice as our children make a
                  joyful noise unto the Lord. As I embark upon this new
                  ministry as Rector of Holy Cross, I am keenly aware of our
                  Lord’s words to His apostles: <span className="scripture">I sent you to reap that for which
                  you have not labored; others have labored, and you have
                  entered into their labors (Jn. 4:38)</span>. We are the beneficiaries of
                  the prayer, sacrifice and dedication of those who came before
                  us, especially of our beloved pastor Fr. Ian and Matushka
                  Nina, along with all those labored and served in this holy
                  place. We pray that through God’s grace, we may continue to
                  build upon the strong foundation in Christ that is here; as one
                  plants, another waters, yet it is God who gives the increase.
                  May the Lord strengthen and multiply His flock here in
                  Sacramento!
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title">
                Weddings, Birthdays, Baptisms, and more: Many Years!
              </h2>

              <div className="article-body">
                <ul style={{ paddingLeft: '16px' }}>
                  <li>
                    <strong>Marriages</strong>
                    <ul>
                      <li>
                        Chris &amp; Sarah Blaine
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Births &amp; Baptisms</strong>
                    <ul>
                      <li>Rowan Basil Thompson</li>
                      <li>Zenia Cole</li>
                      <li>Finnian Haskins</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Reception into the Catechumenate</strong>
                    <ul>
                      <li>
                        Joshua Gray
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="section">
              <h2 className="title">
                Archangel Michael Food Closet
              </h2>

              <div className="article-body">
                <h3><span style={{ borderBottom: '1px solid rgba(0, 0, 0, .2)' }}>Current Donation Needs</span></h3>

                <ul style={{ paddingLeft: '16px', textAlign: 'left' }}>
                  <li>
                    Canned pork & beans or baked beans
                  </li>
                  <li>
                    Cooking oil
                  </li>
                  <li>
                    Pudding and/or Jell-O
                  </li>
                  <li>
                    Sugar &amp; Flour (2-10lb bags)
                  </li>
                  <li>
                    Eggs &amp; egg cartons (please
                    take eggs directly to the
                    fridge in the food closet)
                  </li>
                </ul>

                <h3>You can help struggling families by:</h3>

                <ul style={{ paddingLeft: '16px', textAlign: 'left' }}>
                  <li>
                    Donating food items.
                  </li>
                  <li>
                    Registering at <a href="https://smile.amazon.com" target="_blank" rel="noopener noreferrer">amazon.com</a> to deliver food directly to
                    the church.
                  </li>
                  <li>
                    Volunteering Tuesday
                    mornings at the Food
                    Closet.
                  </li>
                  <li>
                    Supporting fundraisers
                    (purchase a parish
                    cookbook!)
                  </li>
                  <li>
                    Writing a check to Holy
                    Cross, memo: Food Closet.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="section">
              <h3 className="eyebrow">
                Recent Events
              </h3>
              <h2 className="title">
                New Coffee System
              </h2>

              <div className="article-body" style={{ marginBottom: '32px' }}>
                Thanks to a generous donor, a new system for
                our coffee hour brewing has appeared!
                Connoisseurs will notice the refined taste in
                our new brew made with fresh-ground
                gourmet coffee and filtered water.
              </div>

              <h2 className="title">
                Cool Days Ahead
              </h2>

              <div className="article-body">
                Not long before Holy Week, our church’s
                original HVAC system gave out. To the Glory
                of God we were able to replace the system for
                $16,590 out of the parish’s reserve funds, and
                we will now be able to enjoy cool summer
                services for many years to come.
              </div>
            </div>

            <div className="section">
              <h3 className="eyebrow">
                Looking Ahead
              </h3>
              <h2 className="title">
                Brewfest &amp; BBQ Fundraiser
              </h2>

              <div className="article-body" style={{ marginBottom: '32px' }}>
                Join us Saturday June 30, from 5 to 8 p.m. at
                our outdoor pavilion! Taste from a few local
                breweries and order some delicious BBQ! Beer
                tasting is 5 tastings for $10 and the grill will
                be open for a la carte items including sliders,
                tri tip, black bean burgers and more! Tickets
                can be purchased in advance or at the event.
              </div>

              <h2 className="title" style={{ marginBottom: '1rem' }}>
                Parish Summer Hike!
              </h2>

              <img src={ require('../../../assets/images/news/newsletter-june-2018-hike.jpg') } alt="Caples Lake" />

              <div className="article-body">
                Join us for hiking, a picnic, and Vespers near
                Caples Lake on Saturday July 21st. Meet at the
                group site by 9 a.m., enjoy time together, and
                wrap up the day with Vespers outdoors at 4
                p.m. before returning to Sacramento. Caples
                Lake is approximately two hours from the
                church. Exact meeting place TBD.
                <p>
                  Questions? Contact Dn. Joseph: <a href="mailto:josephsalonga@hotmail.com">josephsalonga@hotmail.com</a>
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ marginBottom: '1rem' }}>
                Building Fund Updates
              </h2>

              <img src={ require('../../../assets/images/news/newsletter-june-2018-church-model.jpg') } alt="Church Model" />

              <div className="article-body">
                <ul style={{ paddingLeft: '0', marginBottom: '0' }}>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong>YTD Raised:</strong> <span>$10,912.31</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0, 0, 0, .2)' }}>
                    <strong>Number of pledges:</strong> <span>11</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong>Total:</strong> <strong>$278,007</strong>
                  </li>
                </ul>

                <span style={{ fontSize: '1rem' }}>
                  Numbers as of June 1, 2018
                </span>
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

export default newsletterJune2018;
