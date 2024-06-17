import React, { Component } from 'react';
import './Leadership.css';

import { Helmet } from "react-helmet";

import Profile from '../../components/Profile';

class Leadership extends Component {

  render() {
    return (
      <div className="Page Leadership">
        <Helmet>
          <title>Clergy and Lay Leadership | Elevation of the Holy Cross Sacramento</title>
        </Helmet>

        <div className="content-container">
          <div className="header">
            <h1>Clergy and Lay Leadership</h1>
            <h2>Meet your fellow servants of God</h2>
          </div>

          <div className="body">
            <div className="section-heading">
              <hr />
              <h2 className="section-title">Clergy</h2>
              <hr />
            </div>
            <div className="section" style={{ marginBottom: '128px' }}>
              {
                clergy.map(( c, i ) => <Profile image={ c.image }
                                                imageDir={ c.imageDir }
                                                name={ c.name }
                                                bio={ c.bio }
                                                key={ `clergy-${ i }` } /> )
              }
            </div>

            <div className="section-heading" style={{ paddingTop: '64px' }}>
              <hr />
              <h2 className="section-title">Lay Leadership</h2>
              <hr />
            </div>
            <div className="section lay-leadership">
              <h2>Parish Council</h2>
              <ul>
                <li>Fr. Timothy Winegar, President</li>
                <li>Claudia Dubovik, Vice-President</li>
                <li>Dawn Heywood, Secretary</li>
                <li>Janet Helen Ferrari, Treasurer</li>
                <li>Janese Cederborg</li>
                <li>David Lane</li>
                <li>Gabriel Read</li>
              </ul>

              <div>
                <h4>Choir Director</h4>
                Valerie Simonson
              </div>
              <div style={{ marginTop: '16px' }}>
                <h4>Church School Director</h4>
                Catherine Plefka
              </div>
              <div style={{ marginTop: '16px' }}>
                <h4>Archangel Michael Food Closet Coordinator</h4>
                Ginny Nelson
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const clergy = [
  {
    image: 'archbishop-benjamin.jpg',
    imageDir: 'profile',
    name: 'The Most Reverend Benjamin (Peterson), Archbishop of San Francisco and the West',
    bio: 'Archbishop Benjamin was born in 1954 and was baptized at Holy Virgin Mary Cathedral, Los Angeles, CA on April 27, 1972.  In 1982, he was awarded a Master of Divinity degree and Certificate in Liturgical Music from Saint Vladimir Seminary.  A prolific musician, he served as choirmaster at parishes in Detroit, MI and Los Angeles and as chairman of the Orthodox Church in America’s Department of Liturgical Music.  He was ordained to the Holy Diaconate in 1987 at his home parish, which he served for 10 years as deacon and youth and education director.  The following year he was tonsured to the lesser schema at Saint Tikhon Monastery, South Canaan, PA.  On July 19, 1997, he was ordained to the Holy Priesthood by Bishop Tikhon (Fitzgerald).  In 1999, Igumen Benjamin was transferred to the Diocese of Alaska, where he served as dean of Saint Innocent Cathedral and later as administrative dean of Saint Herman Seminary, Kodiak, AK.  In January 2004, he was reassigned to Holy Virgin Mary Cathedral, Los Angeles, and appointed Chancellor of the Diocese of the West.  Archimandrite Benjamin was elected to the episcopacy in March 2004 as Bishop of Berkeley, Auxiliary for the Diocese of the West, and consecrated at historic Holy Trinity Cathedral on Saturday, May 1, 2004.  Following the retirement of His Grace, Bishop Tikhon of San Francisco, Los Angeles and the West, a diocesan assembly nominated Bishop Benjamin as ruling hierarch on January 31, 2007.  The Holy Synod of Bishops canonically elected him as Bishop of San Francisco and the West in March 2007.  He was elevated to the rank of Archbishop on May 9, 2012.'
  },
  {
    image: 'fr-timothy.jpg',
    imageDir: 'profile',
    name: 'Priest Timothy Winegar, Rector',
    bio: 'Fr. Timothy is a native of the Sacramento area, having grown up in Rancho Cordova and Folsom.  He first encountered the Orthodox Church at Holy Transfiguration parish in New Haven, CT in 2007, and was later baptized here at Holy Cross by Fr. Ian MacKinnon after completing his college studies.  Several years later, Fr. Timothy followed a calling to serve the church and enrolled in seminary.  He graduated from St. Tikhon’s Seminary in May 2016, married his dear wife, Matushka Joni, in July, and was ordained to the diaconate that September at Elevation of the Holy Cross.  He was ordained to the priesthood by Archbishop Benjamin the following year on Sept. 14th, 2017, and appointed rector of Holy Cross upon Fr. Ian’s retirement in May 2018.  Fr. Timothy and Mat. Joni are blessed to have two wonderful children.  In his (minimal) spare time, Fr. Timothy enjoys hiking and the outdoors, good literature, classical guitar music, and language studies.'
  },
  {
    image: 'fr-ian.jpg',
    imageDir: 'profile',
    name: 'Archpriest Ian MackKinnon, former Rector',
    bio: 'Fr. Ian served faithfully as the Rector of Elevation of the Holy Cross for thirty-five years, beginning in 1983.  A graduate of St. Vladimir’s Seminary, Fr. Ian pastored Holy Cross through many years of joys and challenges, and was instrumental in guiding our community to where we are today.  He also served for many years as a dean and later as chancellor of the Diocese of the West.  Fr. Ian retired as Rector of Holy Cross in May 2018, the same year he celebrated forty years of ordained ministry.  Fr. Ian, along with his wife Mat. Nina, remain an important part of the Holy Cross family.'
  },
  {
    image: 'fr-tom.jpg',
    imageDir: 'profile',
    name: 'Archpriest Thomas Renfree, Associate Pastor',
    bio: 'A former Baptist minister, Fr. Tom was a part of the Evangelical Orthodox movement that brought over two thousand evangelical protestants into the Orthodox Church in 1987.  Fr. Tom was the founding pastor of St. Athanasius Orthodox Church in Elk Grove, and later joined Holy Cross as an assistant pastor in 1995.  In his secular work, Fr. Tom has also worked tirelessly as an advocate for effective alcohol and substance abuse prevention and treatment programs and other behavioral health support programs.'
  },
  // {
  //   image: 'fr-andrew.jpg',
  //   imageDir: 'profile',
  //   name: 'Priest Andrew Jacobs',
  //   bio: 'Fr. Andrew currently serves at the pastor of the St. Silouan Mission in the Marysville/Yuba City area while remaining assigned to Holy Cross.  Fr. Andrew and Mat. Elizabeth came to Holy Cross in 2016 after faithfully serving the St. Susanna parish in Sonora for many years.  Fr. Andrew is also serves as the spiritual advisor of the Archangel Michael Food Closet ministry.'
  // },
  {
    image: 'fr-david.jpg',
    imageDir: 'profile',
    name: 'Archpriest David Fontes',
    bio: 'David Fontes was born in California. During his college years he developed a strong personal relationship with God and wrestled with whether he should study to become a priest or choose to become a psychologist. He ended up becoming both an Orthodox priest and a licensed clinical psychologist. He has counseled thousands of state employees through the Employee Assistance Program as well as hundreds of patients in his private practice.  He is also the author of In the Eyes of Your Creator: Truly Valuing Yourself and Others published by Ancient Faith in 2015.  Fr. David is retired and attached to Elevation of the Holy Cross.'
  },
  {
    image: 'fr-stephen.jpg',
    imageDir: 'profile',
    name: 'Archpriest Stephen Tumbas',
    bio: 'Fr. Stephen and his wife Matushka Betsy Tumbas joined our community in 2017 after Fr. Stephen\'s retirement as rector of St. Sava Serbian Orthodox Church in Jackson. Fr. Steve remains a priest of the Serbian Orthodox Diocese of Western America, but has become very much a part of our parish family as well.'
  },
  // {
  //   image: 'dn-seraphim.jpg',
  //   imageDir: 'profile',
  //   name: 'Deacon Seraphim (Ray) Bartneck'
  // },
  {
    image: 'dn-joseph.jpg',
    imageDir: 'profile',
    name: 'Deacon Joseph (Arnel) Salonga'
  }
]

export default Leadership;
