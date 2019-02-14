import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../../../css/Card.css'

export default class Card extends Component {
  render() {
    let { titleClasses, title, text } = this.props;

    return (
      <div className="card z-depth-3">
        <div className="card-content">
          <h1 className={titleClasses}>{title}</h1>
          <p>{text}</p>
        </div>
        <div className="card-action">
          <Link to="/dialogs">Go to</Link>
        </div>
      </div>
    )
  }
}
