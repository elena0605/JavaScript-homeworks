// Create a function called tellStory()
// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
// The function should return one big string with a story made from the arguments
// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
// The value that is returned from the function should be printed in the console or in alert

function tellStory(StringArray) {
	let bigString = `This is ${StringArray[0]}. ${StringArray[0]} is a nice person. Today, she is feeling ${StringArray[1]}. She is ${StringArray[2]} all day. The end.`;
	return alert(bigString);
}
tellStory(["Elena", "Happy", "Coding"]);

// Write a function that will take an array of 5 numbers as an argument and return the sum.
// Print it in the console or in alert
// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.

function sumNumbers(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return alert(sum);
}
sumNumbers([2, 5, 6, 8, 9]);

function validateNumber(array) {
	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] === "number") {
			console.log(array[i]);
		} else {
			console.log(
				`The item in the array is not a number. Please enter a number`
			);
		}
	}
}
validateNumber([2, 5, "6", 8, 9]);

// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"

function createString(array) {
	let string = "";
	for (let i = 0; i < array.length; i++) {
		string += `${array[i]} `;
	}
	return string;
}
createString(["Hello", "there", "students", "of", "SEDC", "!"]);

// Title: Looping structures
// Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.

let num = 1;
while (num >= 1 && num <= 20) {
	if (num % 2 == 0) {
		console.log(num + "\n");
	} else {
		console.log("");
	}
	num++;
}

//   Title: Looping structures
//   Description: Write a JavaScript function that will return:
//   The sum of the MAX and MIN numbers from an array with numbers
//   Ex: arr = [3, 5, 6, 8, 11]
//   Output: Max: 11, Min: 3, Sum: 14
//   Bonus: Try making the function work if there are other types of items in it

function sumOfMinMax(array) {
	let min = array[0];
	let max = array[0];
	let sum = 0;
	for (let i = 1; i <= array.length - 1; i++) {
		if (typeof array[i] != "number") {
			continue;
		} else if (max < array[i]) {
			max = array[i];
		} else if (array[i] < min) {
			min = array[i];
		}
	}
	return (sum = max + min);
}
console.log(sumOfMinMax([3, 5, 6, 8, 11]));

// Title: Looping structures
// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

function fullNames(firstNames, lastNames) {
	let joinArray = [];
	let numValue = 1;
	for (
		let i = 0, j = 0;
		i < firstNames.length, j < lastNames.length;
		i++, j++
	) {
		joinArray.push(`${numValue}.${firstNames[i]}, ${lastNames[i]}`);
		numValue++;
	}
	console.log(joinArray);
}
fullNames(["Bob", "Jill"], ["Gregory", "Wurtz"]);
