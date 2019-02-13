import React, { Component } from 'react';
import '../css/Preloader.css';

export class Preloader extends Component {
  render() {
    return (
      <div className="preloader animated fadeIn">
        <img src="icons/icon.png" alt="App icon" class="preloader-ico" />
    
        <div class="progress">
          <div class="indeterminate"></div>
        </div>
      </div>
    )
  }
}

export default Preloader
