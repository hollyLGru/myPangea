import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";
import cookie from "cookie";
import './Navbar.css';


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" 
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white'
      }}>
      <Toolbar>
            <h1  style={{color: "#FF5C5C "}}><Link to="/">MyPangea</Link></h1>
            <h1  style={{color: "rgb(247,191,118) "}}><Link to="/about">About</Link></h1>
            <h1  style={{color: "#8BB09D "}}><Link to="/Upload">Upload</Link></h1>
            <h1  style={{color: "#B475AA "}} onClick={() => {
              document.cookie = cookie.serialize("loggedIn", null, {
                maxAge: 0,
              });
              navigate("/Login");
            }}
              >Logout</h1>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;