import React, { useState } from "react";
import "./RegistrationForm.css";
// import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../../constants/apiConstants";
import { withRouter } from "react-router-dom";

function RegistrationForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    successMessage: null,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const sendDetailsToServer = () => {
    fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: state.email,
        password: state.password,
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            email: '',
            password: '',
          });
        } else {
          /*this.setState({
              signUpError: json.message,
              isLoading: false,
          });*/
        }
      });
  };

  // const redirectToHome = () => {
  //   // props.updateTitle('Home')
  //   props.history.push("/home");
  // };
  const redirectToLogin = () => {
    // props.updateTitle('Login')
    props.history.push("/login");
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      sendDetailsToServer();
    } else {
      // props.showError("Passwords do not match");
    }
  };
  return (
    <div className="flex justify-center p-8... ">
      <div className="w-full max-w-xs">
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="text-center">
              <h2 className="mt-5 text-3xl font-bold text-gray-900">Sign Up</h2>
              <p className="mt-2 text-sm text-gray-400 p-2">Welcome!</p>
            </div>
            <div className="form-group text-left mb-2">
              <label
                htmlFor="exampleInputEmail1"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email address
              </label>
              <input
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Email"
                value={state.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group text-left mb-2">
              <label
                htmlFor="exampleInputPassword1"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                placeholder="Password"
                value={state.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group text-left mb-2">
              <label htmlFor="exampleInputPassword1">Confirm Password</label>
              <input
                type="password"
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={state.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between form-check">
              <button
                type="submit"
                className="bg-pink-200 hover:bg-pink-500 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSubmitClick}
              >
                Register
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
          <div className="mt-2">
            <span>Already have an account? </span>
            <span className="loginText" onClick={() => redirectToLogin()}>
              Login here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(RegistrationForm);
