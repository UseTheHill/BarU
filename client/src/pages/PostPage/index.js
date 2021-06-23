import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        <h1>{this.state.drinkname} {this.state.barname}</h1>
        <p>Enter the drink name:</p>
        <input class="rounded-full border-pink-200 shadow-default justify-content"
          type='text'
          name='drink name'
          onChange={this.myChangeHandler}
        />
        <p>Enter bar name:</p>
        <input class= "rounded-full"
          type='text'
          barname='bar name'
          onChange={this.myChangeHandler}
        />
        <p>Enter the description of the drink:</p>
          <textarea type="type" className = "rounded-full"></textarea>
        </form>
        <button className ="border-pink py-2 text-white-sm focus:outline-black focus:border-black rounded-full justify-content" type= "button">
        <Link to="/profile">
        Submit
        </Link>
        </button>
      </div>
    );
    };}

    export default PostPageScreen;

