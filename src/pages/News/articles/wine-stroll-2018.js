import React from 'react';

import pdf from '../../../assets/images/news/wine-stroll-flyer-2018.pdf';
import { Document, Page } from 'react-pdf';
import { Link } from 'react-router-dom';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${ pdfjs.version }/pdf.worker.js`;

const wineStroll2018 = ({ imagePrefix }) => {
  return (
    <div className="content-container article">
      <div className="header">
        <div className="eyebrows">
          <div className="left">
            Wine Tasting Fundraiser Event
          </div>
          <div className="right">
            2018
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

export default wineStroll2018;
