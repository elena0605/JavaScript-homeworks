// Write a Javascript function that will dynamiclly create a table
// User should input the number of Colums and Rows
// In every table cell print which row and column it is (ex. Row-3 Column-1)

let numberOfRows = parseInt(prompt("Please enter the number of Rows"));
let numberOfColumns = parseInt(prompt(`Please enter the number of Columns`));
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

for (let i = 0; i < numberOfRows; i++) {
	let row = document.createElement("tr");
	for (let j = 0; j < numberOfColumns; j++) {
		let cell = document.createElement("td");
		cell.innerText = `Row-${i + 1} Column-${j + 1}`;
		row.appendChild(cell);
	}
	tableBody.appendChild(row);
}

table.appendChild(tableBody);
document.body.appendChild(table);
table.setAttribute("border", "3");
