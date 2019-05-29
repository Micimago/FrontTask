import React, {Component} from 'react';

class Ship extends Component{

  ship = [];
  hoursNeeded = 0;
  consumablesInHours = 0;
  stops = 0;

  constructor(props){
    super(props);
    this.ship = this.props.ship;
  }

  calculateStops(){
      var distanceInMiles = this.props.distance;
      var distanceInKilometers = distanceInMiles/0.62137;
      this.hoursNeeded = distanceInKilometers / this.ship.speed;

      //get consumables in hours
      var consumables = this.ship.consumables;
      if(consumables.includes("hours")){
        this.consumablesInHours = parseInt(this.ship.consumables, 10);
      }else if(consumables.includes("days")){
        this.consumablesInHours = (parseInt(this.ship.consumables, 10) * 24);
      }else if(consumables.includes("months")){
        //get current month
        var today = new Date();
        var consumablesInMonths = (parseInt(this.ship.consumables, 10));
        var dateAfterMonths = today.setMonth(today.getMonth()+consumablesInMonths);
        var todayMilliseconds = new Date().getTime();
        var differenceInMillisecs = dateAfterMonths - todayMilliseconds;
        var consumablesInHours = differenceInMillisecs / (1000 * 60 * 60);

        this.consumablesInHours = consumablesInHours;
      }else if(consumables.includes("years")){
        this.consumablesInHours = (parseInt(this.ship.consumables, 10) * 24 * 365);
      }

      this.stops = Math.ceil(this.hoursNeeded / this.consumablesInHours);
    }


  isAvailable(){
      if(this.ship.speed!==0 && this.ship.consumables!=='N/A' && this.ship.speed!=='N/A' && this.ship.crew!=='N/A' && parseInt(this.ship.consumables)!==0){
        return true;
      }else{
        return false;
      }
  }

  render(){

    if(this.isAvailable()){
      this.calculateStops();
    return(
      <div className="flex items-center" key={this.ship.id}>
        <div className="w-20">
          <p>{this.ship.model}</p>
        </div>
        <div className="w-20">
          <p>{this.ship.cost}</p>
        </div>
        <div className="w-20">
          <p>{this.ship.speed}km/h</p>
        </div>
        <div className="w-10">
          <p>{this.ship.crew.length}</p>
        </div>
        <div className="w-10">
          <p>{this.ship.consumables}</p>
        </div>
        <div className="w-10">
          <p>{this.stops}</p>
        </div>
      </div>
    );
  }else{
    return(
      <div> </div>
    );
  }
  }
}

export default Ship;
