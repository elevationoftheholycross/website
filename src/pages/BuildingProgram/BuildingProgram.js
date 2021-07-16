import React, { Component } from 'react';
import './BuildingProgram.css';

import { Link } from 'react-router-dom';

import { Helmet } from "react-helmet";

import Profile from '../../components/Profile';
import AplosModal from '../../components/AplosModal';

class BuildingProgram extends Component {
  
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
      <div className="BuildingProgram">
        <Helmet>
          <title>Building Program | Elevation of the Holy Cross Sacramento</title>
        </Helmet>

        <div className="hero">
          <h1>Building for the Future</h1>
          <h2><em>Therefore by Him let us continually offer the sacrifice of praise to God, that is, the fruit of our lips, giving thanks to His name. <span style={{ color: '#FF6F00' }}>But do not forget to do good and to share, for with such sacrifices God is well pleased.</span></em></h2>
          <h2>Heb. 13: 15-16</h2>
        </div>

        <div className="content">

          <div className="section summary">
            <h3>The Holy Cross Building Program</h3>
            <div>
              Our vision for the future centers around the construction of a new church temple that will express the beauty of our architectural tradition and accommodate more than twice our current membership as we continue to grow and share the faith!
            </div>
          </div>

          <div className="section progress">
            <div className="progress-bar">
              <div className="progress-line" style={{ width: '44%' }} />
              <div style={{ position: 'absolute', top: '40px', right: '0', color: 'rgba( 0, 0, 0, .5 )', fontSize: '16px', textAlign: 'right' }}>Updated monthly</div>
            </div>
            <div className="progress-value">$46,405</div>
            <div className="progress-description">
              <div>raised of $100,000 annual goal</div>
            </div>

            <div className="progress-data">
              <div className="data-item">
                <div className="data-value">43</div>
                <div className="data-label">donors</div>
              </div>
              <div className="data-item">
                <div className="data-value">6</div>
                <div className="data-label">months to go</div>
              </div>
              <div className="data-item">
                <div className="data-value">$555k</div>
                <div className="data-label">
                  <span>so far</span>
                  {/* <span style={{ position: 'absolute', top: '20px', left: '0', color: 'rgba( 0, 0, 0, .5 )', fontSize: '14px', textAlign: 'left' }}>as of 5/31/2021</span> */}
                </div>
              </div>
            </div>

            <button className="donate-button" style={{ display: 'block', width: '100%', marginTop: '32px' }} onClick={ this.toggleAplosModal }>Contribute today</button>
          </div>
        
          <div className="section chapter" style={{ marginTop: '32px' }}>
            <h2 className="chapter-title">Who we are and where we're going</h2>
            <Profile image="us.jpg" 
                     imageDir="buildingproject"
                     altText="Our parishioners and our clergy" 
                     markdown={ `Elevation of the Holy Cross Orthodox Church was founded as a mission parish in 1976 by a small group of committed Orthodox faithful who had the dream of establishing an English-language Orthodox parish in the Sacramento area.\n\nThey dreamed of a parish that would proclaim the Gospel of Jesus Christ and make the fullness of the Orthodox Faith readily accessible to anyone who desires to embrace it.\n\nSince that time, we have grown to become a vibrant community of over one-hundred regular worshippers on Sunday mornings, filling our current worship space and facilities. Some of our parishioners were baptized as infants, married, and now are raising their own children in our parish. Parishioners who embraced Orthodox Christianity as adults make up nearly half of our congregation, coming from a variety of different Christian and non-Christian backgrounds.` }
                     withoutCross />
          </div>

          <div className="section chapter the-details" id="the-details">
            <h2 className="chapter-title">The Details</h2>

            <Profile image={ 'newsletter-march-2019-matching.jpg' }
                     imageDir={ 'news' }
                     altText="The Details"
                     markdown={ `**The complete development of our site** will be a **multi-phase project** designed to meet the long-term needs of our growing community.  Elements of the master site plan include:\n- New Church Building with Fellowship Hall\n- Renovated Education Building\n- Covered and open-air outdoor fellowship spaces\n- Parking adequate to meet our planned growth\n- Expanded facilities for our [Food Closet Ministry](/outreachandcharity)` }
                     withoutCross />
          </div>

