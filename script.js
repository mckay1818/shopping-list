var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	addLiEvent();
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(event) {
	event.currentTarget.classList.toggle("done");
}

function addLiEvent() {
	//can't do forEach bc HTMLCollection is NOT an array
	for (let i = 0; i < listItems.length; i++) {
		listItems[i].addEventListener("click", toggleDone);
	}
}
addLiEvent();
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
