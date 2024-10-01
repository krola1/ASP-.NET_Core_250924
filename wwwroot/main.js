//defines variables from HTML
const addButton = document.querySelector(".add-item");
const clearButton = document.querySelector(".clear-list");
const inputField = document.getElementById("input-field");
const listHeader = document.getElementById("list-header");
//defines main array
const toDoList = [];

// *******functions*********

//clears HTML - input-Field after use
const clearInputField = () => {
  inputField.value = "";
};
//clears created HTML nodes before they are to be re-generated
const clearHTML = () => {
  listHeader.innerHTML = "";
};
//transfers string data from HTML input-field to the toDoList array.
const fromFieldToArray = () => {
  fieldValue = inputField.value;
  toDoList.push(fieldValue);
};
// converts data from the array to HTML nodes. Adds an ID attribute to nodes so they can be removed from array later.
const fromArrayToHTML = () => {
  counter = 0;
  for (let item in toDoList) {
    listItem = document.createElement("li");
    listItem.setAttribute("id", counter);
    listItemTexst = document.createTextNode(toDoList[item]);
    listItem.appendChild(listItemTexst);
    listHeader.appendChild(listItem);
    counter++;
  }
  counter = 0;
};
//Listens for clicks on HTML node "add-button".
//When button is clicked, checks if there is data in input-field, and if true:.
//Calls clearHTML, fromFieldToArray, fromArrayToHTML and clearInputField functions
addButton.addEventListener("click", () => {
  if (inputField.value !== "") {
    clearHTML();
    fromFieldToArray();
    fromArrayToHTML();
    clearInputField();
  }
});
//Listens for keystrokes in the input field, if enter-key is pressed, checks if there is data in input-field. If both are true:
//Calls clearHTML, fromFieldToArray, fromArrayToHTML and clearInputField functions
inputField.addEventListener("keydown", (key) => {
  if (key.key === "Enter") {
    if (inputField.value !== "") {
      clearHTML();
      fromFieldToArray();
      fromArrayToHTML();
      clearInputField();
    }
  }
});
// Listens for clicks on HTML node clear-button.
//When the clear-button is pressed, sets the value of toDoList to an empty array and calls clearInputField and clear HTML functions.
clearButton.addEventListener("click", () => {
  toDoList.length = 0;
  clearInputField();
  clearHTML();
});

//Listens for clicks on the entire HTML document, returns the .target value for each element clicked.
//When node with target that matches for <li> elements is clicked, splice toDoList. Uses ID attribute to define splicepoint.
//also calls clearHTML and formArrayToHTML functions
document.addEventListener("click", (removeByClick) => {
  target = removeByClick.target;
  if (target.toString() === "[object HTMLLIElement]") {
    clearHTML();
    toDoList.splice(Number(target.id), 1);
    fromArrayToHTML();
  }
});
