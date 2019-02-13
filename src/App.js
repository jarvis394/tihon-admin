import React, { Component } from 'react';
import Preloader from './components/Preloader.js';
import './css/App.css';
import * as utils from './bin/utils.js'

class App extends Component {
  state = {
    preloader: {
      enabled: true
    }
  }

  hidePreloader() {
    this.setState({
      preloader: {
        enabled: false
      }
    })
  }
  
  render() {
    utils.getCmdsData().then(resp => {
      this.hidePreloader()
      alert(resp)
    })
    
    return (
      <main>
        <Preloader enabled={this.state.preloader.enabled} />
      </main>
    );
  }
}

export default App;
