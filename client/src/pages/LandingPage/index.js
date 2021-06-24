//import React from "react";
//import logo from "../../BarU-logo.png";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "../../cocktails_animation_image.jpeg";
import anime from "animejs/lib/anime.es.js";

export default function Landing({ fixed }) {
  anime({
    targets: ".cocktail_image",
    translateX: 250,
    direction: "alternate",
    loop: true,
    easing: "linear",
  });
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
          className="bg-pink-200 text-gray-800 hover:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
          className="bg-pink-200 text-gray-800 hover:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Sign Up
        </button>
      </div>
      {
        //////////////////////////////////////////////////////Search Page Route////////////////////////////////////////////////////////////////////////////
      }
      <div id="guest" className="flex justify-center p-8...">
        <p>
          Don't wanna create an account but still want drink ideas?{" "}
          <button
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
      <div className="cocktail_image object-none object-center  ...">
        <img src={image} />
      </div>
    </>
  );
}
