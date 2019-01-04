import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Todo from './Todo.js';
import CreateTodo from './CreateTodo.js';

export class Todos extends Component {
  render() {
    return <div className="TodosList">
      { 
        this.props.todos.map(todo => (
          <Todo key={ todo.id } todo={ todo } todoStateChange={ this.props.todoStateChange } deleteTodo={ this.props.deleteTodo } />
        ))
      }
      <CreateTodo />
    </div>
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos
