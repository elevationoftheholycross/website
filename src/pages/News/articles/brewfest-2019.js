import React from 'react';

import pdf from '../../../assets/images/news/brewfest-flyer-2019.pdf';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${ pdfjs.version }/pdf.worker.js`;



const brewfest2019 = ({ imagePrefix }) => {
  return (
    <div className="content-container article">
      <Helmet>
          <title>Brewfest 2019 | Elevation of the Holy Cross Sacramento</title>
        </Helmet>

      <div className="header">
        <div className="eyebrows">
          <div className="left">
            Brewfest & BBQ
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
            {/* onLoadError={ e => { console.log('loadError', e) }}
            onSourceError={ e => { console.log('sourceError', e) }}> */}
            <Page pageNumber={ 1 } />
          </Document>
        </div>
      </div>
    </div>
  );
}

export default brewfest2019;
