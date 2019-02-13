import React, { Component } from 'react';
import Preloader from './components/Preloader.js';
import './css/App.css';
import { time } from './bin/utils.js'

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
    alert(time)
    
    return (
      <main>
        <Preloader enabled={this.state.preloader.enabled} />
      </main>
    );
  }
}

export default App;
