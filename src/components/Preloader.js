import React, { Component } from 'react';
import '../css/Preloader.css';

export class Preloader extends Component {
  shownStyle() {
    let state = this.props.enabled;
    alert(state)
    
    if (state) return "display: block;"
    else return "display:none;"
  }
  
  render() {
    alert(this.props)
    return (
      <div style={this.showStyle()} className="preloader animated fadeIn">
        <img src="icons/icon.png" alt="App icon" class="preloader-ico" />
    
        <div class="progress">
          <div class="indeterminate"></div>
        </div>
      </div>
    )
  }
}

export default Preloader
