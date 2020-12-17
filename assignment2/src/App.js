
import './App.css';
import React from 'react';

class HeroDetails extends React.Component {
  render() {
    
    return(
      <h2>Hero Name {this.props.name} <br/> Hero famous Movie{this.props.bestmoviename}<br/> Hero Location:{this.props.location}<br/> Hero born Year {this.props.bornYear} <br/>Hero current Year:{this.props.current_year} </h2>

    ) ;
  }
}

class Tomcruise extends React.Component {
  render() {
    
    return (
      <div>
      <h1>Hero Details</h1>
      <HeroDetails name="Tomcrusie" bestmoviename=" mission impossible" location="LA" bornYear="1979" current_year="2020"/>
      </div>
    );
  }
}


export default Tomcruise;
