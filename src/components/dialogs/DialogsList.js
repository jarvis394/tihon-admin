import React, { Component } from 'react';
import Dialog from './dialogs/Dialog';

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
      <main className={"animated " + this.visibility()}>
        <Dialog />
      </main>
    );
  }
}

export default DialogsList;