import React, { Component } from 'react';
import './Orthodoxy.css';

class Orthodoxy extends Component {

  render() {
    return (
      <div className="Page Blog Orthodoxy">
        <div className="content-container">
          <div className="header">
            <h1>What is Orthodox Christianity?</h1>
            <h2>A brief exploration of Orthodoxy and its history</h2>
          </div>

          <div className="body">
            <div className="section">
              <h3>The Orthodox Christian Faith</h3>
              <p>
                To be faithful in fulfilling the commandment of Christ to "Go into all the world and make disciples of all nations, baptizing them in the name of the Father, and of the Son and of the Holy Spirit..."
              </p>
            </div>

            <div className="section">
              <h3>The meaning of the word "Orthodox"</h3>
              <p>
                The word "Orthodox" is a compound word made of two Greek words: "orthos" and "doxa." "Orthos" means straight or true, a reference to the fact that the Orthodox Church has maintained and preserved the truth of the Christian faith free from error and distortion. The second word, "doxa", means glory or worship. Together, the word "Orthodox" means literally "the true faith."
              </p>
            </div>

            <div className="section">
              <a href="https://oca.org/orthodoxy" target="_blank" rel="noopener noreferrer">
                <h3>The Orthodox Church in America</h3>
              </a>
              <p>
                A full list of resources on the Orthodox Faith and the history of the Church.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Orthodoxy;
