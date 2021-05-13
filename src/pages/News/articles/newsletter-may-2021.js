import React from 'react';

import { Link } from 'react-router-dom';

const OVERRIDE_COLOR = 'rgb( 183, 28, 28 )';

const newsletterMay2021 = ({ imagePrefix }) => {
  return (
    <div className="content-container article">
      <div className="header">
        <div className="eyebrows">
          <div className="left">
            Quarterly Newsletter
          </div>
          <div className="right">
            May 2021
          </div>
        </div>

        <h1 style={{ color: OVERRIDE_COLOR }}>The Good News</h1>
        <h2>Elevation of the Holy Cross Orthodox Church, Sacramento</h2>
      </div>

      <div className="body">
        <div className="cols">
          <div className="left">
            <div className="section">
              <h2 className="title" style={{ marginBottom: '1rem', color: OVERRIDE_COLOR }}>
                CHRIST IS RISEN! INDEED HE IS RISEN!
              </h2>

              <img src={ require( '../../../assets/images/news/newsletter-may-2021-readings.jpg' ) } alt="Old Testament Readings, Holy Saturday" />
              <div className="image-caption">
                Old Testament Readings, Holy Saturday
              </div>

              <div className="article-body" style={{ clear: 'all' }}>
                <p>
                  It was a great joy to celebrate Holy Week and Pascha together again this year!  Services of Great and Holy Thursday, Friday and Saturday were held inside the Church, with speakers set up at the doors for outdoor overflow, and Pascha midnight services were held in our outdoor pavilion with well over a hundred in attendance.  Floral decorations beautifully adorned both spaces, and the choir sang angelically, especially Pascha night with the first full choir we have had since the pandemic began.  Following the Joyous celebration of our Lord’s Resurrection, we broke the fast together outdoors on the lawn under the starlight. Sunday afternoon, we had our parish barbeque potluck and Easter Egg hunt once again following Agape Vespers.  A truly joyous day!
                </p>
              </div>

              <img src={ require( '../../../assets/images/news/newsletter-may-2021-paschal-divine-liturgy.jpg' ) } alt="Paschal Divine Liturgy" />
              <div className="image-caption">
                Paschal Divine Liturgy
              </div>

              <img src={ require( '../../../assets/images/news/newsletter-may-2021-blessings.jpg' ) } alt="Blessings of Pascha Baskets" style={{ marginTop: '1rem' }} />
              <div className="image-caption">
                Blessings of Pascha Baskets
              </div>

              <img src={ require( '../../../assets/images/news/newsletter-may-2021-breaking-the-fast.jpg' ) } alt="Breaking the fast together" style={{ marginTop: '1rem' }} />
              <div className="image-caption">
                Breaking the fast together
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Surveying the Land
              </h2>

              <img src={ require( '../../../assets/images/news/newsletter-may-2021-surveying.jpg' ) } alt="Surveying the land" style={{ marginTop: '1rem' }} />
              <div className="image-caption">
                Surveying the land
              </div>

              <div className="article-body">
                <p>
                  The first phase of our building program work has commenced! At our Annual Meeting in January, we approved moving ahead with the first phase of our site development: site improvement work (parking lots, landscaping, required utilities, grading and storm drainage, etc.) to lay the foundation for our new church and hall. To that end, we hired a civil engineer to help us begin this phase that we hope to complete over the next two years. Our engineer Antonio Conti of Conti & Associates has been hard at work surveying our property and preparing studies to firm up our plans moving forward. Over the next few months we expect to finalize our long-term site plan and initiate the permitting process with Sacramento County.
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Building Fund Grows!
              </h2>

              <div className="article-body">
                <p>
                  The St. John Building Finance Committee is pleased to report that we had a strong response to our Great Lent Matching Donation Challenge once again! <strong>We raised over $26,825 this Lent, bringing us to over $550,000 in our Building Fund!</strong> This follows another successful fundraising year in 2020 despite the pandemic. Last year was the third year in a row that generous donors contributed more than $100,000, providing tremendous momentum to move forward. We are well on our way to raising another $100,000 this year. The committee plans to host a Thank You Appreciation Lunch following Divine Liturgy on June 27th. 
                </p>
                <p>
                  We also plan to hold a Parish Feast Day contribution drive (September 14) once again and look forward to the return of the Wine Stroll in October. Further information will be available soon.  We hope to raise enough money over the next two years to be able to complete the first phase of our site improvements without a loan in preparation for building our new church!
                </p>
              </div>
            </div>

            <div className="section">
              <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
                Coffee Hour Returns
              </h2>

              <div className="article-body">
                <p>
                  With the blessing of our Archbishop, we have resumed coffee hour outdoors following Sunday Divine Liturgy. It is a joy to have this opportunity to fellowship together in person again after so much time apart. Volunteers are still needed for many Sunday’s to provide a simple meal like bagels and snacks – please contact Juanita Harless if you can help!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '16px', paddingTop: '32px', borderTop: '1px solid rgba(0, 0, 0, .2)' }}>
          <div className="section">
            <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
              Save the Date
            </h2>

            <div className="article-body">
              <ul style={{ paddingLeft: '16px' }}>
                <li>
                  Baptism of Daniel Smith - May 23rd
                </li>
                <li>
                  Thank You Luncheon Celebration - June 27th
                </li>
                <li>
                  Parish Feast Day and Hierarchical Visit - September 14th
                </li>
                <li>
                  Wine Stroll Fundraiser - October 2nd (Tentative)
                </li>
              </ul>
            </div>
          </div>

          <div className="section" style={{ marginBottom: '8px', paddingBottom: 0, border: 'none' }}>
            <h2 className="title" style={{ color: OVERRIDE_COLOR }}>
              2021 Paschal Message of His Eminence, Archbishop Benjamin
            </h2>

            <div className="article-body" style={{ clear: 'all' }}>
              <p style={{ float: 'right', maxWidth: '50%', marginLeft: '2rem' }}>
                <img src={ require('../../../assets/images/news/newsletter-may-2021-archbishop-benjamin-message.jpg') } alt="2021 Paschal Message of His Eminence, Archbishop Benjamin" />
              </p>

              <h4 style={{ color: OVERRIDE_COLOR }}>To the Reverend Clergy, Monastics and Faithful of the Diocese of the West</h4>

              <p>
                <strong>
                  <em>
                    ..if there is no resurrection of the dead, then Christ is not risen. And if Christ is not risen, then our preaching is empty and your faith also is empty. Yes, and we are found false witnesses of God, because we have testified of God that He raised up Christ, whom He did not raise up — if in fact the dead do not rise. For if the dead do not rise, then Christ is not risen. And if Christ is not risen, your faith is futile; you are still in your sins! Then also those who have fallen asleep in Christ have perished. If in this life only we have hope in Christ, we are of all men most pitiable. But now Christ is risen from the dead, and has become the firstfruits of those who have fallen asleep. For since by man came death, by Man also came the resurrection of the dead. For as in Adam all die, even so in Christ all shall be made alive. (1 Corinthians 15:13-22)
                  </em>
                </strong>
              </p>

              <h4 style={{ color: OVERRIDE_COLOR }}>Dearly Beloved: Christ is Risen! Indeed He is Risen!</h4>

              <p>
                St. Paul, in very simple, logical, plain language states the fundamental struggle that we face daily. If there is no resurrection, then Christ is not risen. If Christ is not risen, then our preaching and faith are “empty.” For more than a year, each of us has been questioned by life itself: Is there a resurrection? It has sometimes been hard to see with the difficulties that many people, and even the Church, have endured. No one expected to still be dealing with the fallout from the pandemic today. But underneath it all is the simple fact that Christ is risen, our faith <strong>is not</strong> futile and “pardon has shown forth from the grave.” (Paschal Sermon of St. John Chrysostom)
              </p>
              <p>
                As we and the Church inch our way back to “normal” (whatever that is), we must be reminded that “resurrection” is not something that we anticipate, or await only in the future. The very first words that our Lord uttered in His public ministry were “Repent, for the Kingdom of Heaven <strong>is at hand</strong>.” To be sure, our hope is that life eternal in the Kingdom is our destination after our own falling asleep. But resurrection in Christ begins for each and every one of us with our deaths in baptism and is experienced in the ongoing life of the Church. That resurrection is to a resurrected and transfigured life here and now. Dying and rising with Him in the waters of baptism is supposed to change the way we live our lives. Walking with Him through His Passion and then Cross allows us to die with Him. There is no other path to resurrection. The various sufferings and “crucifixions” that we have endured, are enduring, and will endure in life purify us and open us to the new life in His Resurrection.
              </p>
              <p>
                More than anything else, the Resurrection of Christ, and our experience of that resurrection, pierce the struggles and difficulties of life with light and hope. To focus on the risen Christ is to know His love. One who knows the resurrected Son of God sees His hand, will, and care in the various moments of life, both difficult and easy. But knowing Him requires discernment. Have we used the past year to move away from Him and the Church or closer? Have we grown accustomed to “watching” Church instead of “being” Church? Have we feared a virus that can kill our bodies more than the demons that can kill our souls? St. Paul does remind us that “in Christ all shall be made alive.” The liberation that comes with knowing the risen Christ can only be experienced by those who recognize they have been imprisoned.
              </p>
              <p>
                As we continue back and forth from Bethany to Jerusalem with our Lord during Passion Week, may our fears and concerns all be assuaged by the knowledge that we will, on that Day without end, come to the Empty Tomb. May the joy, peace and light of the Resurrection fill each of your hearts and souls and carry us through whatever remains of these difficult times. 
              </p>
              <p>
                Christ is Risen! Indeed He is Risen!
              </p>
              <p>
                <strong>Yours in the risen Christ,</strong>
                <br />
                <span style={{ color: OVERRIDE_COLOR }}>† Benjamin</span>
                <br />
                <span style={{ color: OVERRIDE_COLOR }}>Archbishop of San Francisco</span>
              </p>
            </div>
          </div>
        </div>

        <div className="article-footer">
          9000 Jackson Rd, Sacramento, CA 95826 <Link to={ `/` }>holycrosssacramento.org</Link><br/>
          Mailing: 2443 Fair Oaks Blvd #295, Sacramento, CA 95825
        </div>
      </div>
    </div>
  );
}

export default newsletterMay2021;
