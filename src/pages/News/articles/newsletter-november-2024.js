import React from 'react';

import pdf from '../../../assets/docs/HolyCrossNewsletterDecember2024.pdf';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${ pdfjs.version }/pdf.worker.js`;



const newsletterNovember2024 = ({ imagePrefix }) => {
  return (
    <div className="content-container article pdf">
      <Helmet>
          <title>The Good News - November 2024 | Elevation of the Holy Cross Sacramento</title>
        </Helmet>

      {/* <div className="header">
        <div className="eyebrows">
          <div className="left">
            Quarterly Newsletter
          </div>
          <div className="right">
            April 2024
          </div>
        </div>
      </div> */}

      <div className="body">
        <div className="main-article">
          <Document
            file={ pdf }
            onLoadSuccess={() => {}}>
            {/* onLoadError={ e => { console.log('loadError', e) }}
            onSourceError={ e => { console.log('sourceError', e) }}> */}
            <Page pageNumber={ 1 } />
            <Page pageNumber={ 2 } />
            <Page pageNumber={ 3 } />
          </Document>
        </div>
      </div>
    </div>
  );
}

export default newsletterNovember2024;
