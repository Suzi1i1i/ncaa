import React from 'react';
import './App.css';
import teamData from './CollegeBasketballTeams.json'; // Correctly import your JSON data

interface TeamProps {
  // tid: number;
  // cid: number;
  // did: number;
  school: string;
  name: string;
  // abbrev: string;
  // pop: number
  city: string;
  state: string;
  // latitude: number;
  // longtitude: number;
}

function Welcome(){
  return(
    <div>
      <h1>NCAA Basketball Teams Site</h1>
      <p>This website lists all the colleges in NCAA Basketball.</p>
    </div>
  );
}

class TeamCard extends React.Component<TeamProps>{
  render() {
    const oneTeam = this.props;

    return(
      <div>
      <h2>{oneTeam.school}</h2>
      <h3>Mascot Name: {oneTeam.name}</h3>
      <h3>Location: {oneTeam.city}, {oneTeam.state}</h3>
      <br/>
    </div>

    );
  }
}

function TeamList(){
  return(
    <div> 
    {teamData.teams.map(oneTeam => <TeamCard {...oneTeam}/>)}
    </div>

  );
}

function App() {
  return (
    <div className="App">
      <Welcome/>
      <TeamList/>
    </div>
  );
}

export default App;
