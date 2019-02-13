import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import { time } from '../../bin/utils'

export default class Chart extends Component {
  data = {
    labels: time,
    datasets: [
      {
        label: 'Used commands per hour',
        fill: true,
        lineTension: 0.4,
        backgroundColor: 'rgba(54, 116, 249, 0.3)',
        borderColor: 'rgba(54, 116, 249, 1)',
        data: this.props.data
      }
    ]
  };

  options = { 
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }

  render() {
    return (
      <div className="fixed-chart-center">
        <Line height={400} options={this.options} data={this.data} />
      </div>
    )
  }
}
