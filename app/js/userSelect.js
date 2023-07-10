//-----------------------//
//  USER SELECTING DEMO  //
//  PROGRAMMED BY AKURO  //
//-----------------------//

const users = [];

// Inputs
const nameInput = document.getElementById("input-name");
const addButton = document.getElementById("add-name");

// Text
const header = document.getElementById("header");

// Functions
function arrayToStringList(array) {
	if (array.length === 0) {
		return '';
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
addButton.addEventListener('click', function() {
	if (nameInput.value.length > 0) {
		users.push(nameInput.value);

		const newName = document.createElement("p");
		newName.innerHTML = nameInput.value;
		document.body.appendChild(newName);

		header.innerHTML = arrayToStringList(users);

		nameInput.value = "";
		nameInput.focus();
	} else {
		alert("The text field is empty.");
	}
});