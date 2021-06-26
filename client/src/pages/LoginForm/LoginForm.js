import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../../constants/apiConstants";
import { withRouter } from "react-router-dom";

function LoginForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    successMessage: null,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const payload = {
      email: state.email,
      password: state.password,
    };
    axios
      .post(API_BASE_URL + "/user/login", payload)
      .then(function (response) {
        if (response.status === 200) {
          setState((prevState) => ({
            ...prevState,
            successMessage: "Login successful. Redirecting to home page..",
          }));
          localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
          redirectToHome();
          props.showError(null);
        } else if (response.code === 204) {
          props.showError("Username and password do not match");
        } else {
          props.showError("Username does not exists");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  
  const redirectToHome = () => {
    // props.updateTitle("Home");
    props.history.push("/home");
  };
  const redirectToRegister = () => {
    // props.updateTitle("Register");
    props.history.push("/register");
  };



  return (
    <div className="flex justify-center p-8... ">
      <div
        className="w-full max-w-xs"
        // className="card col-12 col-lg-4 login-card mt-2 hv-center"
      >
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="text-center">
            <h2 class="mt-5 text-3xl font-bold text-gray-900">Sign In</h2>
            <p class="mt-2 text-sm text-gray-400 p-2">Welcome Back</p>
          </div>
          <div className="form-group text-left">
            <label
              htmlFor="exampleInputEmail1"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={state.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group text-left mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="exampleInputPassword1"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between form-check">
          <button
            className="bg-pink-200 hover:bg-pink-500 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            // className="btn btn-primary"
            onClick={handleSubmitClick}
          >
            Login
          </button>
          </div>
        </form>
        <div
          className="alert alert-success mt-2"
          style={{ display: state.successMessage ? "block" : "none" }}
          role="alert"
        >
          {state.successMessage}
        </div>
        <div className="registerMessage">
          <span>Dont have an account? </span>
          <span
            className="underline cursor-pointer loginText"
            onClick={() => redirectToRegister()}
          >
            Register
          </span>
        </div>
      </div>
    </div>
  );
}

export default withRouter(LoginForm);
