var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");
var deleteBtns = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	addLiEvent();
	// addBtnEvent();
	var deleteBtn = document.createElement("button");
	deleteBtn.classList.add("delete");
	deleteBtn.innerHTML = "Delete";
	li.insertAdjacentElement("afterend", deleteBtn);
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
	

function removeParent() {
	this.parentNode.remove();
}

function toggleDone(event) {
	event.currentTarget.classList.toggle("done");
}

function addBtnEvent() {
	//can't do forEach bc HTMLCollection is NOT an array
	for (let i = 0; i < deleteBtns.length; i++) {
		deleteBtns[i].addEventListener("click", removeParent);
	}
}

function addLiEvent() {
	//can't do forEach bc HTMLCollection is NOT an array
	for (let i = 0; i < listItems.length; i++) {
		listItems[i].addEventListener("click", toggleDone);
	}
}

addLiEvent();
addBtnEvent();
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
