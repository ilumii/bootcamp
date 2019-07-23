import React, { Component } from 'react';
import './App.css';
import Card from './components/ContactCard.js';

const data= 
  [
    {
      name:"steven",
      number:"1233",
      email:"123@gmail.com",
      mobile:"1234"
    },
    {
      name:"bob",
      number:"321",
      email:"abc@123.com",
      mobile:"3321"
    },
    {
      name:"david",
      number:"911",
      email:"NYPD@gmail.com",
      mobile:"311"
    }
  ]
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsName: [],
      contactsNumber: [],
      contactsEmail:[],
      contactsM_number:[]
    }
  }

  componentDidMount(){
    this.setState({
      contactsName: ["steven", "bob", "david"],
      contactsNumber: ["123","1234","123456"],
      contactsEmail:["123@gmail","12345","12321321"],
      contactsM_number:["123","1","1"]
    })
  }
  // contactsDisplay = () =>{
  //   for (let i = 0; i<this.state.contactsName.length;i++){
  //     return(
  //       <Card  
  //         name={this.state.contactsName[i]}
  //         mobile={this.state.contactsNumber[i]}
  //         email={this.state.contactsEmail[i]}
  //         m_number={this.state.contactsM_number[i]}
  //       >
  //       </Card>
  //     )
  //   }
  // }
  contactsDisplay = () =>{
    let cards = data.map((item =>
        <Card  
          name={item.name}
          mobile={item.number}
          email={item.email}
          m_number={item.mobile}
        >
        </Card>
    ))
    return(
      <h1>{cards}</h1>
    )
  }

  handleChange = name => ({ target }) =>{
    this.setState({ 
      [name]: target.value
    }); 
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    const name = this.state.contactsName.concat(this.state.name);
    const number = this.state.contactsNumber.concat(this.state.number);
    const email = this.state.contactsEmail.concat(this.state.email);
    const mobile = this.state.contactsM_number.concat(this.state.mobile);
    this.setState({
      contactsName: name,
      contactsNumber: number,
      contactsEmail: email,
      contactsM_number: mobile
    })
  }     

  render() {                                             
    return (
      <div>
        <h1>Contact List</h1>
      <div className="Body">
        <div className="left">
          <form className="form" onSubmit={this.handleSubmit}>
          <h1>Note: Not functional</h1>
            <label>
              Name:
              <input type="text" onChange={this.handleChange('name')}/>
            </label>
            <label>
              Phone number:
              <input type="text" onChange={this.handleChange('number')}/>
            </label>
            <label>
              Email:
              <input type="text" onChange={this.handleChange('email')}/>
            </label>
            <label>
              Mobile number:
              <input type="text" onChange={this.handleChange('mobile')}/>
            </label>
            <button type="submit" value="Submit" >Submit</button>
          </form>
        </div>

        <div className="contacts">
          {this.contactsDisplay()}
        </div>
      </div>
      </div>
    );
  }
}

export default App;
