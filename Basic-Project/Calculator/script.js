// Select the display input field and all button elements within the .buttons container
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");

// Define special characters that represent operations
const specialChars = ["%", "/", "*", "+", "-", "="];
let output = "";

// Function to handle calculation logic based on button value
const calculate = (btnValue) => { 
    if (btnValue === "=" && output !== "") {
        // Replace '%' with division by 100 and evaluate the expression
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        // Clear the output for 'AC' button
        output = "";
    } else if (btnValue === "DEL") {
        // Remove the last character for 'DEL' button
        output = output.slice(0, -1);
    } else {
        // Prevent adding an operation at the start
        if (output === "" && specialChars.includes(btnValue)) return;
        // Append the button value to the output string
        output += btnValue;
    }
    // Update the display with the current output
    display.value = output;
};
// Add event listeners to each button for click events
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.textContent)); // Use textContent of the button
});

// Add a global event listener for keydown events to handle keyboard input
document.addEventListener("keydown", (e) => {
    // Define allowed keys for input
    const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "%", "/", "*", "+", "-", "Enter", "Backspace"];
    if (allowedKeys.includes(e.key)) {
        // Map 'Enter' key to '=' button functionality
        if (e.key === "Enter") {
            calculate("=");
        // Map 'Backspace' key to 'DEL' button functionality
        } else if (e.key === "Backspace") {
            calculate("DEL");
        } else {
            // Handle other allowed keys as their respective values
            calculate(e.key);
        }
    } else {
        // Prevent default action for disallowed keys
        e.preventDefault();
    }
});
