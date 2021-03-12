import React, { Component } from 'react';
import './OutreachAndCharity.css';

import Profile from '../../components/Profile';

class OutreachAndCharity extends Component {

  render() {
    return (
      <div className="Page OutreachAndCharity">
        <div className="content-container">
          <div className="header">
            <h1>Outreach and Charity</h1>
            <h2 style={{ color: '#b71c1c' }}>"My little children, let us not love in word or in tongue, but in deed and in truth."</h2>
            <h2>1 John 3:18</h2>
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
    image: 'archangel-michael.jpg',
    imageDir: 'ministries',
    name: 'Archangel Michael Food Closet',
    markdown: [
      `The Archangel Michael Food Closet has been helping hungry families in Sacramento for over thirty years, from its humble beginnings in 1984 and continuing on from its official establishment in 1994.  It is a joint community outreach of Elevation of the Holy Cross Orthodox Church and St. Athanasius Orthodox Church, and is a Partner Agency of the Sacramento Food Bank.`,
      `**Our mission** is to fulfill Christ’s challenge to us in Matthew 25: “For I was hungry and you gave Me food…inasmuch as you did it to one of the least of these my brethren, you did it to me.” Thus we endeavor ***to help feed the hungry in the name of Jesus Christ*** through weekly food distribution, as well as other outreach efforts.`,
      `#### What We Do`,
      `Every Tuesday morning year-round our volunteer staff packages and distributes fresh, canned, and pre-packaged foods, plus meat and dairy, to over sixty families a month, with each family receiving food biweekly.  We also provide groceries to a varying number of “walk-ins.”`,
      `Groceries come from both the Sacramento Food Bank and Family Services, and from parishioner donations.  In addition, we also provide school supplies to the children of the families we serve each academic year, and provide for holiday meals such as turkey dinners and pies at Thanksgiving.`,
      `Distributions take place on our church property weekly – 9000 Jackson Rd., Sacramento, on the southern border of the Rosemont neighborhood – excepting the weeks of Christmas and New Year’s Day.  While facility space restrictions currently enable us to accommodate only 66 family units at a time on our client list, the list is fairly fluid, and we are happy to put you on a waiting list if we are full.  “Walk-ins” are always welcome, as well.`,
      `#### You are Welcome Here`,
      `Pick-up time is between **10:00 and 11:00 a.m. on Tuesday mornings** at 9000 Jackson Rd., Sacramento, on the southern border of the Rosemont neighborhood.\n\nFor further information, please call the Food Closet at **(916) 364-8068**.`,
      `#### Future Plans`,
      `Our prayer is that we will be able to expand this ministry and double the number of people we serve in the coming years as our future building plans become a reality.`,
      `#### How You Can Help`,
      `Donations of non-perishable food items are always welcome. Cash donations may also be made to Elevation of the Holy Cross with a memo note for “Food Closet.”`,
      `![Volunteers handing out turkeys on Thanksgiving]( ${ require( '../../assets/images/ministries/food-closet-volunteers.jpg' ) } )`,
      `##### Volunteers handing out turkeys on Thanksgiving`
    ].join( '\n\n' )
  },
  {
    image: 'st-xenia.jpg',
    imageDir: 'ministries',
    name: 'St. Xenia Project',
    markdown: [
      `**The St. Xenia Project** was started over a decade ago by two Holy Cross parishioners to serve residents of an adult group room and board home in North Sacramento.  The home averages between 14-18 men and women at any given time.`
      ,`#### What We Do`
      ,`Four times a year, we visit the home to deliver essential toiletries (and a small treat).  In December, our choir and parishioners visit to sing Christmas carols and deliver Christmas presents.  The presents are donated by our parishioners (after receiving a wish list from the residents), and are wrapped by our Church School children.`
      ,`The group home residents are always appreciative; hugs are exchanged and conversations shared.  We pray that we bring not only “things,” but also respect, a little sunshine into their lives, and a sharing of God’s love for all people.`
      ,`![Our youth wrapping gifts to deliver to the residents during our Christmas Caroling event]( ${ require( '../../assets/images/ministries/st-xenia-volunteers.jpg' ) } )`
      ,`##### Our youth wrapping gifts to deliver to the residents during our Christmas Caroling event`
      ,`#### How You Can Help`
      ,`Monetary donations are always appreciated – checks can be made out to Elevation of the Holy Cross with “St. Xenia” in the memo field. Donations of the following items are also most welcome: soap; toothbrushes; toothpaste; shampoo; shaving cream; hand/body lotion; disposable razors; combs; dental floss; Q-tips; toilet paper; tissues; and ladies’ sanitary products. During the Nativity Season, you may also donate a gift for a resident.`
      ,`#### St. Xenia`
      ,`St. Xenia of St. Petersburg was widowed at 26 years of age.  So great was her grief for the loss of her husband, especially since he had died without Confession or Holy Communion, that she never looked for earthly happiness again.  For the rest of her life, St. Xenia abandoned her former way of life, no longer interested in the things of this world.  She gave away her house and all of her possessions to the poor, and secretly helped build a new church in the Smolensk Cemetery by carrying bricks to the site each night.  Many of those who turn to St. Xenia in prayer receive healing from illness, deliverance from afflictions, and also help in finding jobs.`
    ].join( '\n\n' )
  }
] 

export default OutreachAndCharity;
