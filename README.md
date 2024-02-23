<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Drink Cards</title>
<style>
  .card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    width: 200px;
    display: inline-block;
  }
  .card img {
    max-width: 100%;
    height: auto;
  }
</style>
</head>
<body>

<select id="ingredientDropdown">
  <option value="">Select Ingredient</option>
  <option value="Watermelon">Watermelon</option>
  <option value="Grapefruit Juice">Grapefruit Juice</option>
  <option value="Mint">Mint</option>
  <option value="Strawberries">Strawberries</option>
  <option value="Lemon juice">Lemon juice</option>
  <option value="Triple sec">Triple sec</option>
  <option value="Ice">Ice</option>
  <option value="Lime juice">Lime juice</option>
  <option value="Tequila">Tequila</option>
</select>

<div id="drinkCards"></div>

<script>
document.getElementById('ingredientDropdown').addEventListener('change', function() {
  const selectedIngredient = this.value.toLowerCase();
  fetch('https://res.cloudinary.com/des3si8bs/raw/upload/v1679912721/drinks_y1vudo.json')
    .then(response => response.json())
    .then(data => {
      const filteredDrinks = data.drinks.filter(drink => drink.strIngredients.toLowerCase().includes(selectedIngredient));
      renderDrinkCards(filteredDrinks);
    })
    .catch(error => console.error('Error fetching data:', error));
});

function renderDrinkCards(drinks) {
  const drinkCardsContainer = document.getElementById('drinkCards');
  drinkCardsContainer.innerHTML = '';
  drinks.forEach(drink => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = drink.strDrinkThumb;
    img.alt = drink.strDrink;
    card.appendChild(img);

    const name = document.createElement('p');
    name.textContent = drink.strDrink;
    card.appendChild(name);

    const instructions = document.createElement('p');
    instructions.textContent = drink.strInstructions;
    card.appendChild(instructions);

    drinkCardsContainer.appendChild(card);
  });
}
</script>

</body>
</html>