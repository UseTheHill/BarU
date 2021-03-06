
import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostPageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkname: "",
      barname: "",
      description: "",
      file: null,
      drinktitle: "test",
    };

    this.myChangeHandler = this.myChangeHandler.bind(this);
    this.sendDetailsToServer = this.sendDetailsToServer.bind(this);
  }
  sendDetailsToServer = () => {
    console.log("working");
    fetch("/api/newPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        drinkname: this.state.drinkname,
        barname: this.state.barname,
        description: this.state.description,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            drinkname: "",
            barname: "",
            description: "",
          });
        }
      });
  };
  myChangeHandler = (event) => {
    const target = event.target;
    let nam = target.name;
    let val = target.value;
    this.setState({ [nam]: val });
    console.log(this.state);
  };

  imageChangeHandler = (event) => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
    console.log(this.state.file);
  };


  handleSubmit = (event) => {
    event.preventDefault();

    this.sendDetailsToServer();
  };
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
              <button
                onClick={this.handleSubmit} /*onChange={this.myChangeHandler}*/
                className="bg-pink-200 hover:bg-pink-500 text-gray-800 font-bold my-4 py-2 px-8 rounded focus:outline-none focus:shadow-outline tracking-wide w-full"
                type="button"
              >
                <Link>Submit</Link>
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
