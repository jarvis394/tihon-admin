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
      setTimeout(() => this.setState({
        preloader: {
          enabled: false
        }
      }), 5000)
    
    return (
      <main>
        <Preloader enabled={this.state.preloader.enabled} />
      </main>
    );
  }
}

export default App;
