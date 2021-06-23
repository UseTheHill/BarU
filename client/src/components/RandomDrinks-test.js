import React from "react";
import axios from "axios";

export default class RandomDrinks extends React.Component {
  state = {
    randomDrinks: [],
  };

  componentDidMount() {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then(({ data }) => {
        console.log(data.drinks);
        this.setState(
          { randomDrinks: data.drinks }
        )
      });
  }
  render() {
    const { randomDrinks } = this.state
    console.log(randomDrinks)
    return (

      <div className="col-12 cold-md-6 col-lg-4">

        {/*<ol>

          {randomDrinks}
          <li>

          </li>
        </ol>*/}
        <div className="card">
          <div className="drinkDetails">
            <img id="drinkImg" className="mx-auto d-block"></img>
            <h5 id="drinkTitle"></h5>
            <ul className="drinkIngredients" id="drinkIngredients"></ul>
            <div id="drinkRecipeInfo"></div>
          </div>
          <div className="card-body" id="drinkNameDiv">
            <h5 className="card-title">Cocktail Recipe</h5>
            <p className="card-text" id="drinkRecipe"></p>
            <input
              type="text"
              placeholder="enter drink search here"
              id="drinkName"
            ></input>
            <button
              id="drinkNameSubmit"
              className="btn btn-danger btn-custom"
            >
              Find Drink
            </button>
            <button id="saveDrink" className="btn btn-danger btn-custom">
              Save Drink
            </button>
            <button id="loadDrink" className="btn btn-danger btn-custom">
              Load Drink
            </button>
            <p className="saveFeedback" id="saveDrinkFeedback"></p>
          </div>
        </div>
      </div>
    );
  }
}




//function is from date butler
/*let drinkPoster = $("#drinkImg");
let drinkTitle = $("#drinkTitle");
let drinkRecipeInfo = $("#drinkRecipeInfo");
let drinkIngredients = $("#drinkIngredients");
let saveDrinkFeedback = $("#saveDrinkFeedback");
let randomDrink;

drinkPoster.attr("src", "assets/images/drink-placeholder.png");
drinkPoster.attr("height", "300px");
drinkPoster.attr("width", "300px");*/

/*function getCocktail() {
  fetch(apiUrl)
    .then(function (response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " +
            response.status
            );
            return;
          }

          response.json().then(function (data) {
        if (data.drinks === null) {
          saveDrinkFeedback.text("No results, please try again.");
        }
        randomDrink =
          data.drinks[Math.floor(Math.random() * data.drinks.length)];
          console.log(randomDrink);
          drinkPoster.attr("src", randomDrink.strDrinkThumb);
        drinkPoster.attr("height", "300px");
        drinkPoster.attr("width", "300px");
        drinkTitle.text(randomDrink.strDrink);
        const ingredientList = [];
        drinkIngredients.text("");
        for (let i = 1; i < 16; i++) {
          let drinkIngredient = randomDrink["strIngredient" + i];
          let drinkMeasure = randomDrink["strMeasure" + i];

          if (drinkIngredient === null) {
            break;
          }
          console.log(drinkIngredient);
          console.log(drinkMeasure);
          let ingredients = "";
          if (drinkMeasure === null) {
            ingredients = drinkIngredient;
          } else {
            ingredients = drinkMeasure + ": " + drinkIngredient;
          }

          ingredientsOl = $("<ol>");
          ingredientsOl.text(ingredients);
          drinkIngredients.append(ingredientsOl);
        }
        drinkRecipeInfo.text(randomDrink.strInstructions);
        saveDrinkFeedback.text("");
        saveDrinkButton.css("opacity", "1.0");
        saveDrinkButton.css("pointer-events", "all");
      });
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
}
getCocktail();*/
