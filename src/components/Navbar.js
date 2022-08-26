import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import cookie from "cookie";


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton color="inherit">
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          myPangea
        </Typography>
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;