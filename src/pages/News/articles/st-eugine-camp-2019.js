import React from 'react';

import { Document, Page } from 'react-pdf';
import { Link } from 'react-router-dom';

import { Helmet } from "react-helmet";

const stEugeneCamp2019 = () => {
  return (
    <div className="content-container article">
      <Helmet>
        <title>St. Eugene Summer Camp 2019 | Elevation of the Holy Cross Sacramento</title>
      </Helmet>

      <div className="header">
        <div className="eyebrows">
          <div className="left">
            St. Eugene Summer Camp
          </div>
          <div className="right">
            2019
          </div>
        </div>

        <h1>St. Eugene's Summer Camp</h1>
        <h2>Registration is now open!</h2>
      </div>

      <div className="body">
        <div className="section">
          <h2 className="title">
            Information
          </h2>

          <div className="article-body" style={{ clear: 'all' }}>
            <p>
              <strong>When:</strong> July 17, 2019
              <br/>
              <strong>Where:</strong> Timber Mountain Summer Camp
              <br/>
              <strong>Cost:</strong> $440 per Camper <strong style={{ color: '#009688' }}>*</strong>
            </p>
            <p>
              Located at <a href="https://goo.gl/maps/fy4xPzTQfhN2" target="_blank" rel="noreferrer noopener">48478 Mill Canyon Rd, Oakhurst, CA 93644</a>, Timber Mountain Summer Camp is nestled within Sugar Pine Christian Camps in Oakhurst, California (near Yosemite).
            </p>
            <p>
              <strong style={{ color: '#009688' }}>*</strong> Sibling discounts as well as a limited number of need-based scholarships.
            </p>

            <h3>
              Registration and more details at <a href="https://www.steugenecamp.org/" target="_blank" rel="noreferrer noopener">https://www.steugenecamp.org/</a>.
            </h3>

            <p>
              <strong>Registration deadline:</strong> June 9, 2019
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default stEugeneCamp2019;
