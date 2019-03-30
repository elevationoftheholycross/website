import React, { Component } from 'react';
import './TithelyButton.css';

import Tithely from './tithely';

class TithelyButton extends Component {

  componentDidMount() {
    var tw = Tithely.create_tithely_widget();
  }

  render() {
    const { text } = this.props;

    return (
      <button className="TithelyButton tithely-give-btn" data-church-id="594092">
        { text || 'Give' }
      </button>
    )
  }
}

export default TithelyButton;
