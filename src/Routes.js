import React from 'react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Ministries from './pages/Ministries';
import OutreachAndCharity from './pages/OutreachAndCharity';
import Education from './pages/Education';
import Letter from './pages/Letter';
import Belief from './pages/Belief';
import Orthodoxy from './pages/Orthodoxy';
import Leadership from './pages/Leadership';
import Sermons from './pages/Sermons';
import History from './pages/History';
import News from './pages/News';
import Giving from './pages/Giving';
import BuildingProgram from './pages/BuildingProgram';

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
        <Route exact path="/home" component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/ministries" component={ Ministries } />
        <Route exact path="/outreachandcharity" component={ OutreachAndCharity } />
        <Route exact path="/education" component={ Education } />
        <Route exact path="/welcome" component={ Letter } />
        <Route exact path="/belief" component={ Belief } />
        <Route exact path="/orthodoxy" component={ Orthodoxy } />
        <Route exact path="/leadership" component={ Leadership } />
        <Route exact path="/sermons" component={ Sermons } />
        <Route exact path="/history" component={ History } />
        <Route exact path="/news" component={ News } />
        <Route exact path="/news/:key" component={ News } />
        <Route exact path="/giving" component={ Giving } />
        <Route exact path="/buildingprogram" component={ BuildingProgram } />
      </div>
    )
  }
}

export default withRouter( Routes );
