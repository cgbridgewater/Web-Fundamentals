// color change based on text color name 

var colors = document.querySelectorAll(".color");
    
function applyColors(){
    for(var i=0; i<colors.length; i++) {
        colors[i].style.color = colors[i].innerText;
    }
}




// color change based on selected color "all colors"
// var, arrayname.length and  element name must ALL match 
// class name in the query finder will catch all class names that match

var allChanges = document.querySelectorAll(".allChange")

function getColor(element) {
    for(var i =0; i< allChanges.length; i++){
        allChanges[i].style.color = element.value;
    }
}





// // temp conversion functions
//  c2f and f2c is calculating temp changes
// these functions are called in the below function

function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}


// temp change function
// // for loop is making changes inclusive of the 1-8 temp locations
// var tempSpan is adding the ID "temp" to the loop number generated ie: temp1, temp2, temp3 etc
// the if statement is changing temp if the selector is on °C, else is if on °F and when the selector is selected it recalls the above function to run the temp math


function convert(element) {
    // console.log(element.value);
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C") {
            tempSpan.innerText = f2c(tempVal);
        } else {
            tempSpan.innerText = c2f(tempVal);
        }
    }
}