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

  componentWillMount() {
    this._apiData = utils.getCmdsData().then(data => {
      this.setState({ exData: data })
      alert(data)
      alert(JSON.stringify(this.state))
      
      this._apiData = null
    })
  }
  
  render() {    
    alert(JSON.stringify(this.state))
    this._apiData.then(d => alert(d))
    
    return (
      <main>
        <Preloader enabled={this.state.preloader.enabled} />
      </main>
    );
  }
}

export default App;
