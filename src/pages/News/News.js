import React, { Component } from 'react';
import './News.css';
import articles from './articles';

import { Link } from 'react-router-dom';

class News extends Component {

  constructor(props) {
    super(props);

    console.log(articles);
  }

  renderList = () => {
    const items = [
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
