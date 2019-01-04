import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todo extends Component {
  titleStyling = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    }
  }

  render() {
    const { title, id } = this.props.todo;

    return (
      <div className="Todo">
        <p>
          <span className="Id">{ id }</span>
          <span style={ this.titleStyling() }>{ title }</span>
        </p>
        <button className="DeleteBtn" onClick={ this.props.deleteTodo.bind(this, id) }>X</button>
        <input className="CompletedCheckbox" checked={ this.props.todo.completed ? true : false } type="checkbox" onChange={ this.props.todoStateChange.bind(this, id) }></input>
      </div>
    )
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired
}

export default Todo
