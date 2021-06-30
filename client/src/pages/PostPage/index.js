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
      // <div className="shadow overflow-hidden sm:rounded-md">
      <div className="flex justify-center p-8... ">
        <form
          id="newPostForm"
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="text-center">
            <h2 className="mt-5 text-3xl font-bold text-gray-900">
              Share Cocktail Info
            </h2>
            <p className="mt-2 text-sm text-gray-400 p-4">
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
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                Attach Photo of Your Cocktail
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-20 p-10 group text-center">
                  <div className="h-full w-full text-center flex flex-col justify-center items-center  ">
                    <div className="flex flex-auto max-h-20 w-2/5 mx-auto -mt-10"></div>
                    <p className="pointer-none text-gray-500">
                      <a href="" id="" className="text-blue-600 hover:underline">
                        Select a file.
                      </a>
                    </p>
                  </div>
                  {/* <input type="file" className="hidden"> */}
                </label>
              </div>
            </div>

            <p className="text-sm text-gray-300">
              <span>File type: types of images</span>
            </p>
            <div>
              <button
                type="submit"
                className="flex justify-center bg-blue-200 hover:bg-blue-500 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Upload
              </button>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-pink-200 hover:bg-pink-500 text-gray-800 font-bold my-4 py-2 px-8 rounded focus:outline-none focus:shadow-outline tracking-wide w-full"
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
