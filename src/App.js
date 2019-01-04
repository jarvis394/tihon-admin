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

  todoStateChange = (id) => {
    this.setState({ 
      todos: this.state.todos.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed
        return todo
      })
    });
  }

  deleteTodo = (id) => {
    this.setState({ 
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  render() {
    return (
      <div className="App">
        <Todos todos={ this.state.todos } todoStateChange={ this.todoStateChange } deleteTodo={ this.deleteTodo } />
      </div>
    );
  }
}

export default App;
