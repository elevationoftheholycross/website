import React from 'react';

import { Link } from 'react-router-dom';

import { Helmet } from "react-helmet";

const OVERRIDE_COLOR = 'rgb( 183, 28, 28 )';

const newsletterDecember2023 = ({ imagePrefix }) => {
  return (
    <div className="content-container article">
      <Helmet>
        <title>The Good News - December 2023 | Elevation of the Holy Cross Sacramento</title>
      </Helmet>

      <div className="header">
        <div className="eyebrows">
          <div className="left">
            Christmas Newsletter
          </div>
          <div className="right">
            December 2023
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
                <em>Christ is born, glorify Him! Christ comes from heaven; come to welcome Him! Christ is on earth; lift up your hearts! Sing to the Lord, O earth! Be exalted and sing with hearty gladness, O ye people, sing His praise for He is glorified!</em>
                <br/>
                (Ode 1 – Canon of the Nativity of Christ)
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <div style={{ float: 'left', maxWidth: '50%', marginRight: '2rem' }}>
                  <img src={ require('../../../assets/images/news/newsletter-december-2023-1.jpg') } alt="Icon of the Nativity" />
                  {/* <div className="image-caption">
                    Feast of the Elevation of the Holy Cross, 9/14/22
                  </div> */}
                </div>

                <p>
                  And thus the Holy Church invites us to rejoice in the birth of our Savior! But, we might ask, how can we rejoice when there is still so much sadness in the world? So many people suffering and hungry, so much war and violence?  Is this not a time for weeping?  Indeed, there is a time to weep and a time to rejoice. But today our weeping turns into joy, because the tragedy of sin in the world is not the end of the story. God accomplishes what was, humanly speaking, impossible. As the Nativity Canon goes on to proclaim: 
                </p>
                <p>
                  <em>The Creator shaped man with His own hands, but when He saw us perishing eternally, He bowed the heavens and came down to earth, and clothed Himself completely in our nature, truly incarnate from a pure and holy Virgin, for He has been glorified!</em>
                </p>
                <p>
                  The Son of God comes to us in the midst of the pain of a fallen world. In the midst of wars, enmity, cruelty and sin. He comes to show us the way back to God, back to paradise, back to a life of peace, innocence and joy.
                </p>
                <p>
                  <em>Thou hast assumed a body of lowly clay, O Christ. By sharing our humble flesh, Thou hast made our race partakers of divinity. By becoming mortal man yet remaining God, Thou hast raised us from death to life. Holy art Thou, O Lord!</em>
                </p>
                <p>
                  If there was ever a day to rejoice, this is it. If there was ever a day to be reconciled, this is it. If there was ever a time to long for peace on earth and goodwill among each other, today is the day. Dear brothers and sisters, it’s my prayer for all of us that in the light of this joyous day, when the Son of God came down to us as a little child to save us, we may receive Him with childlike joy, and greet one another and all those in our lives in a spirit of peace, forgiveness and reconciliation, overcoming through Him all enmity, hatred and resentment.
                </p>
                <p>
                  <em>Glory to God in the Highest and on earth, peace, goodwill among men!</em>
                </p>
              </div>
            </div>

            <div className="section" style={{ marginBottom: '32px', paddingBottom: '16px', borderBottom: '1px solid rgba( 0, 0, 0, .2 )' }}>
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Book Launch!
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <p>
                  On Sunday, September 24th, after Liturgy, we had our long-awaited “launch” for our book of Orthodox conversion stories, <strong>Roads Less Traveled: Journeys to Orthodoxy</strong>.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                  <img src={ require('../../../assets/images/news/newsletter-december-2023-2.jpg') } alt="Book launch 1" style={{ width: 'calc( 50% - .5rem )' }} />
                  <img src={ require('../../../assets/images/news/newsletter-december-2023-3.jpg') } alt="Book launch 2" style={{ width: 'calc( 50% - .5rem )' }} />
                </div>

                <p>
                  Spearheaded by Fr. David Fontes, he enlisted Rick Cervin, Deacon Joseph Salonga, Subdeacon John Gainer, and John Hammond as co-editors. After a few years of collecting, reading, and editing a number of stories — most of which were written by current or former parishioners — we finally found a publisher: Divine Ascent Press (based out of the Monastery of St. John in Manton). Fr. Innocent, the monastery’s abbot, also contributed a chapter. Our “book launch” was well attended by both Orthodox and non-Orthodox people. With many thanks to Mary Photini Sorial, we were able to bring Fr. David (who suffers from Parkinson’s Disease) to Holy Cross for the event. Deacon Joseph  moderated the event, Rick presented a short history of the making of the book,  Fr. Innocent talked about publishing it and the value of such stories, and John Hammond read a selection from his story. A short Q&A session followed.  Afterwards, everyone enjoyed refreshments while getting their copies signed by present contributors. The book is available in our tiny bookstore for $20.00, just in time for Christmas!
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="cols">
          <div className="left">

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Feast Day & Hierarchical Visit
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <p>
                  We had the great joy of welcoming His Eminence Archbishop Benjamin again this year for the Feast of the Elevation of the Holy Cross.  His Eminence is a living example of bearing the Cross with faith and patience as he continues to actively visit parishes and encourage the faithful despite his own health struggles with Parkinson’s disease.  It was also a joy to welcome many visiting clergy and faithful from around our Deanery and several other local jurisdictions. His Eminence also recognized the hard work and dedication of several of parishioners with gramotas – Valerie Simonson for her dedication in directing our choir, Mica Woinarosky for her countless years of faithful service, and Ginny Nelson for directing our food closet ministry. Axios!
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Wine Stroll
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <p>
                  On Saturday, October 21st, around a hundred people gathered under our pavilion to taste a wide variety of local wines during our annual Wine Stroll fundraising event. The beautiful fall evening was marked by pleasant and enthusiastic conversations over delicious hors d’oeurves and fine wines. Abundant raffle prizes were awarded as well as a silent auction trip to Mexico. Glory to God, this event raised $6,300 for our building program!
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Church School and Youth Events
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                  <img src={ require('../../../assets/images/news/newsletter-december-2023-4.jpg') } alt="Church School" style={{ width: 'calc( 50% - .5rem )' }} />
                  <img src={ require('../../../assets/images/news/newsletter-december-2023-5.jpg') } alt="Youth Events" style={{ width: 'calc( 50% - .5rem )' }} />
                </div>

                <p>
                  Just as schools are back in session so too is Holy Cross’s Church School! This year, the two younger classes are learning more about the Divine Liturgy and worship, while our teen class is beginning a study of Church history. Over the summer, many of our young folks attended the week-long St. Eugene Summer Camp; we also had several events like a game night and a swim day. We also had our first family movie night under the stars in October. In December, our young folks gathered after Liturgy for a Day of Service, where they prepared care packages for the homeless, made Christmas cards and gifts for food closet clients and wrapped Christmas presents for our St. Xenia Project distribution, among other things.
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Archangel Michael Food Closet
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <p>
                  Our food closet continues to serve many local families in need; we have seen a sharp increase in the number of walk-in families this year, in addition to our regulars. We continue to weekly distribute groceries to thirty three client families a week and up to twenty five additional walk-in families! By God’s grace, were able to distribute back-to-school supplies, Thanksgiving meals and Christmas meats once again in addition to the regular weekly distribution.
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Building Program Updates
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <div style={{ float: 'left', maxWidth: '50%', marginRight: '2rem' }}>
                  <img src={ require('../../../assets/images/news/newsletter-december-2023-6.jpg') } alt="New Church building" />
                  {/* <div className="image-caption">
                    Feast of the Elevation of the Holy Cross, 9/14/22
                  </div> */}
                </div>

                <p>
                  Our site plans continue to be under review by Sacramento County, as we work to gain approvals to move forward with our first phase of work. So far, we’ve resubmitted our plans three times to the County, each time with greater detail and minor modifications to ensure we meet all the various code requirements. It’s moving more slowly than we anticipated, but it is moving and we trust that it’s all in God’s time. Please pray that God helps us to get these approvals and that we can start work soon!
                </p>
                <p>
                  We’re pleased to announce once again a <strong>$10,000 matching donation challenge for our building program during the Nativity Season</strong>. Please consider contributing to our building program before Christmas, and your donation will be doubled!
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Memory Eternal!
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <div style={{ float: 'left', maxWidth: '50%', marginRight: '2rem' }}>
                  <img src={ require('../../../assets/images/news/newsletter-december-2023-7.jpg') } alt="Our beloved Mary Lu Kost" />
                  {/* <div className="image-caption">
                    Feast of the Elevation of the Holy Cross, 9/14/22
                  </div> */}
                </div>

                <p>
                  Our beloved Mary Lu Kost fell asleep in the Lord on Sunday morning, Nov. 11th.  Mary Lu and her husband John were active members of Holy Cross from our earliest days, and will always be remembered for kindness, generosity and strength of character. She blessed us by writing a history of the early years of our parish called, Their Light so Shone: A Story of Faith and Love, that is a treasure to us and a testament to the faith and dedication of those who came before us and who will never be forgotten. May her memory be eternal!
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Nativity Services
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <p>
                  <strong>Royal Hours</strong>, Friday 12/22 at 9:00 AM
                </p>
                <p>
                  <strong>Great Vespers</strong>, Saturday 12/23 at 5:30 PM
                </p>
                <p>
                  <strong>Divine Liturgy</strong>, Sunday 12/24 at 9:00 AM
                </p>
                <p>
                  <strong>Nativity Vigil</strong>, Sunday 12/24 at 4:00 PM
                </p>
                <p>
                  <strong>Divine Liturgy</strong>, Monday 12/25 at 9:00 AM
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

export default newsletterDecember2023;
