import React, { Component } from "react";

// import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/index";
import PostPage from "./pages/PostPage/index";
import ProfilePage from "./pages/ProfilePage/index";
import SearchPage from "./pages/SearchPage/index";
import LoginPage from "./pages/LoginPage/index";
import Nav from "./components/Nav/index";


function App() {
  return (
    <Router>
          <Nav />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/post" component={PostPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/login" component={LoginPage} />
    </Router>
  );
}


export default App;


