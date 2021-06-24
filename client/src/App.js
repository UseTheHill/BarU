import React, { Component } from "react";

// import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/index";
import RegistrationForm from "./pages/RegistrationForm";
import PostPage from "./pages/PostPage/index";
import ProfilePage from "./pages/ProfilePage/index";
import SearchPage from "./pages/SearchPage/index";
import LoginForm from "./pages/LoginForm/LoginForm";
import Nav from "./components/Nav/index";
import "./tailwind.config";
import anime from 'animejs/lib/anime.es.js';


function App() {
  document.title = "BarU";
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
