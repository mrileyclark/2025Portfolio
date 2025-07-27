button = document.getElementById('btn');

localEats = ["Rye Knot", "Salt Face Mule Brewing Co", "The Madness", "Centerville", "HomeGrown", "Moe's BBQ", "Montford Deli", "The Porch", "La Carreta", "Bellagio Bistro", "Silverballs", "Zen Sushi", "Luella's BBQ", "Taco Temple", "Ay Caramba", "Siam Thai", "Mod Pizza"];

//define random 
function getRandomChoice(array) {
  if(array.length === 0) {
    return undefined;
  }

  const randomIndex= Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

//listen for click
button.addEventListener('click', () => {
  const choice = getRandomChoice(localEats)
  console.log(choice)
  document.getElementById('result').textContent = choice;
})
