import React from "react";
import logo from "../../BarU-logo.png";

export default App;

// import React, { Component } from "react";
// import { Link } from "react-router-dom";

function ProfilePageScreen () {
    return(
    <div className="App">
        <div className="App-header">
          <img src={logo}  alt="logo" />
          <h2>Welcome to the BarU ProfilePage!</h2>
        </div>
    </div>
    )
}