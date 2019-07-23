import React, {Component} from 'react';
import './App.css';
import Decrement from './components/Decrement.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      count : 10
    }
  }

  decrease = () =>{
    if(this.state.count === 0){
      window.alert("Cannot be less than Zero");
    }
    else{
      let x = this.state.count-1;
      this.setState({
        count: x
      })
    }
  }
  
  increase = () =>{
    let new_int = this.state.count +1;
    this.setState({
      count: new_int
    })
  }

  render (){
    return(
      <div className="center">
        <button onClick={this.decrease}>Decrement</button>
        <Decrement count={this.state.count}/>
        <button onClick={this.increase}>Increment</button>
      </div>
    );
  }
}

export default App;
