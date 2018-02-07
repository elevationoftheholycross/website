import React from 'react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Letter from './pages/Letter';
import Orthodoxy from './pages/Orthodoxy';
import History from './pages/History';

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
        <Route exact path="/about" component={ About } />
        <Route exact path="/welcome" component={ Letter } />
        <Route exact path="/orthodoxy" component={ Orthodoxy } />
        <Route exact path="/history" component={ History } />
      </div>
    )
  }
}

export default withRouter( Routes );
