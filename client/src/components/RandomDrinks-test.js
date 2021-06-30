import React from "react";
import axios from "axios";
import { Component } from "react";
import "./RandomDrinks.css";

export default class RandomDrinks extends React.Component {
  //ask about super props and cancel token
  state = {
    query: '',
    loading: false,
    message: '',
    results: {},
    randomDrinks: [],
  };



  componentDidMount(randomDrinks) {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
      .then(({ data }) => {
        console.log(data.drinks);
        this.setState(
          { randomDrinks: data.drinks }
        )
      });

  }

  input = (event) => {
    const randomDrinks = event.target.value;
    this.setState({ query: randomDrinks, loading: true, message: ' ' }, () => {
      this.componentDidMount(randomDrinks)
    });
  }
  render() {
     const { query, randomDrinks } = this.state
    // console.log(randomDrinks)
    // console.warn(this.state)

    // function renderList(props) {
    //   const drinkEl = props.randomDrinks.map((post) =>
    //     /*< div>
    //     <img src={query.strDrinkThumb} />
    //     </div >*/
    //     <h1>{query.strDrink}</h1>
    //   );}
    return (
      <>
        <div className="col-12 cold-md-6 col-lg-4">


          {
            ///Search Bar///
          }

          <div className="p-8">
            <div className="bg-white flex items-center rounded-full shadow-xl">
              <input
                type="text"
                placeholder="Search"
                name="randomDrinks"
                value={query}
                onChange={this.input}
                className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
              />
              <div className="p-4">
                <button key={this.renderList} className="btn-links text-white rounded-full p-2 hover:bg-pink-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                  icon
                </button>
              </div>
            </div>
          </div>

          {
            ///Buttons///
          }
          <div className="card">
            <div className="drinkDetails">
              <img id="drinkImg" className="mx-auto d-block"></img>
              <h5 id="drinkTitle"></h5>
              <ul className="drinkIngredients" id="drinkIngredients"></ul>
              <div id="drinkRecipeInfo"></div>
            </div>
            <div className="card-body" id="drinkNameDiv">
              {
                //<h5 className="card-title">Cocktail Recipe</h5>
                //<p className="card-text" id="drinkRecipe"></p>
                //<input
                //type="text"
                //placeholder="enter drink search here"
                // id="drinkName"
                //></input>
                //<button
                // id="drinkNameSubmit"
                // className="btn btn-danger btn-custom"
                // >
                // Find Drink
                // </button>
              }
              <button id="saveDrink" className="btn-links text-gray-800 hover:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                Save Drink
              </button>
              <button id="loadDrink" className="btn-links text-gray-800 hover:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                Load Drink
              </button>
              <p className="saveFeedback" id="saveDrinkFeedback"></p>
            </div>
          </div>

          {//showing api data
          }
          <ol>
            {this.state.randomDrinks.map(drink => {
              return (
              <li>
                {drink.strDrink}
                <img src={drink.strDrinkThumb}/>

              </li>
              )
            })}
          </ol>

        </div>

        { //<div>
          //{drinkEL}
          //</div>
        }

      </>
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

