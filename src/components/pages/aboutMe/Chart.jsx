import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class Chart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: {       
      labels: ['JavaScript', 'Html', 'CSS', 'React', 'Bootstrap'],
      datasets: [
      {
        label:'knowledge',
        data:[
          60,
          70,
          70,
          50,
          90,
          0,
          100
        ],
        backgroundColor:[
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)'
        ]
      }]
      
      }
    }
  }

  render(){
    return <div className="chart">
      <HorizontalBar
        data={this.state.chartData}
        width={100}
      	height={30}
        
        options={{
          title: {
            display: true,
            text: 'My skills',
            fontSize: 20
          },
          legend: {
            display: false
          } 
        }}
        
       />
    </div>
  }
};

export default Chart;