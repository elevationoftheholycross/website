import React, { Component } from 'react';
import './AplosModal.css';

import Iframe from 'react-iframe';

class AplosModal extends Component {

  renderModal = () => {
    const { toggle } = this.props;

    return (
      <div className="AplosModal">
        <div className="modal-nav-container">
          <div className="modal-nav">
            <button onClick={ toggle }>Close ✕</button>
          </div>
        </div>

        <Iframe url="https://www.aplos.com/aws/give/ElevationoftheHolyCrossOrthodoxChurch/holycrosssacramento"
                width="1000px"
                height="100%"
                overflow="scroll"
                loading="Loading..."
                frameBorder="0" />

        <div className="modal-backdrop" onClick={ toggle } />
      </div>
    )
  }

  render() {
    const { show } = this.props;

    return show
      ? this.renderModal()
      : <div />
  }
}

export default AplosModal;
