import React, { Component, useEffect, useState } from "react";

// import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/index";
import RegistrationForm from "./pages/RegistrationForm";
import PostPage from "./pages/PostPage/index";
import ProfilePage from "./pages/ProfilePage/index";
import SearchPage from "./pages/SearchPage/index";
import LoginForm from "./pages/LoginForm/LoginForm";
import Nav from "./components/Nav/index";
import "tailwindcss/tailwind.css";
// import anime from 'animejs/lib/anime.es.js';

function App() {
  document.title = "BarU";
  //  const [loading, setLoading] = useState(true)
  
  //   useEffect(()=> {
  //     setLoading(false);
  //   })
      
  //     if(loading) { // if your component doesn't have to wait for an async action, remove this block 
  //       return null; // render null when app is not ready
  //     }
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/post" component={PostPage} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/search" component={SearchPage} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/register" component={RegistrationForm} />
    </Router>
  );
}

export default App;
