import React, { Component } from 'react';
import Preloader from './components/Preloader.js';
import './css/App.css';

class App extends Component {
  state = {
    preloader: {
      enabled: true
    }
  }
  
  render() {
    return (
      <main>
        {this.state.preloader.enabled ? <Preloader /> : ""}
      </main>
    );
  }
}

export default App;
