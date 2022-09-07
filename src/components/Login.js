import React, {useState} from 'react';
import axios from 'axios';
import './Navbar.css';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
const ariaLabel = { 'aria-label': 'description' };


const Login = (props) => {
const [credentials, setCredentials] = useState({
  email: "",
  password: ""
});

let navigate = useNavigate();

const handleChange = (e) => {
  console.log(e.target.value)
  setCredentials({
    ...credentials,
    [e.target.name]: e.target.value
  })
}

const loggingIn = (e) => {
    // e.preventDefault();
    document.cookie = "loggedIn=true;max-age=60*1000"
    navigate("/");
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(credentials)
axios.post('http://localhost:8000/login', {
  email: credentials.email,
  password: credentials.password
})
.then(response=>{
  console.log(response);
  document.cookie = `jwt=${response.headers.authorization};max-age=60*1000`;
  document.cookie = `userID=${response.data.userID};max-age=60*1000`
  loggingIn()
})
.catch(function (error) {
  console.log(error)
})
}

  return (
    <div style={{
      margin: 'auto',
      textAlign: 'center'
      }}>
        <h2 sx={{Color: '#5EC7D1'}}>Log In </h2>
        <form onSubmit={(e) => {handleSubmit(e)}}>
          <Input sx={{width: '30%'}} placeholder="Email" inputProps={ariaLabel} name="email" type="text" value={credentials.email} onChange={(e) => {handleChange(e)}}/>
          <br/>
          <Input sx={{width: '30%', margin: '3%'}} placeholder="Password" inputProps={ariaLabel} name="password" type="text" value={credentials.password} onChange={(e) => {handleChange(e)}}/>
          <br/>
          <Button variant="outlined" type="submit" value="Submit" sx={{margin: '3%', color: "#5EC7D1 "}}>Submit</Button>
        </form>
    </div>
  )
    }

export default Login;

