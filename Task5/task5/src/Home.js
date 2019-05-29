import React, {Component} from 'react';

class Home extends Component{

  constructor(props) {
    super(props);
    this.state = {

    };

  }

  returnDoubleInput(input){
    var output = [];
    output.push(input,input);
    return output;
  }

  findBalancePoint(input){
    var length = input.length;
    var output = input[Math.floor(length/2)];
    return output;
  }

  render(){
    return(
      <div>
      <h1>Task 5</h1>
      <h2>A - Return double input</h2>
        <h3>Input: [1,2,3,4,5]</h3>
        <h3>Output: {this.returnDoubleInput([1,2,3,4,5])}</h3>

      <h2>B - Find array balance point</h2>
        <h3>Input: [6,4,8,2,-6,75,3]</h3>
        <h3>Output: {this.findBalancePoint([6,4,8,2,-6,75,3])}</h3>
      </div>
    );
  }
}

export default Home;
