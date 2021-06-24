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
  };
  /*const myNewPost = async function(event){

  }*/
  render() {
    return (
      // <div class="shadow overflow-hidden sm:rounded-md">
      <div className="flex justify-center p-8... ">
        <form
          id="newPostForm"
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div class="text-center">
            <h2 class="mt-5 text-3xl font-bold text-gray-900">
              Share Cocktail Info
            </h2>
            <p class="mt-2 text-sm text-gray-400 p-4">
              Let's post about how your drink was tonight!
            </p>
          </div>
          <div className="overflow-hidden sm:rounded-md block text-gray-700 text-sm font-bold mb-2">
            <h1>
              {this.state.drinkname} {this.state.Barname}
            </h1>
            <p>Enter the drink name:</p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="drink name"
              onChange={this.myChangeHandler}
            />
            <p>Enter bar name:</p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              barname="bar name"
              onChange={this.myChangeHandler}
            />
            <p>Enter the description of the drink:</p>
            <textarea
              type="type"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
            <div className="flex justify-center">
              <button
                className="bg-pink-200 hover:bg-pink-500 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                <Link to="/profile">Submit</Link>
              </button>
            </div>
          </div>
        </form>
      </div>
      // </div>
    );
  }
}

export default PostPageScreen;
