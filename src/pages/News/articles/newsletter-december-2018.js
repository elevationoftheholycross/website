import React from 'react';

import { Link } from 'react-router-dom';

import { Helmet } from "react-helmet";

const newsletterDecember2018 = ({ imagePrefix }) => {
  return (
    <div className="content-container article">
      <Helmet>
        <title>The Good News - December 2018 | Elevation of the Holy Cross Sacramento</title>
      </Helmet>

      <div className="header">
        <div className="eyebrows">
          <div className="left">
            Quarterly Newsletter
          </div>
          <div className="right">
            December 2018
          </div>
        </div>

        <h1 style={{ color: '#b71c1c' }}>The Good News</h1>
        <h2>Elevation of the Holy Cross Orthodox Church, Sacramento</h2>
      </div>

      <div className="body">
        <div className="cols">
          <div className="left">
            <div className="section">
              <h2 className="title" style={{ color: '#b71c1c' }}>
                Nativity Reflection
              </h2>
              <div className="author">
                by Father Timothy
              </div>

              <div className="article-body" style={{ clear: 'all' }}>
                <p>
                  The birth of our Lord Jesus Christ is an event of tremendous joy.
                  <strong style={{ color: '#b71c1c' }}>&nbsp;Lo I bring you good tidings of great joy, which will be to all people.&nbsp;</strong>
                  We can’t explain why we feel a quiet joy each year as Christmas approaches,
                  even in the midst of the hustle and bustle. And yet it’s there.
                  It’s not just that we begin to hear familiar songs, that we anticipate
                  the exchange of gifts, and that we recall fond memories from childhood.
                </p>
                <p>
                  This joy, I believe, comes from an awareness that something extraordinary
                  happened in the little town of Bethlehem, something that changed
                  the course of history, and something that changes the course of
                  my own life.<strong style={{ color: '#b71c1c' }}>&nbsp;For there
                  is born to you this day in the city of David a Savior, who is Christ the Lord.&nbsp;</strong>
                </p>
                <p>
                  No matter where we are in our lives, no matter how far off we
                  may have wandered like the lost sheep, Jesus comes to us each
                  year as a newborn Child. In simplicity, in humility, in poverty,
                  He comes to us. And as our Good Shepherd even at so tender an
                  age, He calls us to return to His fold. With Him, we are family.
                  We are not alone, and with Him we will never spend a Christmas
                  alone.  Seeing the poverty of His birth, we realize that with
                  Him we have more than we could ever need.
                </p>
                <p>
                  What gift can we possibly offer to the Newborn Lord this Christmas?
                  What better gift than to share the joy of His coming with those
                  around us. To be patient with those closest with us. And to forgive
                  past wrongs and hurts that we’ve received. Just as the Son of
                  God came to us as a newborn Babe that we might be reconciled to
                  God, so let us, as bearers of this joy, strive to be reconciled
                  with those who we have become estranged from, as much as it lies
                  in our power.
                </p>
                <p style={{ color: '#b71c1c' }}>
                  <strong>
                    Heaven and earth are united today, for Christ is born.  Today has God come upon earth, and man gone up to heaven.
                    <br />
                    Today for man’s sake He who is by nature invisible 	is seen in the flesh.
                    <br />
                    Therefore let us give glory and cry aloud to Him: Glory to God in the Highest, and on earth peace,  goodwill among men!
                    <br />
                    -from the Vigil of Nativity
                  </strong>
                </p>
              </div>
            </div>

            <div className="section">
              <img src={ require('../../../assets/images/news/newsletter-december-2018-fundraiser.jpg') }
                   alt="Volunteers at the Christmas Around the World fundraiser" />
              <div className="image-caption">
                Volunteers at the Christmas Around the World fundraiser
              </div>

              <h2 className="title" style={{ color: '#b71c1c' }}>
                Fundraiser Recap 2018
              </h2>
              <div className="author">
                by Melissa Dubovik
              </div>

              <div className="article-body">
                <p>
                  The Holy Cross Events Committee took a new approach to fundraising
                  in 2018. We took a break from the larger OctoberFEAST fall festival
                  and decided to focus on holding smaller, quarterly events. These
                  events were successful in both turnout as well as funds brought
                  in for the building program. We look forward to holding these
                  quarterly fundraisers in the years to come!
                </p>
                <p>
                  Summer saw our first annual Brewfest and BBQ with beer tasting
                  and food to order. We brought in $1,180. The Wine Stroll returned
                  the last weekend of September where we tasted local area wines
                  along with appetizers. This event not only had wonderful attendance,
                  but brought in $3,480! In November, Holy Cross joined 12 other
                  acramento area churches at the Annunciation Greek Orthodox Hall
                  and hosted a booth with delicious baked goods and hot food. Although
                  attendance overall was very low this year, we still managed to
                  bring in $1,220 in profit!
                </p>
                <p>
                  We have not yet decided on our first quarter fundraiser for 2019,
                  but stay tuned. These 3 fundraisers together raised $5,880 toward
                  our new church building program in 2018! Thank you all for your
                  continued support.
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: '#b71c1c' }}>
                Baptisms: Many Years!
              </h2>

              <div className="article-body">
                <ul style={{ paddingLeft: '16px' }}>
                  <li>Marie Lorraine Winegar</li>
                  <li>Isaiah Theodore Simonson</li>
                  <li>Emma Vasilisa MacKinnon</li>
                  <li>Elizabeth Brown</li>
                  <li>Esther Rose Duke</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="section">
              <h3 className="eyebrow">
                Nativity & Theophany Services
              </h3>

              <div className="article-body" style={{ marginBottom: '32px' }}>
                <span style={{ color: '#b71c1c' }}>December 24</span>
                <ul className="crossed-list">
                  <li>9:00 a.m. Royal Hours</li>
                  <li>4:30 p.m. Special Visitor</li>
                  <li>5:00 p.m. Vigil</li>
                </ul>

                <span>
                  <span style={{ color: '#b71c1c' }}>December 25</span>
                  <span> — </span>
                  <em>Nativity of our Lord Jesus Christ</em>
                </span>
                <ul className="crossed-list">
                  <li>9:00 a.m. Divine Liturgy</li>
                </ul>

                <span>
                  <span style={{ color: '#b71c1c' }}>December 31</span>
                  <span> — </span>
                  <em>Circumcision of our Lord & St. Basil</em>
                </span>
                <ul className="crossed-list">
                  <li>6:00 p.m. Great Vespers and Molebin for the New Year</li>
                </ul>

                <span>
                  <span style={{ color: '#b71c1c' }}>January 5</span>
                  <span> — </span>
                  <em>Eve of Theophany</em>
                </span>
                <ul className="crossed-list">
                  <li>9:00 a.m. Divine Liturgy & Blessing of the Waters in Church</li>
                  <li>5:30 p.m. Vigil of Theophany</li>
                </ul>

                <span>
                  <span style={{ color: '#b71c1c' }}>January 6</span>
                  <span> — </span>
                  <em>Great Feast of Theophany</em>
                </span>
                <ul className="crossed-list">
                  <li>9:00 a.m. Baptism of Joshua Gray</li>
                  <li>9:30 a.m. Divine Liturgy</li>
                  <li>1:00 p.m. Great Blessing of the Waters at the American River</li>
                </ul>

                <img src={ require('../../../assets/images/news/newsletter-december-2018-icon.jpg') } alt="Icon" />
              </div>
            </div>

            <div className="section" style={{ paddingBottom: 0 }}>
              <h2 className="title" style={{ color: '#b71c1c' }}>
                Oh Lord Save Thy People!
              </h2>

              <div className="article-body" style={{ marginBottom: '32px' }}>
                On September 14, we welcomed our Archbishop Benjamin for the joyous
                celebration of our parish feast day. We were also blessed to welcome
                numerous clergy from around Northern California (and one from
                as far away Fiji!) who made the journey to celebrate this occasion
                with us. In his homily this year, His Eminence highlighted how
                Christ’s work on the Cross renews all Creation, and how our call
                to bear the Cross includes a concern for all of God’s Creation.
                Thanks to the hard work of many people, we enjoyed a beautifully
                decorated chapel and pavilion, complete with elegant flower arrangements,
                and two delicious meals together.
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ marginBottom: '1rem', color: '#b71c1c' }}>
                Building Fund Updates
              </h2>

              <img src={ require('../../../assets/images/news/newsletter-june-2018-church-model.jpg') } alt="Church Model" />

              <div className="article-body">
                <ul style={{ paddingLeft: '0', marginBottom: '0' }}>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong>YTD Raised:</strong> <span>$37,443</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong>Total:</strong> <strong>$307,000</strong>
                  </li>
                </ul>

                <span style={{ fontSize: '1rem' }}>
                  Numbers as of December 11, 2018
                </span>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: '#b71c1c' }}>
                Thanksgiving at the Archangel Michael Food Closet
              </h2>

              <div className="article-body" style={{ marginBottom: '32px' }}>
                Each year at Thanksgiving and Christmas, the Archangel Michael Food
                closet ensures that those we serve are able to share in the holiday
                cheer.  Together with St. Athanasius Church, we provided our Food
                Closet families with turkeys and hams for Thanksgiving and Christmas.
                Other holiday favorites—such as mashed potatoes and cranberry sauce—were
                also collected and distributed in addition to the usual staples.
              </div>

              <img src={ require('../../../assets/images/news/newsletter-december-2018-food-closet.jpg') } alt="Archangel Michael Food Closet" />
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

export default newsletterDecember2018;
