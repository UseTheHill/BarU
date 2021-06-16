//import React from "react";
//import logo from "../../BarU-logo.png";

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Landing({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            {
              // Nav Bar Logo
            }
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              BarU
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }

            id="example-navbar-danger">

            {
              // Navbar Links
            }

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo">

                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">
                    Profile</span>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo">

                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">
                    About Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {
        //////////////////////////////////////////////////////Login & Sign up BTNS  / Guest BTN////////////////////////////////////////////////////////////////////////////
      }
      <div class="flex justify-center p-8">


          < button  className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          <Link
          to="/login"
          className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
        >
            Login
            </Link>
          </button >

       

        < button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          Sign Up
        </button >
      </div>

      <div id="guest" class="flex justify-center p-8...">
        <p>Don't wanna create an account but still want drink ideas? < button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          Click Here
        </button >
        </p>
      </div>

    </>
  );
}


