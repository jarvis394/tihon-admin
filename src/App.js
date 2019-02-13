import React, { Component } from 'react';
import Todos from './components/Todos.js';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Make a React tutorial",
        completed: false
      },
      {
        id: 2,
        title: "Actually learn React",
        completed: false
      },
      {
        id: 3,
        title: "Eat a dinner",
        completed: true
      },
    ]
  }

  render() {
    return (
      <main>
        <Todos todos={ this.state.todos } todoStateChange={ this.todoStateChange } deleteTodo={ this.deleteTodo } />
      </main>
    );
  }
}

export default App;
