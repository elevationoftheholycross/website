import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import Routes from './Routes';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
