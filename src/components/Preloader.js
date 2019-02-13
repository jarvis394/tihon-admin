import React, { Component } from 'react';
import '../css/Preloader.css';

export class Preloader extends Component {
  shownStyle() {
    let state = this.props.enabled;
    
    if (state) return "display: block;"
    else return "display:none;"
  }
  
  render() {
    return (
      <div style={this.props.enabled ? {} : {
          display: "none"
        }} className="preloader animated fadeIn">
        <img src="icons/icon.png" alt="App icon" className="preloader-ico" />
    
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      </div>
    )
  }
}

export default Preloader
