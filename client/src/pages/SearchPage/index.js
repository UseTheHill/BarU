import React, { Component } from "react";
//import RandomDrinks from "../../components/RandomDrinks-test";

export default function SearchPage({ fixed }) {
  return (
    <>
      {
        ///Search Bar///
      }

      <div className="p-8">
        <div className="bg-white flex items-center rounded-full shadow-xl">
          <input
            type="text"
            placeholder="Search"
            className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
          />
          <div className="p-4">
            <button className="bg-pink-500 text-white rounded-full p-2 hover:bg-pink-400 focus:outline-none w-12 h-12 flex items-center justify-center">
              icon
            </button>
          </div>
        </div>
      </div>

      {//<RandomDrinks />
      }
    </>
  );
}
