import React, {Component} from 'react';
import Ship from "./Ship.js";

class ShipTable extends Component{

  ships = [];

  constructor(props){
    super(props);
    this.state = {
      ships: []
    };
  }

  componentDidUpdate(){

  }

  render(){
    this.ships = this.props.ships;
    return(
      <div>
        <h1>Results</h1>
          <div className="flex items-center">
            <div className="w-20">
              <h2>Ship Name</h2>
            </div>
            <div className="w-20">
              <h2>Cost</h2>
            </div>
            <div className="w-20">
              <h2>Speed</h2>
            </div>
            <div className="w-10">
              <h2>Crew</h2>
            </div>
            <div className="w-10">
              <h2>Consumables</h2>
            </div>
            <div className="w-10">
              <h2>No. of Stops</h2>
            </div>
          </div>


          {this.ships.map((ship) => (
              <Ship ship={ship} key={ship.id} distance={this.props.distance}/>
          ))}

      </div>
    );
  }
}

export default ShipTable;
