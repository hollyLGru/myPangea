import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register'
import Welcome from './components/Welcome'
import Upload from './components/Upload'

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
  };

// Write ProtectedRoute function here
const ProtectedRoute = (props) => {

    const { component: Component, ...rest } = props;
  
    return (
      checkAuth() === true ? ( <Component {...rest} /> ) : ( <Navigate to="/login" /> )
    );
  };

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/" element={<ProtectedRoute component={Home} />} />
            <Route path="/Upload" element={<ProtectedRoute component={Upload} />} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/About" element={<About/>} />
        </Routes>
    );
};

export default Router;