import React from 'react';
import aboutMeModel from '../../../model/aboutMeModel';
import Chart from './Chart';
import SvgBadge from './SvgBadge';
import FontAwesome from 'react-fontawesome';

class AboutMe extends React.Component {
  constructor() {
    super();
    this.state = {
      codeWarsData: null,
      codeWarsError: null
    }
  }

  componentDidMount(){
    fetch("http://localhost:5050/users/ulfik?access_key=KTsUNN9aKz7xozDye-gp", {
      headers: {
          "Authorization": "KTsUNN9aKz7xozDye-gp"
      }
  })
    .then(
      res => res.json(), 
      err => this.setCodeWarsError(err))
    .then(jsonRes => {
      this.setCodeWarsData(jsonRes);
    });
  }

  setCodeWarsData(codeWarsResponse) {
    console.log(codeWarsResponse);
    this.setState({codeWarsData: codeWarsResponse});
  }

  setCodeWarsError(codeWarsError) {
    console.log(codeWarsError);
    this.setState({codeWarsError});
  }

  render(){
    return <div className="text-center">
      <h1 className='display-4'>{aboutMeModel.title}</h1>
      <Chart />
      <div className='display-4'>Codewars stats:</div>
      {this.state.codeWarsData &&
      <SvgBadge userName={this.state.codeWarsData.username} honor={this.state.codeWarsData.honor} kyu={this.state.codeWarsData.ranks.overall.name}/>
      }
      {!this.state.codeWarsData && !this.state.codeWarsError && <div>
        <FontAwesome
        className=''
        name='rocket'
        size='3x'
        spin
        />
      </div>}
      {this.state.codeWarsData && <div className="list-group">
        <li className="list-group-item font-weight-bold">username: {this.state.codeWarsData.username}</li>
        <li className="list-group-item font-weight-bold">rank: {this.state.codeWarsData.ranks.overall.name}</li>
        <li className="list-group-item font-weight-bold">total completed: {this.state.codeWarsData.codeChallenges.totalCompleted}</li>
        <li className="list-group-item font-weight-bold">score: {this.state.codeWarsData.ranks.overall.score}</li>
        <li className="list-group-item font-weight-bold">honor: {this.state.codeWarsData.honor}</li>
        <li className="list-group-item font-weight-bold">leaderboard position: {this.state.codeWarsData.leaderboardPosition}</li> 
      </div>
      }
      {this.state.codeWarsError && <div>error</div>}

    </div>
  }
};

export default AboutMe;