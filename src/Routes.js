import React from 'react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';

import Home from './pages/Home';

class Routes extends React.Component {

  componentDidUpdate(prevProps) {
    if ( this.props.location !== prevProps.location ) {
      document.querySelector('.App').scrollTop = 0;
    }
  }

  render() {
    return (
      <div id="main" className="Routes">
        <Route exact path="/" component={ Home } />
      </div>
    )
  }
}

export default withRouter( Routes );
