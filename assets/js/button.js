// get the button element
const exampleButton = document.getElementById('exampleButton');
const mainText = document.getElementById('mainText');

// add an event listener to the button
exampleButton.addEventListener('click', function() {
    // change the text of mainText
    mainText.textContent = "You've pressed the button, congratulations it doesn't do shit";
});