import React, { Component } from 'react';
import './Belief.css';

class Belief extends Component {

  render() {
    return (
      <div className="Page Blog Orthodoxy">
        <div className="content-container">
          <div className="header">
            <h1>We We Believe</h1>
            <h2>The Apostolic Faith</h2>
          </div>

          <div className="body">
            <div className="section">
              <p>
                When the Apostle Peter was asked by our Lord Jesus Christ, <em>Who do you say that I am</em>, Peter confessed: <strong>You are the Christ, the Son of the Living God</strong> (Mt. 16:16).
              </p>
              <p>
                This is the apostolic confession in Jesus Christ as Lord, God and Savior, which remains at the heart of the Orthodox faith.
              </p>
              <p>
                And it was upon the rock of this confession that our Lord established His Church.
              </p>
              <p>
                As Orthodox Christians, we continue to hold fast to the apostolic faith, and we worship the One God in Trinity: Father, Son and Holy Spirit.
              </p>
            </div>

            <div className="section">
              <h3>The Ecumenical Councils</h3>
              <p>
                The apostolic faith is the same yesterday, today, and forever, just as our Lord Jesus Christ is the same (Heb. 13:8).
              </p>
              <p>
                Yet over the centuries, theological controversies necessitated a clearer articulation of it.
              </p>
              <p>
                The core beliefs of the Orthodox Church are expressed in the Nicene Creed, which was formulated at the First and Second Ecumenical Councils (in the years 325 and 381). This is the same statement of faith that we still recite at every Divine Liturgy:
              </p>
              <em>
                <p>
                  <strong>I believe in one God, the Father Almighty, Maker of heaven and earth, and of all things visible and invisible.</strong>
                </p>
                <p>
                  <strong>And in one Lord Jesus Christ, the Son of God, the only-begotten, begotten of the Father before all ages. Light of Light; true God of true God; begotten, not made; of one essence with the Father, by whom all things were made; who for us men and for our salvation came down from heaven, and was incarnate of the Holy Spirit and the Virgin Mary, and became man. And He was crucified for us under Pontius Pilate, and suffered, and was buried. And the third day He rose again, according to the Scriptures; and ascended into heaven, and sits at the right hand of the Father; and He shall come again with glory to judge the living and the dead; whose Kingdom shall have no end.</strong>
                </p>
                <p>
                  <strong>And [I believe] in the Holy Spirit, the Lord, the Giver of Life, who proceeds from the Father; who with the Father and the Son together is worshipped and glorified; who spoke by the prophets.</strong>
                </p>
                <p>
                  <strong>In one Holy, Catholic, and Apostolic Church.</strong>
                </p>
                <p>
                  <strong>I acknowledge one baptism for the remission of sins.</strong>
                </p>
                <p>
                  <strong>I look for the resurrection of the dead, and the life of the world to come. Amen.</strong>
                </p>
              </em>
              <img src={ require( '../../assets/images/about/belief-1.jpg' ) } alt="Nicene Creed" style={{ maxHeight: '420px' }} />
              <p>
                The next four Ecumenical Councils (in the years 431, 451, 553 and 680-681) further articulated our faith in One Lord Jesus Christ, the Son of God, who is both fully God and fully human.  The Seventh Ecumenical Council (787), which took place during the iconoclast controversy, upheld that the traditional practice of depicting images Jesus Christ and the saints in churches and honoring them does not constitute idolatry, and explained that there is a great difference between veneration (i.e., reverence or honor), and the worship due to God alone.
              </p>
            </div>

            <div className="section">
              <h3>The Sacramental Life and the Gospel Commandments</h3>
              <p>
                We likewise recognize Seven Sacraments established by our Lord Jesus Christ through which the grace of God acts for our salvation. In the Sacraments, we experience forgiveness of our sins, healing of our spiritual illnesses, and sanctification through God’s grace. The Sacraments include Baptism, Chrismation, the Eucharist (Holy Communion), Confession (Penance), Ordination (Priesthood), Marriage, and Holy Unction (Anointing of the sick).
              </p>
              <img src={ require( '../../assets/images/about/belief-2.jpg' ) } alt="Worship" />
              <p>
                We also believe that we are called to fulfill the commandments of the New Testament as Jesus Christ has instructed us.
              </p>
              <p>
                Chief among these are the commandments: <em>You shall love the Lord your God with all your heart, with all your soul, with all your mind, and with all your strength, and You shall love your neighbor as yourself</em> (Mk. 12:29).
              </p>
              <p>
                Jesus also gave us a New Commandment: <em>A new commandment I give to you, that you love one another, as I have loved you</em> (Jn. 13:34). The newness of this commandment lies in the depths of the love that Jesus Christ revealed to us in His death on the Cross: <em>Greater love has no one than this, than to lay down one’s life for his friends</em> (Jn. 15:13).
              </p>
              <p>
                The Gospel Commandments are found throughout the New Testament, and include the call to feed the hungry, give drink to the thirsty, to receive the stranger, clothe the naked, and to visit the sick and imprisoned (Mt. 28:31-46).
              </p>
              <p>
                We are called to repentance, and to strive for holiness of life in word, deed and thought (Mt. 4:17, 5:17-48). Through repenting of our sins, and with the help of God’s grace, we strive to acquire the virtues and become more and more like Christ. And we are called to grow in Christ-like love to such an extent that we even pray for and love our enemies (Mt. 5:44).
              </p>
              <p>
                Much of our Lord’s moral teachings can be summed up in the following commandment: <em>whatever you want men to do to you, do also to them, for this is the Law and the Prophets</em> (Mt. 7:12).
              </p>
              <p>
                And finally, we are called to be faithful in fulfilling the missionary commandment of our Lord: <em>Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all things that I have commanded you</em> (Mt. 28:19).
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Belief;
