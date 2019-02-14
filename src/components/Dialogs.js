import React, { Component } from 'react';
import Preloader from './bin/Preloader';
import DialogsList from './dialogs/DialogsList';
import * as utils from '../bin/utils';

import '../css/Main.css';

class Dialogs extends Component {
  state = {
    preloader: {
      visible: "visible"
    },
    dialogsList: {
      visible: "hidden"
    }
  }

  hidePreloader() {
    this.setState({
      preloader: {
        visible: "fadingOut"
      }
    })

    setTimeout(() => this.setState({
      preloader: {
        visible: "hidden"
      }
    }), 300)
  }

  show(name) {
    this.setState({
      [name]: {
        visible: "visible"
      }
    })
  }

  async componentWillMount() {
    let data = await utils.get("dialogs")
    
    this.setState({
      data: data
    })

    this.hidePreloader();
    setTimeout(() => this.show("dialogsList"), 300)
  }

  render() {
    return (
      <main>
        <Preloader visible={this.state.preloader.visible} />
        <DialogsList data={this.state.data} visible={this.state.dialogsList.visible} />
      </main>
    );
  }
}

export default Dialogs;