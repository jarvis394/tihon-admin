import React, { Component } from 'react'

export class CreateTodo extends Component {
  render() {
    return (
      <div className="CreateTodoBox">
        <input type="text" />
        <button className="CreateTodo">Create new</button>
      </div>
    )
  }
}

export default CreateTodo
