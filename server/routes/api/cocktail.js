
                                       
let drinkPic = document.getElementById('drinkImg');
let drinkTitle = document.getElementById('drinkTitle');
//let drinkRecipeInfo = $('#drinkRecipeInfo');
//let drinkIngredients = $('#drinkIngredients');
//let drinkRecipe = $('#drinkRecipe');
let findDrinkButton = document.getElementById('#drinkNameSubmit');
let saveDrinkButton = document.getElementById('#saveDrink');
let loadDrinkButton = document.getElementById('#loadDrink');
//let saveDrinkFeedback = document.getElementById('#saveDrinkFeedback');
let randomDrink;

// Stock image attributes
drinkPoster.attr("src", "assets/images/drink-placeholder.png");
drinkPoster.attr("height", "300px");
drinkPoster.attr("width", "300px");



// Function for getting drink results from API
function findDrink(event) {
    event.preventDefault();
  
    //let drinkName = document.getElementById('drinkName').value;
    let apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  
    function getRandomCocktail() {
        fetch(apiUrl).then(function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          
          response.json().then(function(data) {
            if (data.drinks === null) {
            randomDrink = data.drinks[Math.floor(Math.random() * data.drinks.length)];
            console.log(randomDrink);}
            
          });
        })
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
    }
    
      getRandomCocktail(); 
  
}

findDrinkButton.on('click', findDrinkByName);





