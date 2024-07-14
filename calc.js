document.addEventListener('DOMContentLoaded', () => {
    // This ensures the code runs after the HTML is fully loaded

  // Select all the keys (buttons) on the calculator
  const keys = document.querySelectorAll('.key');

  // Select the display elements where the input and output will be shown
  const display_input = document.querySelector('.display .input');
  const display_output = document.querySelector('.display .output');

  // Initialize an empty string to hold the current input
  let input = "";

  // Loop through each key (button) and add a click event listener
  keys.forEach(key => {
    key.addEventListener('click', () => {
      // Get the value of the key that was clicked
      const value = key.dataset.key;

      // Clear the input and output if the "clear" key is pressed
      if (value === "clear") {
        input = "";
        display_input.innerHTML = "";
        display_output.innerHTML = "";
      }
        // Remove the last character from the input if the "backspace" key is pressed
       else if (value === "backspace") {
        input = input.slice(0, -1);
        display_input.innerHTML = input;
      }
      // Calculate and display the result if the "=" key is pressed
       else if (value === "=") {
        try {
          const result = eval(input);
          display_output.innerHTML = result;
        } catch (error) {
          display_output.innerHTML = "Error";
        }
      } 
      // Add or remove brackets based on the current input
      else if (value === "brackets") {
        if (
          input.indexOf("(") === -1 || 
          (input.indexOf("(") !== -1 &&
          input.indexOf(")") !== -1 &&
          input.lastIndexOf("(")
          < input.lastIndexOf(')'))
        ) {
          input += "(";
        } else if (
          input.indexOf("(") !== -1 && 
          (input.indexOf(")") === -1 ||
          (input.indexOf(")") !== -1 && 
          input.lastIndexOf("(") > input.lastIndexOf(')')))
        ) {
          input += ")";
        }
        display_input.innerHTML = input;
      }
      // For all other keys, add their value to the input string
       else {
        input += value;
        display_input.innerHTML = input;
      }
    });
  });
});

function
