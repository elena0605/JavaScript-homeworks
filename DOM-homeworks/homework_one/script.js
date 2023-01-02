// Change the page with JavaScript
// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed

let paragraphs = document.querySelectorAll("p");
console.log(paragraphs);
for (let paragraph of paragraphs) {
	paragraph.innerText = "The text in the paragraphs is changed";
}

let headers = document.querySelectorAll("h1");
console.log(headers);
for (let header of headers) {
	header.innerText = "The text in H1 tags is changed";
}

let header_three = document.getElementsByTagName("h3")[0];
header_three.innerText = "The text in H3 is changed";
