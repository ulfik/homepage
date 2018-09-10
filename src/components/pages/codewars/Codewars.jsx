import React from 'react';
import CodewarsLoading from './CodewarsLoading';
import CodewarsLoaded from './CodewarsLoaded';


class Codewars extends React.Component {
  constructor() {
    super();
    this.state = {
      codeWarsData: null,
      codeWarsError: null
    }
  }

  componentDidMount(){
    fetch("http://urszula-jaworska.ghut668.usermd.net:5050/users/ulfik?access_key=KTsUNN9aKz7xozDye-gp")
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
    return <div className="text-center col marginBottom contentSize">
      
      <div className='display-4 marginTop'>Codewars stats:</div>
      {this.state.codeWarsData &&
        <CodewarsLoaded codeWarsData={this.state.codeWarsData}/>
      }
      {!this.state.codeWarsData && !this.state.codeWarsError && 
        <CodewarsLoading />
      }



      {this.state.codeWarsData && <div className="list-group marginBottom">
        <li className="list-group-item font-weight-bold">username: {this.state.codeWarsData.username}</li>
        <li className="list-group-item font-weight-bold">rank: {this.state.codeWarsData.ranks.overall.name}</li>
        <li className="list-group-item font-weight-bold">total completed: {this.state.codeWarsData.codeChallenges.totalCompleted}</li>
        <li className="list-group-item font-weight-bold">score: {this.state.codeWarsData.ranks.overall.score}</li>
        <li className="list-group-item font-weight-bold">honor: {this.state.codeWarsData.honor}</li>
        <li className="list-group-item font-weight-bold">leaderboard position: {this.state.codeWarsData.leaderboardPosition}</li> 
      </div>
      }
      {this.state.codeWarsError && <div>error</div>}
      <a href="https://www.codewars.com/users/ulfik"  rel="noopener noreferrer" target="_blank" className="btn btn-danger">go to my profile</a>
    </div>
  }
};

export default Codewars;