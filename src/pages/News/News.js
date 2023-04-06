import React, { Component } from 'react';
import './News.css';
import articles from './articles';

import { Link } from 'react-router-dom';

class News extends Component {

  constructor(props) {
    super(props);

    // console.log(articles);
  }

  renderList = () => {
    const items = [
      {
        key: 'newsletter-april-2023',
        title: 'The Good News - April 2023',
        subtitle: 'Quarterly Newsletter'
      },
      {
        key: 'newsletter-december-2022',
        title: 'The Good News - December 2022',
        subtitle: 'Quarterly Newsletter'
      },
      {
        key: 'newsletter-march-2022',
        title: 'The Good News - March 2022',
        subtitle: 'Quarterly Newsletter'
      },
      {
        key: 'newsletter-december-2021',
        title: 'The Good News - December 2021',
        subtitle: 'Quarterly Newsletter'
      },
      {
        key: 'newsletter-august-2021',
        title: 'The Good News - August 2021',
        subtitle: 'Quarterly Newsletter'
      },
      {
        key: 'wine-stroll-2021',
        title: 'Wine Stroll 2021',
        subtitle: 'Wine tasting fundraiser event'
      },
      {
        key: 'newsletter-may-2021',
        title: 'The Good News - May 2021',
        subtitle: 'Quarterly Newsletter'
      },
      {
        key: 'lenten-letter-2021',
        title: 'Lenten Letter 2021',
        subtitle: 'A message from Fr. Timothy'
      },
      {
        key: 'wine-stroll-2019',
        title: 'Wine Stroll 2019',
        subtitle: 'Wine tasting fundraiser event'
      },
      {
        key: 'newsletter-july-2019',
        title: 'The Good News - July 2019',
        subtitle: 'Quarterly Newsletter'
      },
      {
        key: 'brewfest-2019',
        title: 'Brewfest & BBQ 2019',
        subtitle: 'Local brewery beer sampling and BBQ'
      },
      {
        key: 'st-eugine-camp-2019',
        title: 'St. Eugene\'s Summer Camp - 2019',
        subtitle: 'Orthodox youth summer camp organized by the OCA Diocese of the West'
      },
      {
        key: 'newsletter-march-2019',
        title: 'The Good News - March 2019',
        subtitle: 'Quarterly Newsletter'
      },
      {
        key: 'newsletter-december-2018',
        title: 'The Good News - December 2018',
        subtitle: 'Quarterly Newsletter'
      },
      {
        key: 'newsletter-september-2018',
        title: 'The Good News - September 2018',
        subtitle: 'Quarterly Newsletter'
      },
      {
        key: 'wine-stroll-2018',
        title: 'Wine Stroll 2018',
        subtitle: 'Wine tasting fundraiser event'
      },
      {
        key: 'newsletter-june-2018',
        title: 'The Good News - June 2018',
        subtitle: 'Quarterly Newsletter'
      }
    ];

    return (
      <div className="content-container">
        <div className="header">
          <h1>News</h1>
          <h2>Stay up to date with the latest news from our parish</h2>
        </div>

        <div className="body">
          {/* <div className="promo-event">
            <div className="event-title">
              Laychack Memorial Lenten Matching Challenge
            </div>

            <div className="event-description">
              The <em>Laychack Memorial Lenten Matching Challenge</em> - Thanks to the generosity of founding members Joe and Sophia, this Lent we're offering a <strong>$30,000 Matching Challenge</strong> for our Building Program! Now through Pascha, all donations toward our Building Fund will be doubled!
            </div>

            <Link className="donate-button" to="/buildingprogram" style={{ display: 'block', marginTop: '32px', textAlign: 'center' }}>Contribute today</Link>
          </div> */}

          { items.map(( item ) => this.renderListItem( item )) }
        </div>
      </div>
    )
  }

  renderListItem = (item) => {
    return (
      <div className="link" key={ item.key }>
        <Link to={ `/news/${ item.key }` }>
          <h3>{ item.title }</h3>
        </Link>
        {
          item.subtitle &&
          <p>
            { item.subtitle }
          </p>
        }
      </div>
    )
  }

  renderArticle = (key) => {
    const Article = articles[ key ];

    return <Article imagePrefix={ key } />
  }

  render() {
    const { key } = this.props.match.params;
    return (
      <div className="Page Blog News">
        {
          key ? this.renderArticle( key ) : this.renderList()
        }
      </div>
    )
  }
}

export default News;
