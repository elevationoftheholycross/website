import React from 'react';

import pdf from '../../../assets/images/news/wine-stroll-flyer-2021.pdf';
import { Helmet } from "react-helmet";
import { Document, Page } from 'react-pdf';
import { Link } from 'react-router-dom';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${ pdfjs.version }/pdf.worker.js`;

const wineStroll2021 = ({ imagePrefix }) => {
  return (
    <div className="content-container article">
      <Helmet>
        <title>Wine Stroll 2021 | Elevation of the Holy Cross Sacramento</title>
      </Helmet>

      <div className="header">
        <div className="eyebrows">
          <div className="left">
            Wine Tasting Fundraiser Event
          </div>
          <div className="right">
            2021
          </div>
        </div>
      </div>

      <div className="body">
        <div style={{ width: '100%', textAlign: 'center' }}>
          <a href="https://www.aplos.com/aws/events/wine_stroll" target="_blank" rel="noopener noreferrer">
            Buy tickets to Wine Stroll 2021
          </a>
        </div>

        <div className="main-article">
          <Document
            file={ pdf }
            onLoadSuccess={() => {}}>
            <Page pageNumber={ 1 } />
          </Document>
        </div>

        <div style={{ width: '100%', textAlign: 'center' }}>
          <a href="https://www.aplos.com/aws/events/wine_stroll" target="_blank" rel="noopener noreferrer">
            Buy tickets to Wine Stroll 2021
          </a>
        </div>
      </div>
    </div>
  );
}

export default wineStroll2021;
