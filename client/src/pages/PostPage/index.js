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
      barname: "",
      description: '',
      file: null,
      drinktitle: "test"
    };

    this.myChangeHandler = this.myChangeHandler.bind(this);

  }
  myChangeHandler = (event) => {
    const target = event.target;
    let nam = target.name;
    let val = target.value;
    this.setState({ [nam]: val });

  };

  imageChangeHandler = (event) => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
    console.log(this.state.file);
  };
  /*const myNewPost = async function(event){

  }*/

  handleSubmit(event) {
    event.preventDefault();
    alert('input was submitted: ' + this.state.val);

    console.log(this.state.val);
  }
  render() {
    return (
      // <div className="shadow overflow-hidden sm:rounded-md">
      <div className="flex justify-center p-8... ">
        <form onSubmit={this.handleSubmit}
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
              {this.state.drinkname} {this.state.barname}
            </h1>
            <p>Enter the drink name:</p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="drinkname"
              value={this.state.drinkname}
              onChange={this.myChangeHandler}
            />
            <p>Enter bar name:</p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="barname"
              value={this.state.barname}
              onChange={this.myChangeHandler}
            />
            <p>Enter the description of the drink:</p>
            <textarea
              type="type"
              name="description"
              value={this.state.description}
              onChange={this.myChangeHandler}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
            
            <div className="flex justify-center">
              <button /*onChange={this.myChangeHandler}*/
                className="bg-pink-200 hover:bg-pink-500 text-gray-800 font-bold my-4 py-2 px-8 rounded focus:outline-none focus:shadow-outline tracking-wide w-full"
                type="button"
              >
                <Link to="/profile">Submit</Link>
              </button>

            </div>
            <div className="flex justify-center">
              <p>{this.state.drinkname + " "}<br />
                {this.state.barname + " "}<br />
                {this.state.description + " "}<br />
                {this.state.drinktitle + " "}</p>
              <img src={this.state.file}></img>

            </div>
          </div>
        </form>

      </div>
      // </div>
    );
  }
}

export default PostPageScreen;
