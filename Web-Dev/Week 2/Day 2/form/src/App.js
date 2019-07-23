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
            <form className="body">
              <label>
                First Name:
                <input readOnly value={this.state.userFirstDefualt}/>
              </label>
              <label>
                Last Name:
                <input readOnly value={this.state.userLastDefault}/>
              </label>
            </form>
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
                <input type="text" onChange={this.handleChange('first')}/>
              </label>
              <label>
                Last Name:
                <input type="text" onChange={this.handleChange('last')}/>
              </label>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default App;
