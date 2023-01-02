// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.
// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML

let button = document.querySelector("button");
let titleBook = document.getElementById("bookTitle");
let authorBook = document.getElementById("bookAuthor");
let elementDisplay = document.getElementById("display");

function Book(title, author, readingStatus) {
	this.title = title;
	this.author = author;
	this.readingStatus = readingStatus;

	this.readingInfo = function () {
		if (readingStatus.value === "true") {
			elementDisplay.innerText = `Already read '${this.title}' by ${this.author}`;
		} else if (readingStatus.value === "false") {
			elementDisplay.innerText = `You still need to read '${this.title}' by ${this.author}`;
		}
	};
}

button.addEventListener("click", function () {
	let titleValue = titleBook.value;
	let authorValue = authorBook.value;
	let statusRead = document.getElementById("readBook");
	let statusNotRead = document.getElementById("notRead");
	let status;
	if (statusRead.checked) {
		status = statusRead;
	} else if (statusNotRead.checked) {
		status = statusNotRead;
	}
	let book = new Book(titleValue, authorValue, status);
	book.readingInfo();
	titleBook.value = "";
	authorBook.value = "";
	statusRead.checked = false;
	statusNotRead.checked = false;
	
});
