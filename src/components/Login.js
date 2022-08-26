import React, { Component } from 'react';
import axios from 'axios';
import './Navbar.css';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
const ariaLabel = { 'aria-label': 'description' };


class Login extends Component {
constructor(props){
    super(props)
    this.state={
      email: "",
      password: ""
    }
  }

handleChange = (e) => {
  console.log(e.target.name)
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault()
axios.post('https://hollygrudovichfirstapp.herokuapp.com/login', {
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

//  loggingIn = (e) => {
//     e.preventDefault();
//     document.cookie = "loggedIn=true;max-age=60*1000"
//     navigate("/");
//   };


  render() {
  return (
    <div style={{
      margin: 'auto',
      textAlign: 'center'
      }}>
        <h2 sx={{Color: '#5EC7D1'}}>Log In </h2>
        <form onSubmit={(e) => {this.handleSubmit(e)}}>
          <Input sx={{width: '30%'}} placeholder="Email" inputProps={ariaLabel} name="email" type="text" value={this.state.email} onChange={(e) => {this.handleChange(e)}}/>
          <br/>
          <Input sx={{width: '30%', margin: '3%'}} placeholder="Password" inputProps={ariaLabel} name="password" type="text" value={this.state.password} onChange={(e) => {this.handleChange(e)}}/>
          <br/>
          <Button variant="outlined" type="submit" value="Submit" sx={{margin: '3%', color: "#5EC7D1 "}}>Submit</Button>
        </form>
    </div>
  )
  }
}

export default Login;