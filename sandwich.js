function sandwichCalculator(bread, cheese) {
  // Check if the user is authenticated
  if (!isAuthenticated()) {
    return;
  }

  // Calculate the number of possible sandwiches
  if (bread / 2 > cheese) {
    return cheese;
  } else {
    return bread / 2;
  }
}

// Create an interactive interface
const form = document.querySelector("form");
const breadInput = form.querySelector("#bread");
const cheeseInput = form.querySelector("#cheese");
const output = document.querySelector("#output");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the user input
  const bread = breadInput.value;
  const cheese = cheeseInput.value;

  // Calculate the number of possible sandwiches
  const numberOfSandwiches = sandwichCalculator(bread, cheese);

  // Display the output
  output.textContent = numberOfSandwiches;
});