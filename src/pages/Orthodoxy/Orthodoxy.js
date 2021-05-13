import React, { Component } from 'react';
import './Orthodoxy.css';

import { Helmet } from "react-helmet";

class Orthodoxy extends Component {

  render() {
    return (
      <div className="Page Blog Orthodoxy">
        <Helmet>
          <title>What is the Orthodox Church? | Elevation of the Holy Cross Sacramento</title>
        </Helmet>

        <div className="content-container">
          <div className="header">
            <h1>What is the Orthodox Church?</h1>
            <h2>I believe in One, Holy Catholic, and Apostolic Church...</h2>
          </div>

          <div className="body">
            <div className="section">
              <img src={ require( '../../assets/images/about/icon-of-christ.jpg' ) } alt="Icon of Christ" style={{ maxHeight: '420px' }} />
              <p>
                We believe and confess that the Orthodox Church is the One Holy Catholic and Apostolic Church established by our Lord Jesus Christ.
              </p>
              <p>
                The Church is <strong>One</strong> because it is the Body of Christ, and the head of the Church is the One Lord Jesus Christ.
              </p>
              <p>
                The Church is <strong>Holy</strong> because Jesus, as her head, is holy. We members of the body are called to become holy – though many of us fall far short of this calling. Yet it is in the Church that we are sanctified and become holy through repentance and the grace of God. The Church is the spiritual hospital in which we are healed of our spiritual illnesses, cleansed of our sins, and in which we work toward holiness and sanctification. The Church is holy because it is not a human institution, but rather a divine-human organism: the Body of Christ.
              </p>
              <p>
                And the Church is <strong>Catholic</strong>, meaning that it is both universal and complete. The word “Catholic” is not used here in the sense of “Roman Catholic Church,” which has been tragically separated from the Orthodox Church for last millennium. We believe that the Church was Catholic even on the day of Pentecost, and that it remains so to this day. We believe that the Church is the place where God calls all people to find salvation and to come into a living communion with Him, and we believe that in the Church nothing is lacking.
              </p>
              <p>
                Jesus Christ, and no person on earth, is the head of the Church. We believe that the Church in her fullness is infallible, but any single member, no matter what rank or ordination they may possess, can err.
              </p>
            </div>

            <div className="section">
              <h3>Continuity throughout the Centuries</h3>
              <p>
                And we also believe that the Holy Spirit guides the Church throughout the ages. In fact, Holy Tradition is not limited to practices handed down from the time of the apostles, but is the life of the Holy Spirit in the Church.
              </p>
              <p>
                We believe that the truth faith was never lost and in need of recovery or reformation; Jesus Christ founded His Church and promised that not even the gates of hell would prevail against it (Mt. 16:18)
              </p>
              <p>
                The continuity of the Church throughout the ages is expressed both through <strong>Apostolic Succession</strong> and through a <strong>continuity of belief</strong>. All bishops in the Orthodox Church are ordained through the laying on of hands in a direct lineage of bishops that traces back to the apostles. Apostolic Succession is thus an essential feature of the Church, though it alone does not guarantee a preservation of the true faith since even bishops can at times fall into heresy or schism. The steadfast preservation of the apostolic faith is therefore also a feature of the Church.
              </p>
              <img src={ require( '../../assets/images/about/orthodoxy-2.jpg' ) } alt="Clergy" />
              <p>
                The church is hierarchical in structure, and a <strong>bishop</strong> presides over each local diocese. Bishops ordain priests to assist in their ministry of pastoring the flock of Christ in a local parish community, preaching the Word of God, and performing the Sacraments. They also ordain deacons to assist in serving at the holy altar as well as in other ministries such as bringing communion to the sick.
              </p>
              <p>
                Bishops meet together regularly in a local synod to address matters of Church life that extend beyond the diocese. When major dogmatic questions arise, bishops from around the world may gather together in council. Throughout history, the <strong>Ecumenical Councils</strong>, guided by the Holy Spirit, have authoritatively expressed the mind of the Church. The Ecumenical Councils represent the highest dogmatic authority within the Orthodox Church.
              </p>
            </div>

            <div className="section">
              <h3>The Orthodox Church in America</h3>
              <p>
                The Orthodox Church in America began as a missionary diocese of the Russian Orthodox Church in the late 18th Century in Alaska, and has continued to grow over time. Luminaries such as Saint Herman and Saint Innocent brought the Orthodox Christian faith to the native Alaskan peoples in their own languages. After the Russian Revolution in 1918, the Russian Metropolia in North America effectively became self-governing, as it was cut off from communication with the church in Russia. In 1970, it was granted autocephalous status by the Russian Orthodox Church, and has continued its missionary life of witnessing to the Orthodox Christian faith in North America to this day as the Orthodox Church in America (OCA).
              </p>
              <img src={ require( '../../assets/images/about/orthodoxy-3.jpg' ) } alt="Procession" />
              <p>
                Our parish is part of the OCA Diocese of the West, with our Archbishop Benjamin residing in San Francisco. We maintain communion with all other canonical Orthodox churches in the United States and throughout the world:&nbsp;
                <a href="http://www.assemblyofbishops.org/about/canonical-jurisdictions" rel="noopener noreferrer">Canonical Jurisdictions</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Orthodoxy;
