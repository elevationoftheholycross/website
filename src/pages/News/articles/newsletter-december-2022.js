import React from 'react';

import { Link } from 'react-router-dom';

import { Helmet } from "react-helmet";

const OVERRIDE_COLOR = 'rgb( 183, 28, 28 )';

const newsletterDecember2022 = ({ imagePrefix }) => {
  return (
    <div className="content-container article">
      <Helmet>
        <title>The Good News - December 2022 | Elevation of the Holy Cross Sacramento</title>
      </Helmet>

      <div className="header">
        <div className="eyebrows">
          <div className="left">
            Quarterly Newsletter
          </div>
          <div className="right">
            December 2022
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
                Rector's Reflection
              </h2>
              <h2 className="subtitle" style={{ fontSize: '1.2rem' }}>
                O Give thanks unto the Lord for He is Good, for His mercy endures forever! 
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <div style={{ float: 'left', maxWidth: '50%', marginRight: '2rem' }}>
                  <img src={ require('../../../assets/images/news/newsletter-december-2022-1.jpg') } alt="Feast of the Elevation of the Holy Cross, 9/14/22" />
                  <div className="image-caption">
                    Feast of the Elevation of the Holy Cross, 9/14/22
                  </div>
                </div>

                <p>
                  Many of the Gospel readings, hymns and saints we remember during the Nativity Season highlight the themes of <strong>gratitude</strong> and <strong>generosity</strong>. We encounter both negative examples like the miserly man who wanted to build bigger barns, as well as positive examples like the leper who received healing and came back to thank Jesus. And of course, saints like St. Nicholas whose generous heart has become legendary. Ultimately, the Church places all of this before us to remind us that <em>every good and perfect gift is from above</em> (Js. 1:17). And that the most perfect, most precious gift of all is the gift of our Lord Himself: the little Child born in a cave in Bethlehem and lain in a humble manger, our Savior Jesus Christ. 
                </p>
                <p>
                  When we reflect on this, we realize that the only proper, noble and truly Christian response to God's great gifts to us is to respond with thanksgiving and generosity. <em>What shall I render to the Lord, for all His benefits toward me?</em> asks the Psalmist (Ps. 116). Yes, it is a blessing to receive, but to give is divine. In both giving thanks and giving alms, we become like God, the giver of all good things.
                </p>
                <p>
                  We're living today at a time when many people are experiencing this Christmas in poor and humble circumstances like the Holy Family did so long ago, whether they be far from home as refugees or afflicted by poverty at home. Let us this Nativity Season give thanks to God for all of His great gifts to us - the gift of our Lord Jesus Christ, His Church, the Holy Sacraments, our families, our homes, our food and material possessions - and in giving thanks, let us open our hearts a little more to help those who are afflicted, cold, lonely or far from home. Just as the Shepherds and Magi came to visit the Newborn Lord and offer him gifts, we too can offer gifts to Him by sharing something of our blessings with those less fortunate than ourselves. <em>And whatever you do in word or deed, do all in the name of the Lord Jesus, giving thanks to God the Father through Him.</em> (Col. 3:17)
                </p>
              </div>
            </div>

            <div className="section" style={{ marginBottom: '32px', paddingBottom: '16px', borderBottom: '1px solid rgba( 0, 0, 0, .2 )' }}>
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Building Program Progress
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <img src={ require('../../../assets/images/news/newsletter-december-2022-2.jpg') } alt="Submitting our use and building permit applications to Sacramento CountyChurch Render Front" />
                <div className="image-caption">
                  Submitting our use and building permit applications to Sacramento County
                </div>

                <div style={{ float: 'right', maxWidth: '50%', marginTop: '1rem', marginLeft: '2rem' }}>
                  <img src={ require('../../../assets/images/news/newsletter-december-2022-3.jpg') } alt="Building Program work" />
                  <img src={ require('../../../assets/images/news/newsletter-december-2022-4.jpg') } alt="More Building Program work" style={{ marginTop: '1rem', marginBottom: '1rem' }} />
                  <img src={ require('../../../assets/images/news/newsletter-december-2022-5.jpg') } alt="The new play structure" />
                </div>

                <p>
                  Thanks to your faithful and generous support, our building program is moving forward! One exciting and much-anticipated (by our children) development came early this summer with the arrival of a new play structure! A huge thank you to all who donated to make this possible and to all who helped with the installation! It’s been quite the hit with our youngest parishioners.
                </p>
                <p>
                  We also completed the preliminary studies and drawings for our site master plan and new church, and we submitted our permit applications to Sacramento County for approval to move forward. Over the next few months we’ll be working with them make sure our plans meet all state and county requirements, and we’ll also conduct some community outreach. God willing, we hope to complete the site improvements or “phase 1” of our work next year. 
                </p>
                <p>
                  A legacy gift from <strong>Laychak family allowed</strong> us to offer a $30,000 matching donation challenge during Great Lent, which was met with a phenomenal response and helped us raise over $70,000 during that time! Joe and Sophia Laychak were two of our founding members who worked tirelessly for the dream of establishing an English-speaking Orthodox mission parish in Sacramento, and they have continued to bless our parish even after departing this life to be with their Lord. Their faithfulness, dedication and generosity will not be forgotten. Memory Eternal!  
                </p>
                <p>
                  We’re also pleased to announce once again this season a <strong>Nativity Matching Donation Challenge</strong> of up to $10,000. <strong>All donations to our Building Program from now through Christmas will be doubled</strong>…let’s keep up the great progress toward seeing our new church become a reality and meet our 2022 fundraising goal of $125,00!
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="cols">
          <div className="left">

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Fall Events
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <img src={ require('../../../assets/images/news/newsletter-december-2022-6.jpg') } alt="Holy Cross at Christmas Around the World" />
                <div className="image-caption">
                  Holy Cross at Christmas Around the World
                </div>

                <p>
                  This fall, our two main fundraisers for our building fund— The <strong>Wine Stroll</strong> and <strong>Christmas Around the World</strong>— were met with success! Featuring nine different wineries, the Wine Stroll drew roughly 100 people to our covered pavilion for an evening of wine tasting, hors d'oeuvre, raffle prizes and good company. Over $7,000 was raised in one evening! A few weeks later, the parish participated in the annual Christmas Around the World, held at Annunciation Greek Orthodox Church. This event brought in over $4,000 through the sale of a variety of delicious baked goods and book store items. The combined total for both events was $12,000, an astounding amount! Glory to God who continues to bless these events and move us forward to the construction of our new temple!
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Nativity Retreat
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <img src={ require('../../../assets/images/news/newsletter-december-2022-7.jpg') } alt="Nativity Retreat" />

                <p>
                  The year we were able restart a tradition of holding edifying and educational retreats at Holy Cross. For our Nativity Retreat, it was a joy to welcome a recently ordained son of our parish – Deacon Josef Candelario. Dcn. Josef had spent several years studying theology and living in Thessaloniki, Greece, and during that time began translating the works of St. Nektarios of Aegina into English. His talk highlighted the role St. Nektarios has played in his own life as well as aspects of the saint’s life and spirituality that were not so obvious in the excellent recent film Man of God. Especially noteworthy were seeing examples of the Saint’s artistic side and calligraphy, his hymnographic work, his powerful preaching, and deep spirituality.  Dcn. Josef shared that one theme St. Nektarios frequently returned to in his writings was that of freedom – we all have a God-given freedom because we are made in the image of God, and the proper use of our free-will is essential to salvation in synergy or cooperation with God. The world offers a false-freedom that enslaves us to sin, but Jesus Christ offers us a true freedom, a freedom from sin, death, and slavery to the passions. Dcn. Josef and his wife Effy will be moving to St. Vladimir’s Seminary in January for some further studies and in preparation for further ministry in the Church.
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Youth Activities
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <img src={ require('../../../assets/images/news/newsletter-december-2022-8.jpg') } alt="Acting out lives of the saints" />
                <div className="image-caption">
                  Acting out lives of the saints
                </div>

                <p>
                  Church school is back in full swing, and the Sunday before St. Nicholas Day our youth also participated in a “Day of Service” with activities centered around giving and generosity. These included preparing care packages for the homeless, and making Christmas cards and gifts for our Food Closet clients. How wonderful they have a chance to experience the truth of our Lord’s words that it is more blessed to give than to receive! Our diocesan St. Eugene Summer Youth Camp was also a big success again this past summer, being held for the first time at the Armenian Camp in Dunlap.
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Parish Growth
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <div style={{ display: 'flex', flexDireciton: 'row', alignItems: 'stretch', justifyContent: 'stretch' }}>
                  <img src={ require('../../../assets/images/news/newsletter-december-2022-9.jpg') } alt="Parish growth" style={{ maxWidth: '50%', marginRight: '1rem' }} />
                  <img src={ require('../../../assets/images/news/newsletter-december-2022-10.jpg') } alt="Baptism" style={{ maxWidth: 'calc( 50% - 1rem )' }} />
                </div>
                <div className="image-caption">
                  Blessed is he whose transgression is forgiven, whose sin is covered (Ps. 32:1)
                </div>

                <p>
                  This past year we’ve had the joy of celebrating seven infant baptisms, receiving three adults into the Church, and celebrating the weddings of two couples in our parish. Glory to God for all things!
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Charitable Ministries
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <p>
                  Our Archangel Michael Food Closet, which operates every Tuesday morning, continues to serve over sixty regular client families a month. We’ve also seen an uptick in the number of walk-ins each week during the past few months, sometimes as many as ten additional families. We were able to distribute turkeys and other Thanksgiving items once again to all of our client families. The success of this ministry would not be possible without the close partnership of our sister parish, St. Athanasius Antiochian Orthodox Church, our dear Fr. Andrew Jacobs from the St. Silouan Mission in Marysville continues to serve faithfully as a spiritual adviser. What a joy is to come together to serve each week!
                </p>
                <p>
                  We’re also thankful to have connected with several new group homes locally to continue our St. Xenia Project ministry after the group home we served for many years in North Sacramento closed down. We plan to distribute Christmas gifts and sing Christmas carols this year to residents of three to four group homes in the Rosemont and Rancho Cordova areas.
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Nativity Services
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <p>
                  <strong>Royal Hours</strong>, Friday 12/23 at 9:00 AM
                </p>
                <p>
                  <strong>Vigil</strong>, Saturday 12/24 at 4:00 PM
                </p>
                <p>
                  <strong>Divine Liturgy</strong>, Sunday 12/25 at 9:00 AM
                </p>
                <p>
                  <strong>Christ is born! Glorify Him!</strong>
                </p>
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

export default newsletterDecember2022;
