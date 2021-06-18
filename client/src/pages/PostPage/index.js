
// import React from "react";
// import logo from "../../BarU-logo.png";

// function PostPageScreen () {
//     return(
//     <div className="App">
//         <div className="App-header">
//           <img src={logo}  alt="logo" />
//           <h2>Welcome to the BarU PostPage!</h2>
//         </div>
//     </div>
//     )
// }

// export default PostPageScreen;

// import React from "react";

import React, { Component } from "react";
import Nav from "../../components/Nav";
// import 'bootstrap/dist/css/bootstrap.min.css';

class PostPageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkname: '',
      Barname: null,
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <div>
        <form>
        <h1>{this.state.drinkname} {this.state.Barname}</h1>
        <p>Enter the drink name:</p>
        <input
          type='text'
          name='drink name'
          onChange={this.myChangeHandler}
        />
        <p>Enter bar name:</p>
        <input
          type='text'
          Barname='bar name'
          onChange={this.myChangeHandler}
        />
        <p>Enter the description of the drink:</p>
          <textarea type="type"></textarea>
        </form>
      </div>
    );
    };}

    export default PostPageScreen;

