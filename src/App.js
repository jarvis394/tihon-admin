import React, { Component } from 'react';
import Preloader from './components/Preloader.js';
import './css/App.css';
import './css/animate.css';
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

  componentWillMount() {
    this._apiData = utils.getCmdsData().then(data => {
      this.setState({ exData: data })
      console.log(data, this.state)
      
      this.hidePreloader()
      
      this._apiData = null
    })
  }
  
  render() {    
    return (
      <main>
        <Preloader enabled={this.state.preloader.enabled} />
      </main>
    );
  }
}

export default App;
