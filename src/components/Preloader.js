import React, { Component } from 'react';
import '../css/Preloader.css';
import '../css/animate.css';

export class Preloader extends Component {
  classes() {
    let state = this.props.enabled;
    
    if (state) return "preloader animated fadeIn"
    else return "preloader animated fadeOut"
  }
  
  render() {
    return (
      <div className={this.classes()}>
        <img src="icons/icon.png" alt="App icon" className="preloader-ico" />
    
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      </div>
    )
  }
}

export default Preloader
