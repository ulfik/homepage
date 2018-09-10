import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class Chart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: {       
      labels: ['JavaScript', 'Html', 'CSS', 'React', 'Bootstrap', 'GIT', 'Scrum'],
      datasets: [
      {
        label:'knowledge',
        data:[
          70,
          70,
          60,
          50,
          90,
          40,
          30,
          0,
          100
        ],
        backgroundColor:[
          'rgba(255, 99, 132, 0.6)',
          'rgba(72, 115, 145, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(78, 112, 111, 0.6)',
          'rgba(152, 141, 142, 0.6)',
          'rgba(132, 43, 43, 0.6)',
          'rgba(229, 100, 57, 0.6)'
        ]
      }]
      
      }
    }
  }

  render(){
    return <div className="chart marginTop">
      <HorizontalBar
        data={this.state.chartData}
        width={100}
      	height={60}
        
        options={{
          title: {
            display: true,
           // text: '',
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