import React from "react";
import axios from "axios";

export default class randomDrinks extends React.Component {
  state = {
    randomDrinks: [],
  };

  componentDidMount() {
    axios.get("www.thecocktaildb.com/api/json/v1/1/random.php").then((res) => {
      console.log(res);
      this.setState({ randomDrinks: res.data });
    });
  

    let drinkPoster = $('#drinkImg');
    let drinkTitle = $('#drinkTitle');
    let drinkRecipeInfo = $('#drinkRecipeInfo');
    let drinkIngredients = $('#drinkIngredients');
    let drinkRecipe = $('#drinkRecipe');
    let findDrinkButton = $('#drinkNameSubmit');
    let saveDrinkButton = $('#saveDrink');
    let loadDrinkButton = $('#loadDrink');
    let saveDrinkFeedback = $('#saveDrinkFeedback');
    let randomDrink;

    // Stock image attributes
    drinkPoster.attr("src", "assets/images/drink-placeholder.png");
    drinkPoster.attr("height", "300px");
    drinkPoster.attr("width", "300px");

  render(); {
    return (
      <div class="col-12 cold-md-6 col-lg-4">
        <div class="card">
          <div class="drinkDetails">
            <img id="drinkImg" class="mx-auto d-block"></img>
            <h5 id="drinkTitle"></h5>
            <ul class="drinkIngredients" id="drinkIngredients"></ul>
            <div id="drinkRecipeInfo"></div>
          </div>
          <div class="card-body" id="drinkNameDiv">
            <h5 class="card-title">Cocktail Recipe</h5>
            <p class="card-text" id="drinkRecipe"></p>
            <input
              type="text"
              placeholder="enter drink search here"
              id="drinkName"
            ></input>
            <button id="drinkNameSubmit" class="btn btn-danger btn-custom">
              Find Drink
            </button>
            <button id="saveDrink" class="btn btn-danger btn-custom">
              Save Drink
            </button>
            <button id="loadDrink" class="btn btn-danger btn-custom">
              Load Drink
            </button>
            <p class="saveFeedback" id="saveDrinkFeedback"></p>
          </div>
        </div>
      </div>
    );
  }
  }}
