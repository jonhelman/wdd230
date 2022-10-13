//Create three variables that hold references to the input, button, and list elements using const.

const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

//Create an click event listener for the Add Chapter button using addEventListener and an anonymous function.  
//Example:  button.addEventListener('click', function() { ...
button.addEventListener('click', function() {
    const myItem = input.value;
    input.value = '';

//In the function block for adding a chapter, make sure the input is not blank and if not, do the following:

//create an li element
const listItem = document.createElement('li');
const listText = document.createElement('span');

//create a delete button
const listBtn = document.createElement('button');

//populate the li elements textContent or innerHTML with the input
listText.textContent = myItem;

//populate the button textContent with an ❌
listBtn.textContent = '❌';

//append the li element with the delete button
list.appendChild(listItem);

//append the list element with the li element just created and appended with text and the delete button
listItem.appendChild(listText);
listItem.appendChild(listBtn);


//add an event listener to the delete button that removes the li element when clicked
listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
  });

//send the focus to the input element
//clean up the successful add of a chapter by changing the input to nothing or the empty string and setting the focus to the input.
input.focus();
}
);