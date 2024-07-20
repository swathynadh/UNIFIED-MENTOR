const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button"); // Corrected selector

const specialChars = ["%", "/", "*", "+", "-", "="];
let output = "";

const calculate = (btnValue) => { 
    if (btnValue === "=" && output !== "") {
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.slice(0, -1); // Corrected typo: "String()" to "slice()"
    } else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.textContent)); // Corrected to get textContent instead of dataset
});
