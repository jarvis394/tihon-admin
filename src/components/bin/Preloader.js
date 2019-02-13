import React, { Component } from 'react';
import '../../css/Preloader.css';
import '../../css/animate.css';

export class Preloader extends Component {
  visibility() {
    let state = this.props.visible;
    
    if (state === "visible") {
      return "fadeIn";
    } else if (state === "fadingOut") {
      return "fadeOut";
    } else if (state === "hidden") {
      return "hidden"
    }
  }
  
  render() {
    return (
      <div className={"preloader animated " + this.visibility()}>
        <img src="icons/icon.png" alt="App icon" className="preloader-ico" />
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      </div>
    )
  }
}

export default Preloader;
