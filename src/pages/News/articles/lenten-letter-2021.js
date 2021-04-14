import React from 'react';

import { Link } from 'react-router-dom';

const OVERRIDE_COLOR = 'rgb(48, 33, 113)';

const lentenLetter2021 = ({ imagePrefix }) => {
  return (
    <div className="content-container article">
      <div className="header">
        <div className="eyebrows">
          <div className="left">
            Elevation of the Holy Cross Orthodox Church
          </div>
          <div className="right">
            March 28, 2021 - Sunday of St. Gregory Palamas
          </div>
        </div>

        <h1 style={{ color: OVERRIDE_COLOR }}>Lenten Letter</h1>
        <h2>A message from Fr. Timothy</h2>
      </div>

      <div className="body">
        <div className="section" style={{ marginBottom: '8px', paddingBottom: 0, border: 'none' }}>
          <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
            Dear Brothers and Sisters in Christ,
          </h2>

          <div className="article-body" style={{ clear: 'all' }}>
            <p style={{ float: 'right', maxWidth: '50%', marginLeft: '2rem' }}>
              <img src={ require('../../../assets/images/news/church-domes.jpg') } style={{ width: 200 }} alt="Church domes" />
            </p>

            <p>
              As we enter the Great Fast this year and look toward the Cross and Resurrection of our Lord Jesus Christ, we have a feeling of optimism and hope. We have all been through a lot this past year. Without exaggeration, it was one of the most difficult many of us have faced in our lives – a pandemic, lock-downs and stay at home orders, and the related economic and psychological impacts of these events. And yet, our faith was not shaken; our love of God, through the furnace of trials, is purified and burns all the more brightly:
            </p>

            <p>
              <em style={{ color: OVERRIDE_COLOR }}>Therefore, having been justified by faith, we have peace with God through our Lord Jesus Christ, through whom also we have access by faith into this grace in which we stand, and rejoice in hope of the glory of God. And not only that, but we also glory in tribulations, knowing that tribulation produces perseverance; and perseverance, character; and character, hope. Now hope does not disappoint, because the love of God has been poured out in our hearts by the Holy Spirit who was given to us.</em>
              <br />
              <span style={{ fontSize: '.9rem', fontWeight: 'bold' }}>(Rom. 5:1-5)</span>
            </p>

            <p>
              I have witnessed our faithful parishioners and friends stepping up to meet the challenges of this past year with faith and courage. <strong>The life of worship and service has continued and continues, albeit in new circumstances.</strong> We have now been worshipping outdoors <strong>without attendance restrictions</strong> for the better part of the past year, with faithful setting up and taking down church each week like we have not done since our first days as a mission parish. And we are blessed once again to be celebrating the <strong>weekday Lenten services inside</strong> our church.
            </p>

            <p>
              We have also utilized live-streaming and digital media to make our services and classes accessible to those at home in a way we never have before, and have offered many opportunities for those unable to attend the Divine Liturgy in person to still participate in the Holy Sacraments.
            </p>

            <p>
              We have distributed thousands of dollars to those who have struggled financially this past year through our <strong>Covid Relief fund</strong>, and our <Link to="/outreachandcharity" target="_blank" rel="noopener noreferrer"><strong>Archangel Michael Food Closet</strong></Link> never ceased to serve those in need for a single week during the pandemic. We are very thankful to God that we did not lose a single parishioner to the coronavirus, though some of us have tragically lost family members or friends.
            </p>

            <p>
              Most striking of all, <strong>we look with great optimism to the future!</strong> Having recently celebrated <strong>six births and baptisms, with several more on the way</strong>, our families and parish are growing.
            </p>

            <p>
              Our <strong>Building Program</strong> has progressed in spite of all the hardships.
              <ul>
                <li><strong>Over $100,000 raised last year, bringing us to over $520,000 currently in our Building Fund</strong>;</li>
                <li>Our Development Committee <strong>further refined our site plan and the new church design</strong>, sharing the work with the parish at our Annual Meeting last January;</li>
                <li><strong>We hired a civil engineer</strong> – Conti & Associates – <strong>to help us complete the first phase of our site improvement work over the next two years</strong>;</li>
                <li><strong>We set a goal to be building our new church on or by our 50th Anniversary, to be celebrated in September of 2026</strong></li>
              </ul>
            </p>

            <p>
              <strong>That all this could happen in such a difficult year I believe is nothing other than the work of the Holy Spirit.</strong>
            </p>

            <p>
              <strong>Will you help us continue the momentum as we look to the future?</strong>
            </p>

            <p>
              We once again have a <strong>Great Lent Matching Donation challenge up to $10,000, affording us a great opportunity</strong> to progress towards our 2021 goal of raising another $100,000 for our Building Fund. Wouldn’t it be great to be able to complete the next phase of site improvements in preparation for our new church without a loan? With your help, we can do it!
            </p>

            <p>
              As the situation with the pandemic continues to improve, I would also like to invite all of those who have been away to come back again as soon as you are comfortable, or at least to reach out to me about receiving the Sacraments during these holy days.
            </p>

            <p>
              <strong>I have great faith in God that we will come through this time spiritually stronger and with greater faith in our Lord, who has conquered death and shown us the way to heaven through His life- giving Cross.</strong>
            </p>

            <p>
              May He be with you all during this Lenten Season and always!
            </p>

            <p>
              Sincerely yours in the Lord,
              <br/>
              <span style={{ fontFamily: `'Playfair Display', serif` }}>Fr. Timothy Winegar</span>
              <br/>
              Rector, Elevation of the Holy Cross
            </p>
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

export default lentenLetter2021;
