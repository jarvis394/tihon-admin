import React, { Component } from 'react';
import Card from './cards/Card';
import CardAction from './cards/CardAction';
import Chart from './Chart';

import '../../css/Dashboard.css'

export default class Dashboard extends Component {
  render() {
    // Return null if not
    if (this.props.visible === "hidden") return null;

    // Data
    const { data } = this.props;
    
    return (
      <div className="dashboard animated fadeIn">
        <div className="fixed-chart-wrapper">
          <div className="fixed-chart">
            <p className="center flow-text fixed-chart-header">Usage</p>
            <Chart data={data.usage} />
          </div>
        </div>

        <div className="row after-chart">
          <div className="container">
            <div className="col s12 m6">
              <Card 
                titleClasses="red-text" 
                title={data.amount.errors} 
                text="Errors happend past 24 hours" />
              <CardAction 
                titleClasses="grey-text text-darken-3"
                title="Logs" 
                text="Check logs in dialogs" />
            </div>
            <div className="col s12 m6">
              <Card 
                titleClasses="blue-text" 
                title={data.amount.commands} 
                text="Commands used past 24 hours" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
