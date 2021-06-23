//import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../BarU-logo-2.png";
// import 'bootstrap/dist/css/bootstrap.min.css';





import React, { Component } from "react";
export default function Nav({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-300 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">

          {
            // Nav Bar Logo
          }
          <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 ">
            <Link
              to="/"
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
            >
              <a
                className="font-semibold text-xl tracking-tight "
              >
                {
                  // Nav Bar Image/text source
                }
                <img class="object-scale-down h-12 w-full ..." src={logo} alt="logo" />BarU
              </a>
              <button
                className="text-black cursor-pointer text-xl leading-none px-4 py-1 border border-solid border-black rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >

                <i className="fa fa-bars">menu</i>

              </button>
            </Link>
          </div>


          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }

            id="example-navbar-danger">

            {
              // Navbar Links/////////////////////////////
            }

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {
                // Search Link /////////
              }
              <li className="nav-item">
                <Link
                  to="/search"
                  className={
                    window.location.pathname === "/search"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >

                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">
                      Search</span>
                  </a>
                </Link>
              </li>

              {
                // Post Link /////////
              }
              <li className="nav-item">
              <Link
              to="/post"
              className={
                window.location.pathname === "/post"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo">

                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">
                    Post</span>
                </a>
                </Link>
              </li>

              {
                // Profile Link /////////
              }
              <li className="nav-item">
              <Link
              to="/profile"
              className={
                window.location.pathname === "/profile"
                  ? "nav-link active"
                  : "nav-link"
              }
            >

                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo">

                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">
                    Profile</span>
                </a>
                </Link>
              </li>

              {
                // Logout Link /////////
              }
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    window.location.pathname === "/"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >

                    <i id="logout" className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">
                      Logout</span>
                  </a>
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>

  );
}
