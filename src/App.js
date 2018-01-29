import React, { Component } from 'react';
import './App.css';

import Routes from './Routes';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
