import React from 'react';

import pdf from '../../../assets/images/news/wine-stroll-flyer-2019.pdf';
import { Helmet } from "react-helmet";
import { Document, Page } from 'react-pdf';
import { Link } from 'react-router-dom';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${ pdfjs.version }/pdf.worker.js`;

const wineStroll2019 = ({ imagePrefix }) => {
  return (
    <div className="content-container article">
      <Helmet>
        <title>Wine Stroll 2019 | Elevation of the Holy Cross Sacramento</title>
      </Helmet>

      <div className="header">
        <div className="eyebrows">
          <div className="left">
            Wine Tasting Fundraiser Event
          </div>
          <div className="right">
            2019
          </div>
        </div>
      </div>

      <div className="body">
        <div className="main-article">
          <Document
            file={ pdf }
            onLoadSuccess={() => {}}>
            <Page pageNumber={ 1 } />
          </Document>
        </div>
      </div>
    </div>
  );
}

export default wineStroll2019;
