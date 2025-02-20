// make an action for the exampleButton
// when the button is clicked, the text of the button will change
// to "I am clicked"
// and the background color will change to red
// and the text color will change to white
// and the border color will change to red
// and the border width will change to 2px


// get the button element
const exampleButton = document.getElementById('exampleButton');
const mainText = document.getElementById('mainText');

// add an event listener to the button
exampleButton.addEventListener('click', function() {
    // change the text of mainText
    mainText.textContent = "You've pressed the button, congratulations it doesn't do shit";
});