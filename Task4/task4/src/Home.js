import React, {Component} from 'react';
import "./Home.css";
import ShipTable from "./ShipTable.js"

class Home extends Component{

  constructor(props) {
    super(props);
    this.state = {
      distance: '',
      ships: [],
      isNumber: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('https://addajet.blob.core.windows.net/scripts/response.json')
    .then(res => res.json())
    .then((data) => {
      this.setState({ ships: data })
    })
    .catch(console.log)

    console.log(this.state.ships);
  }

  handleChange(event) {
    if(isNaN(event.target.value)){
      this.setState({isNumber: false});
    }else{
      this.setState({distance: event.target.value});
      this.setState({isNumber: true});
    }
  }

  handleSubmit(event) {
  }

  render(){
    return (
      <div className="bg-light-blue">
        <div className="pa4">
          <form className="tc helvetica b" onSubmit={this.handleSubmit}>
            <label className="avenir">
              Enter Distance In Miles:
              <input type="text" name="name" value={this.state.value} onChange={this.handleChange}/>
            </label>
            {!this.state.isNumber && <p className="red">Input must be a number</p>}
          </form>

          <ShipTable ships={this.state.ships} distance={this.state.distance}/>
        </div>
      </div>
    )
  }
}


export default Home;
