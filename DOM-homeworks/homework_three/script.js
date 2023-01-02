// Create a recipe page from inputs
// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy :)
let recipeName = prompt("Enter your recipe Name:");
let numberOfIngredients = parseInt(prompt("Enter the number of ingredients:"));
let nameOfIngredients = [];
let counter = 0;

do {
	nameOfIngredients.push(prompt("Enter the name of the ingredient:"));
	counter++;
} while (counter < numberOfIngredients);

const table = document.createElement("table");
const tableBody = document.createElement("tbody");
const tableRow = document.createElement("tr");
const tableHeader = document.createElement("th");
tableRow.appendChild(tableHeader).innerText = recipeName;
tableBody.appendChild(tableRow);
for (
	let i = 0, j = 0;
	i < nameOfIngredients.length, j < nameOfIngredients.length;
	i++, j++
) {
	const row = document.createElement("tr");
	const cell = document.createElement("td");
	cell.innerText = `Ingredient ${i + 1}: ${nameOfIngredients[j]}`;
	row.appendChild(cell);
	tableBody.appendChild(row);
}
table.appendChild(tableBody);
document.body.appendChild(table);
table.setAttribute("border", "3");
