import React, { Component } from 'react';
import Preloader from './bin/Preloader';
import Dashboard from './dashboard/Dashboard';
import * as utils from '../bin/utils';

import '../css/Main.css';

class Main extends Component {
  state = {
    preloader: {
      visible: "visible"
    },
    dashboard: {
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

  showDashboard() {
    this.setState({
      dashboard: {
        visible: "visible"
      }
    })
  }

  async componentWillMount() {
    let errAmount = await utils.get("amount/errors")
    let cmdsAmount = await utils.get("amount/cmds")
    let cmdsUsage = await utils.getCmdsUsage()
    this.setState({
      data: {
        amount: {
          errors: errAmount,
          commands: cmdsAmount
        },
        usage: cmdsUsage
      }
    })

    this.hidePreloader();
    setTimeout(() => this.showDashboard(), 300)
  }

  render() {
    return (
      <main>
        <Preloader visible={this.state.preloader.visible} />
        <Dashboard data={this.state.data} visible={this.state.dashboard.visible} />
      </main>
    );
  }
}

export default Main;