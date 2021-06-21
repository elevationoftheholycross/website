import React, { Component } from 'react';
import './BuildingProgram.css';

import { Link } from 'react-router-dom';

import { Helmet } from "react-helmet";

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
          Hello world
        </div>
      </div>
    )
  }
}

export default BuildingProgram;