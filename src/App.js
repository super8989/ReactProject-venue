import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/header';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import Highlight from './components/Highlights';
import Pricing from './components/pricing';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '1500px', background: 'cornflowerblue' }}>
        <Header />
        <Featured />
        <VenueInfo />
        <Highlight />
        <Pricing />
      </div>
    );
  }
}

export default App;
