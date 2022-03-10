import React from 'react';

import { Link } from 'react-router-dom';

import { Helmet } from "react-helmet";

const OVERRIDE_COLOR = 'rgb( 48, 33, 113 )';

const newsletterMarch2022 = ({ imagePrefix }) => {
  return (
    <div className="content-container article">
      <Helmet>
        <title>The Good News - March 2022 | Elevation of the Holy Cross Sacramento</title>
      </Helmet>

      <div className="header">
        <div className="eyebrows">
          <div className="left">
            Quarterly Newsletter
          </div>
          <div className="right">
            March 2022
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
                On the Commencement of Great Lent
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <div style={{ float: 'left', maxWidth: '50%', marginRight: '2rem' }}>
                  <img src={ require('../../../assets/images/news/newsletter-march-2022-1.jpg') } alt="On the Commencement of Great Lent" />
                </div>

                <p>
                  Filled by Christ with every blessing, let us therefore keep festival, beloved, without being distressed at the beneficial labor it takes, nor considering burdensome the effort required to fast, but embracing the contest with cheerful mind, rejoicing in hope, as Paul says, and exulting henceforth in the good things we await. But before all else, let us hold to love for each other; let the bitter demon of slander be driven out; let jealousy be banished from our souls; let malice and deceit take flight; let falsehood be absent, and that most chief of evils, perjury. Let us not swear at all: rather, let our “yes,” be yes, as the Savior says, and our “no,” no. Let us visit those who struggle with that cruelest of beasts, I mean, those living in poverty. Let us refresh the orphan and the widow. Let us offer respite with the appropriate remedies to those mistreated. Let us be found kindly and compassionate to prisoners. <strong>For it is then, yes then, that we will achieve a true and perfectly pure fast for Christ</strong>. (Festal Letter 5)
                </p>
              </div>
            </div>

            <div className="section" style={{ marginBottom: '32px', paddingBottom: '16px', borderBottom: '1px solid rgba( 0, 0, 0, .2 )' }}>
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                New Church Renderings!
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <img src={ require('../../../assets/images/news/newsletter-march-2022-3.png') } alt="Church Render Front" />

                <div style={{ float: 'right', maxWidth: '50%', marginTop: '1rem', marginLeft: '2rem' }}>
                  <img src={ require('../../../assets/images/news/newsletter-march-2022-4.png') } alt="Church Render Rear" />
                </div>

                <p>
                  At our Annual Meeting on Jan. 30th, our Architect John Della Monica unveiled color renderings of our new Church and Hall, as well as our site plan! How exciting to see our dreams in color! Initial planning work is wrapping up, and we hope to begin the permitting process with Sacramento County this Spring. Once that’s done, we plan to begin seeking bids for this first phase of site work needed in preparation for our new Church!
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="cols">
          <div className="left">

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                American River Blessing on Theophany
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <img src={ require('../../../assets/images/news/newsletter-march-2022-2.jpg') } alt="American River Blessings on Theophany" />
                <div className="image-caption">
                  Great Blessings of the Waters at the American River
                </div>

                <p style={{ marginBottom: 0, color: OVERRIDE_COLOR }}>
                  <strong>When Thou O Lord wast Baptized...</strong>
                </p>

                <p>
                  <em>The wilderness and the wasteland shall be glad for them, and the desert shall rejoice and blossom as the rose; it shall blossom abundantly and rejoice, even with joy and singing. (Is. 35:1)</em> Continuing our annual tradition, faithful from Holy Cross gathered at the American River to celebrate the Great Blessing of the Waters as part of our celebration of the Theophany of our Lord. In commemorating our Lord Jesus Christ’s baptism in the Jordan River, we recognize that the Sinless One was not in need of baptism, but that through baptism, Jesus purified and renewed the waters, and in effect, renewing all of creation. His Baptism made our rebirth through Christian Baptism possible. And we know our Lord’s care and concern extends to all of creation. In blessing the waters of the American River on Theophany, we pray for the Lord’s blessing and sanctification not only of the American River and the Sacramento region, but as the waters continue on their journey to the Pacific Ocean, may they bless the Delta and Bay Area, and ultimately the whole ocean and our entire planet.
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Many Years!
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <p>
                  Many years to Janet Ferrari and Dirk Olson who celebrated their wedding in January, as well as to the newly-born Anysia Marie Bridges (parents Melissa & Caleb), newly-born Nina Elizabeth Lineback (parents Michael and Sumi) and newly-born Ana Mariela Fontes (parents Paul and Gabby). May the Lord bless and keep them all!
                </p>
              </div>
            </div>

          </div>

          <div className="right">

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Laychak Memorial Matching Challenge!
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <p style={{ marginBottom: 0 }}>
                  This Lent, thanks to the <strong>generosity of our founding members Joe and Sophia Laychak</strong>, who remembered Holy Cross in a significant bequest, we're able to offer an increased matching donation challenge for our Building Fund – <strong>all donations during Lent up to $30,000 will be matched!</strong> If we can make this match, it will be a huge step toward completing our Phase 1 site improvements. Please consider making an offering toward the building of our new church and expanding our parish mission in honor of Joe and Sophia, who desired to inspire hearts of generosity and service to God in all of us that they themselves so exemplified!
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Memory Eternal Bennie Brock!
              </h2>

              <div className="article-body" style={{ clear: 'all' }}>
                <img src={ require('../../../assets/images/news/newsletter-march-2022-bennie-brock.jpg') } alt="Our dear brother Bennie Brock" />
                <p>
                  Our dear brother Bennie Brock fell asleep in the Lord on Jan. 30, 2022, at home surrounded by his loving family at the age of 80. Bennie was born in Fountain Hill, Arkansas on Nov. 3, 1941, and moved to California at the age of 15. He met his beloved wife Londa “Candy” Brock in San Francisco, and they later settled in the Sacramento area. Bennie was a loving father and a hard-working family man, raising with Candy their children: Bennie, Derik, Wendelin, Brendelin, Nancie, Nicole, Matthew, and Sarah. Bennie was one of the earliest members of Elevation of the Holy Cross, serving the church in many ways, including as Warden and in caring for the grounds. Bennie often said, “I just like to make people smile,” something he did until the end of his life. Bennie’s life exemplified the love of Christ, and now he has departed to be with his Lord Jesus Christ, and beloved wife Candy. May his memory be eternal!
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

export default newsletterMarch2022;
