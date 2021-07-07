//import React from "react";
//import logo from "../../BarU-logo.png";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../../android-chrome-512x512.png";
import anime from "animejs/lib/anime.es.js";
import "./index.css";

export default function Landing({ fixed }) {
  anime({
    targets: ".cocktail_image",
    translateX: {
      value: '*=2.5', // 100px * 2.5 = '250px'
      duration: 1000
    },
    // width: {
    //   value: '-=20px', // 28 - 20 = '8px'
    //   duration: 1800,
    //   easing: 'easeInOutSine'
    // },
    rotate: {
      value: '+=2turn', // 0 + 2 = '2turn'
      duration: 1800,
      easing: 'easeInOutSine'
    },
    direction: 'alternate',
    loop: true
    
  });

  document.title = "Welcome to BarU";

  const [loading, setLoading] = useState(true)

  function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    demoAsyncCall().then(
      () => {
        setLoading(false);
      }
    )
  })

  if (loading) {
    return <img className="loader" src="android-chrome-512x512.png" />;
  }

  return (
    <>
    
      <div id="guest" className="flex justify-center p-8... ">
        <h1 className="about">About Us</h1>
        <p id="desc"className="text-lg font-light leading-relaxed mt-6 mb-4 text-blueGray-800">
          Most bars have created specialty cocktail menus but if you want a
          drink off menu,
           BarU is here to help. Search for some of the best bar drinks
          and order while at the 
          restaurant.
          <br />
          <br />
          Once you have your drink you can create a post in your account where
          you can share 
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
      <div className="drinky flex item-center cocktail_image object-none object-center p-5 m-5 ...">
        <img src={image} />
      </div>
    
      <div id="guest" className="flex justify-center p-8...">
        <p id="desc">
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
      
    </>
  );
}
