import React, { Component } from 'react';
import './History.css';

import { Helmet } from "react-helmet";

class History extends Component {

  render() {
    return (
      <div className="Page Blog History">
        <Helmet>
          <title>Parish History | Elevation of the Holy Cross Sacramento</title>
        </Helmet>

        <div className="content-container">
          <div className="header">
            <h1>Parish History</h1>
            <h2>How we got our start, and where we're headed</h2>
          </div>

          <div className="body">
            <p>
              The Elevation of the Holy Cross Church is part of the Orthodox
              Church in America, one of the international Christian Orthodox
              organizations which operate in compliance with the tenants of the
              world-wide Orthodox teaching established by the Apostles and the
              Holy Fathers in the first century. The OCA was established from the
              Moscow Russia-based Russian Orthodox Church following the initial
              Christian Orthodox settlements in Alaska in 1794 and was granted
              autocephaly in 1970.
            </p>

            <p>
              The Elevation of the Holy Cross Church was established in
              August, 1976, by fourteen parishioners from the Church of the Holy
              Myrrhbearing Women who wanted to have a church which held services
              in the English language. The Church of the Holy Myrrhbearing Women
              was established in April, 1925, the liturgical services were
              conducted in Church Slavonic and they supported the effort to
              establish a new English-serving parish in Sacramento.
            </p>

            <p>
              The initial mission to establish the English-serving church
              was started in borrowed facilities, initially in a side chapel at
              St. Matthew’s Episcopal Church, then to the Carmichael Presbyterian
              Church, and then to the YMCA chapel before purchasing a half-acre
              lot with a house on El Camino Avenue in May, 1980. The house was
              converted to a chapel and the parish finally had an actual place of
              their own. The facility was small and quickly too crowded. A search
              for larger quarters was undertaken, but proved difficult.
            </p>

            <p>
              The current location for the church was purchased in 1992 and
              the adjoining parcel, doubling the size to three acres, purchased
              in 1995. Much effort was undertaken to obtain the necessary permits
              and to build a chapel while services were held in the small,
              cramped house. Much of the work on the conversion of the property
              and building of the chapel was done by the parishioners themselves
              and the church was completed in time for the 2003 Holy Pascha
              services.
            </p>

            <p>
              From the initial fourteen members, we now have in excess of
              100 attending services, with more on Holy feast days, and the
              current chapel is inadequate. The plans for the new chapel, with a
              500 year life expectancy, to further God’s work have been
              completed, awaiting funding for the expansion.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default History;
