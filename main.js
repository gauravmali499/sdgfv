import data from './data.json'
// (async function api(){
//     const responce = await fetch("https://res.cloudinary.com/des3si8bs/raw/upload/v1679912721/drinks_y1vudo.json");
//     var x = await responce.json();
//     dataBook(x);
// })();
console.log(data.drinks.length)
var arr = ["Watermelon","Grapefruit Juice","Mint","Strawberries","Lemon juice","Triple sec","Ice", "Lime juice","tequilla"];
for (let i = 0; i < arr.length; i++) {
  var product = document.getElementById("item");
  product.innerHTML += `<option value="" checked hidden>Select</option><option value=${arr[i]}>${arr[i]}</option>`;
}

(function data(){
    document.getElementById("item").addEventListener("change",function(){
      // if(document.getElementById("item").value == "Watermelon"){
      //   for (let i = 0; i <= data.drinks.length; i++) {
      //     document.getElementById("opt").innerHTML += `<div class="card">
      //     <img src="${data.drinks[i].strDrinkThumb}" alt="image not found" style="width:100%" id="image${i}">
      //     <div class="container">
      //       <h4><b id="name${i}">${data.drinks[i].strDrink}</b></h4> 
      //       <p id="instructions${i}">${data.drinks[i].strInstructions}</p> 
      //     </div>
      //   </div>`
      //   }
      // }
      console.log(data.drinks[0]);
    }) 
})();

