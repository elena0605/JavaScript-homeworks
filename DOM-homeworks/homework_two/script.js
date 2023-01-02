// Print all numbers from an array and the sum
// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)
let numberArray = [10, 2, 3, 4, 5, 90, 5, 68];
let page = document.body.id;

if (page !== "html-one") {
	let list = document.createElement("ul");
	document.body.appendChild(list);
	let div = document.createElement("div");
	document.body.appendChild(div);
	let sum = 0;
	let string = ``;
	for (let i = 0; i < numberArray.length; i++) {
		let currentText = document.createTextNode(numberArray[i]);
		let list_item = document.createElement("li");
		list_item.appendChild(currentText);
		list.appendChild(list_item);
		sum += numberArray[i];
	}
	for (let i = 0; i < numberArray.length - 1; i++) {
		string += `${numberArray[i]} + `;
	}
	div.innerText = `${string} ${numberArray[numberArray.length - 1]}  = ${sum}`;
}
