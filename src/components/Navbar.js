import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import cookie from "cookie";
import './Navbar.css';


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar 
      sx={{
        backgroundColor: "#ffcc80",
        }} position="static">

      <Toolbar>

        <div>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/about">About</Link>
          </li>
          <li
            className="nav-list-item"
            onClick={() => {
              document.cookie = cookie.serialize("loggedIn", null, {
                maxAge: 0,
              });
              navigate("/login");
            }}
          >
            Logout
          </li>
        </ul>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;