// CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”
// Bonus: enter the values from prompt or from HTML inputs

function Animal(name, kind) {
	this.name = name;
	this.kind = kind;

	this.speak = function (text) {
		console.log(`${kind} says: ${text}!!!`);
	};
}

let animalName = prompt("Animal name:");
let animalKind = prompt("Animal kind:");
let animalSay = prompt("What should animal say:");

let favoriteAnimal = new Animal(animalName, animalKind);
favoriteAnimal.speak(animalSay);
console.log(favoriteAnimal);
