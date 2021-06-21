import React, { Component } from 'react';
import './BuildingProgram.css';

import { Link } from 'react-router-dom';

import { Helmet } from "react-helmet";

import Profile from '../../components/Profile';

class BuildingProgram extends Component {
  
  constructor( props ) {
    super( props );
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
        
          <div className="section">
            <Profile image="us.jpg" 
                     imageDir="buildingproject"
                     name="Who we are and where we're going" 
                     markdown={ `Elevation of the Holy Cross Orthodox Church was founded as a mission parish in 1976 by a small group of committed Orthodox faithful who had the dream of establishing an English-language Orthodox parish in the Sacramento area.\n\nThey dreamed of a parish that would proclaim the Gospel of Jesus Christ and make the fullness of the Orthodox Faith readily accessible to anyone who desires to embrace it.\n\nSince that time, we have grown to become a vibrant community of over one-hundred regular worshippers on Sunday mornings, filling our current worship space and facilities. Some of our parishioners were baptized here as infants, were married in our parish and are now raising their own children here. And nearly half of our congregation are people embraced the Orthodox Christian faith as adults, coming from a variety of different Christian and non-Christian backgrounds.` } />
          </div>

        </div>
      </div>
    )
  }
}

export default BuildingProgram;