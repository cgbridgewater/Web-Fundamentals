// mouse over ALERT!!

// function over(element) {
//     alert("mouseover");    
// }
    
// function out(element) {
//     alert("mouseout");    
// }


// mouse over action -->change color!!

function over(element) {
    element.style.backgroundColor = "lime";    
}
    
function out(element) {
    element.style.backgroundColor = "lightyellow";   
}

// function over2(element) {
//     element.style.backgroundColor = "yellow";    
// }
    
// function out2(element) {
//     element.style.backgroundColor = "lightblue";   
// }

// log the class for element
// function addShadow(element) {
//     console.log(element.classList)
// }

// console log the element
// function addShadow(element) {
//     console.log(element)
// }

// add a class to another class
function addShadow(element) {
    element.classList.add("shadow");
}

function removeShadow(element) {
    element.classList.remove("shadow");
}