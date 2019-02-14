import React, { Component } from 'react';
import Main from './components/Main.js'

import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Main} />
      </Switch>
    );
  }
}

export default App;