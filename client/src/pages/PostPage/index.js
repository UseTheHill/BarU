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
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';


class PostPageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkname: "",
      Barname: null,
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }
  /*const myNewPost = async function(event){

  }*/
  render() {
    return (
      <div>
        <form id="newPostForm">
          <h1>
            {this.state.drinkname} {this.state.Barname}
          </h1>
          <p>Enter the drink name:</p>
          <input
            className="rounded-full border-pink-200 shadow-default"
            type="text"
            name="drink name"
            onChange={this.myChangeHandler}
          />
          <p>Enter bar name:</p>
          <input
            className="rounded-full"
            type="text"
            barname="bar name"
            onChange={this.myChangeHandler}
          />
          <p>Enter the description of the drink:</p>
          <textarea
            type="type"
            className="text-pink center height-30py width-40py"
          ></textarea>
        
        <button
          className="border-pink py-2 text-white-sm focus:outline-black focus:border-black rounded-full"
          type="button"
        >
          <Link to="/profile">Submit</Link>
        </button>
        </form>
      </div>
    );
  }
}

export default PostPageScreen;
