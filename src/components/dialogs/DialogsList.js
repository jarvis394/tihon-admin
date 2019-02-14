import React, { Component } from 'react';
import Preloader from './bin/Preloader';
import Dialog from './dialogs/Dialog';

import '../css/Main.css';

class DialogsList extends Component {
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
      <main style={this.visibility()}>
        <Dialog />
      </main>
    );
  }
}

export default DialogsList;