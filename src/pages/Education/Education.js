import React, { Component } from 'react';
import './Education.css';

import { Helmet } from "react-helmet";

import Profile from '../../components/Profile';

class Education extends Component {

  render() {
    return (
      <div className="Page Education">
        <Helmet>
          <title>Educational Ministries | Elevation of the Holy Cross Sacramento</title>
        </Helmet>

        <div className="content-container">
          <div className="header">
            <h1>Educational Ministries</h1>
            <h2 style={{ color: '#b71c1c' }}>"O how I have loved Thy law, O Lord! The whole day long it is my meditation."</h2>
            <h2>Psalm 118/119:97</h2>
          </div>

          <div className="body">
            {/* <div className="section-heading">
              <hr />
              <h2 className="section-title">Archangel Michael Food Closet</h2>
              <hr />
            </div> */}
            <div className="section" style={{ marginBottom: '128px' }}>
              {
                profiles.map(( p, i ) => <Profile image={ p.image }
                                                  imageDir={ p.imageDir }
                                                  name={ p.name }
                                                  markdown={ p.markdown }
                                                  bio={ p.bio }
                                                  key={ `profile-${ i }` } /> )
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const profiles = [
  {
    image: 'church-school.jpg',
    imageDir: 'ministries',
    name: 'Elevation of the Holy Cross Church School',
    markdown: [
      `During the academic year, our Church School meets regularly immediately following Divine Liturgy.  We currently have three levels, where elementary through high school age youth have the opportunity to learn more about their Orthodox faith, the Holy Scriptures, Church History and living the Christian life.  We are blessed with an abundance of children and our current facilities present limitations on space; we hope through our building program to be able to expand classroom meeting space and the number of grade levels in the future.  Periodically, youth retreats, service projects, plays and social events are also held.`
      ,`If you have questions, please contact our Church School director Catherine Plefka: [cplefka@gmail.com](mailto:cplefka@gmail.com).`
      ,`Our youth are a wonderful and vibrant part of our community. Many also assist with bell ringing, altar serving, choir singing, and food closet work.  In addition, we have occasional youth retreats, and participate in the annual Diocesan summer camp – St. Eugene Camp held each July in Oakhurst, CA: [https://www.steugenecamp.org/](https://www.steugenecamp.org/)`
    ].join( '\n\n' )
  },
  { 
    image: 'adult-education.jpg',
    imageDir: 'ministries',
    name: 'Sunday Adult Education Class',
    markdown: [
      `Toward the end of Coffee Hour each Sunday, we have a regular adult education class that meets in our church.  This class typically follows a book-study format, and frequently includes Bible studies using Orthodox commentaries as a guide, writings of Church Fathers, and other edifying books about topics such as the Divine Liturgy and the Lives of Saints.  This class is currently co-led by Prof. Rick Cervin and Fr. Tom Renfree.`
    ].join( '\n\n' )
  },
  { 
    image: 'orthodox-faith-and-life.jpg',
    imageDir: 'ministries',
    name: 'Orthodox Faith and Life Class',
    markdown: [
      `We also have an **Orthodox Faith and Life Class** that meets regularly on Wednesday evenings following a Vespers service, which serves both as catechetical class for adults who are interested in learning about the Orthodox Church or preparing to enter the Church, as well as for Orthodox Christians who would like to learn more about their faith.  Discussion topics include Orthodox dogma and beliefs, the Sacraments and Liturgical life of the Church, Church History, as well as prayer and the spiritual life.  It is currently led by Fr. Timothy.`
    ].join( '\n\n' )
  },
  { 
    image: 'ocf.jpg',
    imageDir: 'ministries',
    name: 'UC Davis Orthodox Christian Fellowship',
    markdown: [
      `Our parish has maintained a close partnership with the ***UC Davis Orthodox Christian Fellowship (OCF)*** since its inception almost three decades ago. This ministry provides an on-campus presence for college students to stay connected with and grow in their faith during these formative years.  Many people have also first encountered the Orthodox Church through the UC Davis OCF over the years.`
      ,`Regular meetings are typically held on the first and third Tuesdays of each month during the academic year at the Belfry (216 A Street, Davis).  We begin with a prayer service, followed by a shared meal and discussion led by one of the local clergy.  Social meetings are held on the second and forth Tuesday’s, which may include meeting together for coffee, ice cream, bowling, or other activities.  Occasionally, pilgrimages or other activities may be planned.`
      ,`The UC Davis OCF has as its heavenly patrons the Most Holy Theotokos and Ever-Virgin Mary and the Greatmartyr Anastasia.   Fr. Timothy currently serves as the spiritual advisor, and shares in this ministry with Fr. Ian MacKinnon (also of Holy Cross) and Fr. John Christianson of St. Timothy Antiochian Orthodox Church in Fairfield.  For more information, please contact: [frtimothywinegar@gmail.com](mailto:frtimothywinegar@gmail.com)`
    ].join( '\n\n' )
  },
] 

export default Education;
