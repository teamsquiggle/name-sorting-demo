//-----------------------//
//  USER SELECTING DEMO  //
//  PROGRAMMED BY AKURO  //
//-----------------------//

var names = [];

// Inputs
const nameInput = document.getElementById("input-name");
const addButton = document.getElementById("add-name");
const clearButton = document.getElementById("clear-all");

// Text
const header = document.getElementById("header");

// Containers
const nameContainer = document.getElementById("names");

// Functions
function arrayToStringList(array) {
	if (array.length === 0) {
		return 'Name Sorting Demo';
	} else if (array.length === 1) {
		return array[0];
	} else if (array.length === 2) {
		return array.sort().join(' & ');
	} else {
		const sortedArray = array.sort();
		const items = sortedArray.slice(0, -1).join(', ');
		const lastItem = sortedArray[sortedArray.length - 1];
		return `${items}, & ${lastItem}`;
	}
}

// Event Listeners
nameInput.addEventListener('input', function() {
	if (nameInput.value.length > 0) {
		addButton.disabled = false;
	} else {
		addButton.disabled = true;
	}
})

addButton.addEventListener('click', function() {
	if (nameInput.value.length > 0) {
		names.push(nameInput.value);

		const newName = document.createElement("p");
		newName.innerHTML = nameInput.value;
		newName.setAttribute("aria-label", nameInput.value);
		newName.classList.add("name");
		nameContainer.appendChild(newName);

		header.innerHTML = arrayToStringList(names);

		addButton.disabled = true;
		clearButton.disabled = false;

		nameInput.value = "";
		nameInput.focus();
	} else {
		alert("The text field is empty.");
	}
})

clearButton.addEventListener('click', function() {
	if (names.length > 0) {
		names = [];

		header.innerHTML = arrayToStringList(names);

		nameContainer.innerHTML = "";

		addButton.disabled = true;
		clearButton.disabled = true;

		nameInput.value = "";
		nameInput.focus();

		if (names.length = 0) {
			clearButton.disabled = true;
		}
	} else {
		alert("There are no names. Add some!");
	}
})

// Names
setInterval(function() {
	var nameElements = document.querySelectorAll(".name");

	nameElements.forEach(nameElement => {
		nameElement.onclick = function() {
			var nameElementName = nameElement.getAttribute("aria-label");
			var index = names.indexOf(nameElementName);

			names.splice(index, 1);
	
			nameElement.remove();
	
			header.innerHTML = arrayToStringList(names);
		}
	});
}, 0);