          <div className="section chapter the-progress" id="the-progress">
            <h2 className="chapter-title">The Progress</h2>
            <Profile imageSrc="https://i.imgur.com/Eugz49Y.jpg"
                     altText="The Progress"
                     markdown={ `We have raised over $100,000 each year for the past three years, bringing us to **over $500,000 in our building fund**. Our **fundraising goal** over the next two years is to **continue to raise at least $100,000 per year *and* enough to complete the [Phase One](#the-roadmap) work without a loan**.` }
                     withoutCross />
          </div>

          <div className="section chapter the-roadmap" id="the-roadmap">
            <h2 className="chapter-title">The Roadmap</h2>
            <Profile imageSrc="https://i.imgur.com/En9kkTv.jpeg"
                     altText="The Roadmap"
                     markdown={ ROADMAP_MARKDOWN }
                     withoutCross
                     withoutDropCap />
          </div>

          <div className="section chapter coming-soon" id="coming-soon">
            <h2 className="chapter-title">Coming Soon</h2>
            
            <p>
              We are excited to announce that <strong>our architectural renderings will be completed soon</strong>. These tools will illustrate our completed master plan as well as share exciting details of our project. 
            </p>
            <p>
              Stay tuned for these exciting images! 
            </p>
          </div>

          <div className="section chapter celebrate" id="celebrate" style={{ marginTop: '64px' }}>
            <h2 className="chapter-title">Celebrate with Us</h2>
            
            <p>
              Our vision and prayer is to begin constructing our new church by the time we celebrate our 50th Anniversary, 
              in September of 2026. We are thankful to have come this far already and that Phase One work is already underway. 
              We are convinced that God has called us to this holy work and that with 
              Him all things are possible.  We invite all who feel called and inspired to share in this holy work to help 
              contribute to the building up of Christ’s Holy Church in Sacramento. 
            </p>

            <div style={{ width: '100%', padding: '0 16px' }}>
              <button className="donate-button" style={{ display: 'block', margin: '32px auto 0' }} onClick={ this.toggleAplosModal }>Contribute today</button>
            </div>
          </div>

        </div>

        <AplosModal show={ this.state.showAplosModal } toggle={ this.toggleAplosModal } />
      </div>
    )
  }
}

const ROADMAP_MARKDOWN = `
### Phase One (2021-2022)

Our first phase of work – “Phase One” – involves the installation of all **site improvements** (parking lots, landscaping and required utilities, grading and storm drainage, etc.) that are **necessary for our new church and other facilities**.

**This work is now underway**, as we have engaged a civil engineer and landscape architect to first prepare the necessary design documents and permits needed to complete this initial effort.

**With the help of God, we hope to complete Phase One work by the end of 2022.**

### Phase Two (2023-2027)

Our second phase is the most anticipated as it centers on **the construction of our new temple and fellowship hall**. 

The design, as blessed by our Hierarch, Parish Council and general membership, incorporates a daylight Fellowship Hall under our sacred space in a single structure. The Temple features a traditional Byzantine dome, the crown of our design, bearing witness to the beauty of our faith and the Incarnational reality that *God is with us* in the Person of Jesus Christ. 

**We hope to begin construction by our parish’s 50th Anniversary, on Sept. 14th 2026**, following the completion of Phase One and several more years of successful fundraising.

### Further Phases (2027 and beyond)

Once the new church and hall have been constructed, several more phases will be needed to complete the development of our property. These include:

- Conversion of our current chapel into multiple classrooms for [church school, adult Bible study and other ministries](/education).
- Expansion of our [Archangel Michael Food Closet](/outreachandcharity) facilities, currently serving 65 needy families in our community, to double the impact of this ministry.
- Iconography work to beautify the interior of our new church.
`

export default BuildingProgram;