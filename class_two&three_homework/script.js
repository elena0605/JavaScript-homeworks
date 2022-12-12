// Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in
// Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:
// 0 - Rat
// 1 - Ox
// 2 - Tiger
// 3 - Rabbit
// 4 - Dragon
// 5 - Snake
// 6 - Horse
// 7 - Goat
// 8 - Monkey
// 9 - Rooster
// 10 - Dog
// 11 - Pig

let birthYear = parseInt(prompt("Enter your birth year:"));
let zodiacCalc = (birthYear - 4) % 12;

switch (zodiacCalc) {
	case 0:
		console.log("Your Chinese Zodiac Sign is Rat");
		break;
	case 1:
		console.log("Your Chinese Zodiac Sign is Ox");
		break;
	case 2:
		console.log("Your Chinese Zodiac Sign is Tiger");
		break;
	case 3:
		console.log("Your Chinese Zodiac Sign is Rabbit");
		break;
	case 4:
		console.log("Your Chinese Zodiac Sign is Dragon");
		break;
	case 5:
		console.log("Your Chinese Zodiac Sign is Snake");
		break;
	case 6:
		console.log("Your Chinese Zodiac Sign is Horse");
		break;
	case 7:
		console.log("Your Chinese Zodiac Sign is Goat");
		break;
	case 8:
		console.log("Your Chinese Zodiac Sign is Monkey");
		break;
	case 9:
		console.log("Your Chinese Zodiac Sign is Rooster");
		break;
	case 10:
		console.log("Your Zodiac Sign is Dog");
		break;
	case 11:
		console.log("Your Chinese Zodiac Sign is Pig");
		break;
	default:
		console.log("Could not find your Zodiac Sign");
		break;
}

// Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:
// object
// boolean
// number
// string
// undefined

function typeOfInput(input) {
	let result = typeof input;
	console.log(result);
}
typeOfInput({});
typeOfInput(true);
typeOfInput(5);
typeOfInput("5");
typeOfInput();

// Write a JavaScript function that will return:
// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer
// Bonus: Make the same function work for converting dog to human years as well
function convertAge(age) {
	let humanAge = age * 7;
	let dogAge = humanAge / 7;
	if (humanAge) {
		console.log(humanAge);
		if (dogAge) {
			console.log(dogAge);
		}
	} else {
		return;
	}
}
convertAge(10);

// Write a javascript function for an ATM:
// The ATM should give cash
// Should return "Not enough money" if you request more money
// Should return the ammount withdrawn and money left on the account if you have enough
// Note: Hardcode your account money in the program
// Bonus: Make it work with prompt()!

let accountValue = parseInt(prompt("Enter your account value:"));
function cashMachine(cash) {
	if (accountValue < cash) {
		console.log("Not enough money");
	} else {
		console.log(
			`You withdrawn ${cash} dollars,and you are left with ${
				accountValue - cash
			}`
		);
	}
}
