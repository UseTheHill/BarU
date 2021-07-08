import axios from "axios";
import React from "react";
import PostPageScreen from "../PostPage";
import { Link } from "react-router-dom";
import "../ProfilePage/ProfilePage.css";

//const router = require("express").Router();


class ProfilePageScreen extends PostPageScreen {
  constructor(props) {
    super(props)
    this.state = {
      count1: 0,
      count2: 0,
      count3: 0,
    }
  }
  increment1 = () => {
    this.setState({
      count1: this.state.count1 + 1
    })
  }
  increment2 = () => {
    this.setState({
      count2: this.state.count2 + 1
    })
  }
  increment3 = () => {
    this.setState({
      count3: this.state.count3 + 1
    })
  }


  decrement1 = () => {
    this.setState({
      count1: this.state.count1 - 1
    })
  }

  decrement2 = () => {
    this.setState({
      count2: this.state.count2 - 1
    })
  }

  decrement3 = () => {
    this.setState({
      count3: this.state.count3 - 1
    })
  }

  reset() {
    this.setState({
      count1: 0,
      count2: 0,
      count3: 0
    });
  };


  handleDelete1 = (event) => {
    event.preventDefault();
    document.getElementById('blogpost1').classList.add("hiddenPost");

    console.log("handleDelete1");
    // document.getElementById('newPostForm').classList.remove("hiddenPost");

  };

  handleDelete2 = (event) => {
    event.preventDefault();
    document.getElementById('blogpost2').classList.add("hiddenPost");

    console.log("handleDelete2");
    // document.getElementById('newPostForm').classList.remove("hiddenPost");

  };

  handleDelete3 = (event) => {
    event.preventDefault();
    document.getElementById('blogpost3').classList.add("hiddenPost");

    console.log("handleDelete3");
    // document.getElementById('newPostForm').classList.remove("hiddenPost");

  };

  undoDelete = (event) => {
    event.preventDefault();
    document.getElementById('blogpost3').classList.remove("hiddenPost");
    document.getElementById('blogpost2').classList.remove("hiddenPost");
    document.getElementById('blogpost1').classList.remove("hiddenPost");
    console.log("undoDelete");
    // document.getElementById('newPostForm').classList.remove("hiddenPost");

  };


  render() {
    return (

      <div id="wrapper" className="blogs__wraper bg-gray-200  py-20 px-20" >

        <div id="blogpost1" className="flex justify-between items-center">
          <div className="blogs bg-white mr-5">
            <img
              src="https://images.unsplash.com/photo-1591243315780-978fd00ff9db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              className=""
            />
            <div className="p-5">
              <h1 className="text-2xl font-bold text-green-800 py-2">
                {this.drinkname} Lorem ipsum dolor sit amet
              </h1>
              <p className="bg-white text-sm text-black">
                {this.description}  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis vitae qui distinctio ex soluta? Voluptates, ea! Esse,
                natus. Quas possimus laboriosam consectetur deserunt ea sapiente.
                Dicta ipsam atque voluptatem provident!
              </p>
              <Link
                to="/post"
                className={
                  window.location.pathname === "/post"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mx-8 my-4 rounded space-x-2 md:space-x-8">
                  Edit
                </button>
              </Link>

              <button id="btn1" onClick={this.increment1} className="bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 mx-8 my-4 rounded space-x-2 md:space-x-8">
                Like
              </button>
              <button id="display1" className="inc bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 mx-8 my-4 rounded space-x-2 md:space-x-8">
                {this.state.count1}
              </button>
              <button id="btn1" onClick={this.decrement1} className="bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 mx-8 my-4 rounded space-x-2 md:space-x-8">
                Dislike
              </button>
            </div>
          </div>

        </div>
        <div id="blogpost2" className="flex justify-between items-center">
          <div className="blogs bg-white mr-5">
            <img
              src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9qaXRvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              className=""
            />
            <div className="p-5">
              <h1 className="text-2xl font-bold text-green-800 py-2">
                Mojito, Bar: Mustang
              </h1>
              <p className="bg-white text-sm text-black">
                is a traditional Cuban highball. The cocktail often consists of five ingredients: white rum, sugar (traditionally sugar cane juice), lime juice, soda water, and mint.
              </p>
              <Link
                to="/post"
                className={
                  window.location.pathname === "/post"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mx-8 my-4 rounded space-x-2 md:space-x-8">
                  Edit
                </button>
              </Link>

              <button id="btn1" onClick={this.increment2} className="bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 mx-8 my-4 rounded space-x-2 md:space-x-8">
                Like
              </button>
              <button id="display1" className="inc bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 mx-8 my-4 rounded space-x-2 md:space-x-8">
                {this.state.count2}
              </button>
              <button id="btn1" onClick={this.decrement2} className="bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 mx-8 my-4 rounded space-x-2 md:space-x-8">
                Dislike
              </button>

            </div>
          </div>

        </div>
        <div id="blogpost3" className="flex justify-between items-center">
          <div className="blogs bg-white mr-5">
            <img
              src="https://www.thecocktaildb.com/images/media/drink/lnjoc81619696191.jpg"
              className=""
            />
            <div className="p-5">
              <h1 className="text-2xl font-bold text-green-800 py-2">
                Pink Moon, Bar:Pink Flamingo
              </h1>
              <p className="bg-white text-sm text-black">
                This soothing Pink Moon Milk helps one sleep, made with creamy almond milk, honey, and tart cherry juice.
              </p>
              <Link
                to="/post"
                className={
                  window.location.pathname === "/post"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mx-8 my-4 rounded space-x-2 md:space-x-8">
                  Edit
                </button>
              </Link>

              <button id="btn1" onClick={this.increment3} className="bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 mx-8 my-4 rounded space-x-2 md:space-x-8">
                Like
              </button>
              <button id="display1" className="inc bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 mx-8 my-4 rounded space-x-2 md:space-x-8">
                {this.state.count3}
              </button>
              <button id="btn1" onClick={this.decrement3} className="bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 mx-8 my-4 rounded space-x-2 md:space-x-8">
                Dislike
              </button>
            </div>
          </div>

        </div>

      </div >
    );
  }
}

export default ProfilePageScreen;
