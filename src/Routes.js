import React from 'react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Letter from './pages/Letter';

class Routes extends React.Component {

  componentDidUpdate(prevProps) {
    if ( this.props.location !== prevProps.location ) {
      // document.querySelector('.App').scrollTop = 0;
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div id="main" className="Routes">
        <Route exact path="/" component={ Home } />
        <Route exact path="/welcome" component={ Letter } />
      </div>
    )
  }
}

export default withRouter( Routes );
