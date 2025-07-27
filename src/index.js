function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe-output", {
    strings: "Your recipe will appear here...",
    autoStart: true,
  });
}

let recipeForm = document.querySelector("#recipe-form");
recipeForm.addEventListener("submit", generateRecipe);
