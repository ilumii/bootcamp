import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
      userFirstDefualt: "First",
      userLastDefault: "Last"
    }
  }

  changeState = () =>{
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  handleChange = name => ({ target }) =>{
    this.setState({ 
      [name]: target.value
    }); 
  }

  saveState = () =>{
    this.setState({
      userFirstDefualt: this.state.first,
      userLastDefault: this.state.last,
      isEditing: !this.state.isEditing
    })
  }

  render() {
    return (
      <div className="display">
        {!this.state.isEditing ?(
          <div className="container">
            <div className="top">
              <button onClick={()=>this.changeState()}>Edit</button>
            </div>
            <div className="body">
              <h1>First Name: {this.state.userFirstDefualt}</h1>
              <h1>Last Name: {this.state.userLastDefault}</h1>
            </div>
          </div>
        ):(
          <div className="container">
            <div className="top">
              <button onClick={()=>this.saveState()}>Save</button>
              {" "}
              <button onClick={()=>this.changeState()}>Cancel</button>
            </div>
            <form className="body">
              <label>
                First Name:
                <input type="text" defaultValue={this.state.userFirstDefualt} onChange={this.handleChange('first')}/>
              </label>
              <label>
                Last Name:
                <input type="text" defaultValue={this.state.userLastDefault} onChange={this.handleChange('last')}/>
              </label>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default App;
