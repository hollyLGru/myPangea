import React, { Component } from 'react';
import axios from 'axios'


class App extends Component {
constructor(props){
    super(props)

    this.state={
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  }

handleChange = (e) => {
  console.log(e.target.name)
  this.setState({
    [e.target.name]: e.target.value
    //e.target.name can be either firstName or lastName below!! instead of doing what we had before: lastName : e.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault()
  //prevents page reload and so that we can save the information submitted 

//THIS IS WHERE WE STORE THE DATA THAT WAS ENTERED IN FORM!!!!!!!!
//use axios here: 
axios.post('https://hollygrudovichfirstapp.herokuapp.com/register', {
  email: this.state.email,
  password: this.state.password
})
.then(function(response){
  console.log(response)
})
.catch(function (error) {
  console.log(error)
})

  this.setState({

    email: "",
    password: ""
  })
}

  render() {
  return (
    <div>
      <header>
        <p>Register Account</p>
        <form onSubmit={(e) => {this.handleSubmit(e)}}>
          <label>Email: 
            <input name="email" type="text" value={this.state.email} onChange={(e) => {this.handleChange(e)}}></input>
          </label>
          <br></br>
          <label>Password: 
            <input name="password" type="text" value={this.state.password} onChange={(e) => {this.handleChange(e)}}></input>
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
    </header>
    </div>
  )
  }
}

export default App;
