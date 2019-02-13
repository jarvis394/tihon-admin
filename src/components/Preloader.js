import React, { Component } from 'react';

export class Preloader extends Component {
  render() {
    return (
      <div className="preloader animated fadeIn">
        <img src="%PUBLIC_URL%/icons/icon.png" class="preloader-ico" />
    
        <div class="progress">
          <div class="indeterminate"></div>
        </div>
      </div>
    )
  }
}

export default Preloader
