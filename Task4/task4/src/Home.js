import React, {Component} from 'react';
import "./Home.css";

class Home extends Component{

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      ships: []
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
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.ships);
  }

  handleSubmit(event) {
    console.log();
  }

  render(){
    return (
      <div className="bg-light-blue vh-100">
      <form className="tc absolute-center helvetica b" onSubmit={this.handleSubmit}>
        <label className="avenir">
          Enter Distance:
          <input type="text" name="name" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" className="helvetica b"/>
        </form>
      </div>
    )
  }
}


export default Home;
