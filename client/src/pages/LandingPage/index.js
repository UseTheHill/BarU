//import React from "react";
//import logo from "../../BarU-logo.png";

import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../../android-chrome-512x512.png";
import anime from "animejs/lib/anime.es.js";
import "./index.css";

export default function Landing({ fixed }) {
  anime({
    targets: ".cocktail_image",
    translateX: 500,
    direction: "alternate",
    loop: true,
    easing: "linear",
  });

  document.title = "Welcome to BarU";

  const [loading, setLoading] = useState(true)

  function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => { 
    demoAsyncCall().then(
      ()=> {
        setLoading(false);
      }
    )
  })

  if (loading) {
    return <img className="loader" src="android-chrome-512x512.png"/>;
  }

  return (
    <>
      <div id="guest" className="flex justify-center p-8... ">
        <p className="text-lg font-light leading-relaxed mt-6 mb-4 text-blueGray-800">
          Most bars have created specialty cocktail menus but if you want a
          drink off menu,
          <br /> BarU is here to help. Search for some of the best bar drinks
          and order while at the <br />
          restaurant.
          <br />
          <br />
          Once you have your drink you can create a post in your account where
          you can share <br />
          the name of the drink, the bar you got it from and whether or not you
          liked it.
        </p>
      </div>
      {
        //////////////////////////////////////////////////////Login & Sign up BTNS  / Guest BTN////////////////////////////////////////////////////////////////////////////
      }
      <div className="flex justify-center p-8">
        <button
          id="btn-links"
          className=" text-gray-800 hover:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          <Link
            to="/login"
            className={
              window.location.pathname === "/login"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Login
          </Link>
        </button>

        <button
          id="btn-links"
          className=" text-gray-800 hover:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          {" "}
          <Link
            to="/register"
            className={
              window.location.pathname === "/register"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Sign Up
          </Link>
        </button>
      </div>
      {
        //////////////////////////////////////////////////////Search Page Route////////////////////////////////////////////////////////////////////////////
      }
      <div id="guest" className="flex justify-center p-8...">
        <p>
          Don't wanna create an account but still want drink ideas?{" "}
          <button
            id="btn-links"
            className="bg-pink-200 text-gray-800 hover:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            <Link
              to="/search"
              className={
                window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Click Here
            </Link>
          </button>
        </p>
      </div>
      <div className="cocktail_image object-none object-center p-10 m-10 ...">
        <img src={image} />
      </div>
    </>
  );
}
