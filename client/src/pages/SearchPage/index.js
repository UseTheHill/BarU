import React from "react";
import logo from "../../BarU-logo.png";

export default function SearchPage({ fixed }) {
  return (
    <>
    {
        ///Search Bar///
      }

      <div className="p-8">
        <div class="bg-white flex items-center rounded-full shadow-xl">
          <input type="text" placeholder="Search" className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" />
          <div class="p-4">
            <button className="bg-pink-500 text-white rounded-full p-2 hover:bg-pink-400 focus:outline-none w-12 h-12 flex items-center justify-center">
              icon
            </button>
          </div>
        </div>
      </div>

      <div class="col-12 cold-md-6 col-lg-4">
                <div class="card">
                    <div class="drinkDetails">
                        <img id="drinkPic" class="mx-auto d-block"></img>
                        <h5 id="drinkTitle"></h5>
                        <ul class="drinkIngredients" id="drinkIngredients"></ul>
                        <div id="drinkRecipeInfo"></div>
                    </div>
                    <div class="card-body" id="drinkNameDiv">
                        <button id="findDrink" class="btn btn-danger btn-custom">Find Drink</button>
                    </div>
                </div>
      </div>

      


    </>
  );
}
