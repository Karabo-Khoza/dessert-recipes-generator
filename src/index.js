function displayRecipe(response) {
  new Typewriter("#recipe-output", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 1,
  });
  console.log("Recipe generated:", response.data.answer);
}

function generateRecipe(event) {
  event.preventDefault();

  let inputField = document.querySelector("#recipe-input");
  let dessertName = inputField.value.trim();
  let apiKey = "abcf5d3b0bd02t169o09a45ab84f1629";
  let prompt = `Please generate a recipe for ${dessertName}.`;
  let context =
    "You are a very knowledgeable and well travelled api assisstant. Please include ingredients, steps, and any special tips. First give the measured ingredients in point form seperated with a <br />, then the recipe in numerical form seperated with a <br />, then the special tips at the end. Put a title with an <h1> element, then put ingredients, steps, and special tips with an <h3> elements in their own lines. Put every line under each other. Make sure to choose a dessert that delicious and easy to make. The recipe should be suitable for a beginner cook.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);

  console.log("Generating recipe for:", dessertName);
}

let recipeForm = document.querySelector("#recipe-form");
recipeForm.addEventListener("submit", generateRecipe);
