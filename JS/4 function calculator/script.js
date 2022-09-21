console.log("page loaded... or is it??");

var displayDiv = document.querySelector("#display");
var num1 = "";
var num2 = "";
var operator = "";

// number input
function press(number) {
  num1 += number;
  displayDiv.innerText = num1;
}

// trigger operation keys
function setOP(key) {
  operator = key;
  num2 = num1;
  num1 = ""; 
  // displayDiv.innerHTML = "0";
}

// trigger clear key
function clr() {
  num1 = "";
  num2 = "";
  operator = "";
  displayDiv.innerText = "0";
}


// do the maths
function calculate() {
var a = parseFloat (num2);
var b = parseFloat (num1);
var calc = 0;
  if (operator == "+"){
    calc = a + b
  }
  else if (operator == "-"){
    calc = a - b
  }
  else if (operator == "*"){
    calc = a * b
  }
  else if (operator == "/"){
    calc = a / b
  }
  num1 = calc;
  operator = "";
  displayDiv.innerHTML = calc;
}
