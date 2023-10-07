let expression = [];
let display;
let UserInput = ""

function getNumber(num){ 
    expression.push(num) //stores numbers in expression list
    UserInput = expression.join(' ') //converts the expression to string
    display.value = UserInput //shows expression

}

function getOperator(op){
    expression.push(op) //stores operations in expressionlist
    UserInput = expression.join(' ') //converts the expression to string
    display.value = UserInput //shows expression
}

function updateDisplay() {
  display.value = UserInput; //updates the Display
}

function clearDisplay() { //removes the expression
  expression = []
  UserInput = "";
  updateDisplay();
}

function calulationequals() {
  try {
    let parts = UserInput.split(' '); // Split the expression into numbers and operators
    let result = parseFloat(parts[0]);

    for (let i = 1; i < parts.length; i += 2) {//loops through the UserInputs as a part list
      let operator = parts[i];               //+ - / *
      let operand = parseFloat(parts[i + 1]);//numbers
      
      if(isNaN(parts[i])){ //if element is not a number, then has to be +, -, *, /

            if (parts[i] === "+") { //if +
                result += operand
            } else if (parts[i] === "-") {//if -
                result -= operand;
            } else if (parts[i] === "*") {//if *
                result *= operand;
            } else if (parts[i] === "/") {//if /
                result = parseFloat(result / operand);
            }
      }
}

        UserInput = result.toString();
        display.value = UserInput
        // updateDisplay();
    } catch (error) {  //catches an error
        display.value = 'Error';
    }
}

document.addEventListener("DOMContentLoaded", function () { //what is needed to use display as a global variable and to update 
    display = document.getElementById("display");           //the expression every time a button is clicked
    updateDisplay();
  
});
