// import React from "react";
// import logo from "../../BarU-logo.png";

// import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

class PostPageScreen extends React.Component {
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
    );
    };}

  class DrinkPost extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          description: 'Description of drink'
        };
      }
      render() {
        return (
          <form>
          <textarea value={this.state.description} />
          </form>
        );
      }
    }


    
// ReactDOM.render(<PostPageScreen />, document.getElementById('root'));

export default PostPageScreen;
