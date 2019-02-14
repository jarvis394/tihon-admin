import React, { Component } from 'react';
import Main from './components/Main.js'
import Dialogs from './components/Dialogs.js'

import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/dialogs' component={Dialogs} />
      </Switch>
    );
  }
}

export default App;