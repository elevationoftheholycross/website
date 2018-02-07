import React, { Component } from 'react';
import './Letter.css';

class Letter extends Component {

  render() {
    return (
      <div className="Page Blog Letter">
        <div className="content-container">
          <div className="header">
            <h1>First Time Visitor?</h1>
            <h2>A letter from Father Ian MacKinnon</h2>
          </div>

          <div className="body">
            <p>Welcome! Greetings, in the name of Our Lord, Jesus Christ!</p>

              <p>It is our great joy to welcome you to Elevation of the Holy Cross Orthodox Christian Church!</p>

              <p>
                Holy Cross was founded in 1976 when Archbishop John (Shahovskoy) blessed a small number of
                committed Orthodox Christian believers (who attended Holy Myrrhbearers Russian Orthodox
                Church in what is now W. Sacramento), to evangelize the Orthodox Christian Faith in
                Sacramento Valley. From the beginning, all of our services were held in English. The parish’s
                first permanent location was on El Camino Avenue. We began worshipping in our current
                chapel on Holy Friday in 2002.
              </p>

              <p>
                In the beginning, the majority of parishioners of the new Sacramento Mission were born into
                the Orthodox Church. Now, however, the majority of parishioners are converts, including all of
                the clergy. Holy Cross is a diverse parish, with believers from a wide variety of backgrounds.
                Most likely, you will meet someone here with whom you share something in common.
              </p>

              <p>
                Whether you are already Orthodox and perhaps moving from another area of the country, or if
                you are new to Orthodox Christianity, we welcome you with open arms!
              </p>

              <p>
                For those from other faith backgrounds, Orthodox worship may seem different to you at first.
                The faithful stand during the services; the worship space is open (without pews); there are
                icons on the walls; the choir has a significant role in the services. Orthodox worship joins with
                the &quot;heavenly worship&quot; which we read about in Isaiah. The church building is &quot;patterned after
                the image of God&#39;s Kingdom in the Book of Revelation.&quot; In a real sense, we believe that the
                Church is the &quot;earthly heaven&quot; when heaven and earth are joined together in the Eucharistic
                Liturgy.
              </p>

              <p>
                At Holy Cross, we have a number of church school classes for children, a weekly adult class and
                a weekly class for catechumens. In addition, our parish sponsors and participates in college
                groups at both UC Davis and Sacramento State. Our main charitable outreach is the St. Michael
                Food Distribution Program which provides food for families in need every Tuesday morning.
                Please feel free to ask questions. If you are new to Orthodoxy, you probably have lots of them.
              </p>

              <p>
                Yours In Christ,<br/>
                Fr. Ian MacKinnon
              </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Letter;
