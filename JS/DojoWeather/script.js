
// loading weather report pop up

function clicked(){
    alert("Loading weather report...")
}


// remove cookie pop up
function remove() {
    var element = document.querySelector(".window");
    element.remove();    
}


// Change high temp
var high1 = document.querySelector(".high1");
var high2 = document.querySelector(".high2");
var high3 = document.querySelector(".high3");
var high4 = document.querySelector(".high4");
var low1 = document.querySelector(".low1");
var low2 = document.querySelector(".low2");
var low3 = document.querySelector(".low3");
var low4 = document.querySelector(".low4");
function selectF(){
    high1.innerText = "75°"
    high2.innerText = "80°"
    high3.innerText = "69°"
    high4.innerText = "78°"
    low1.innerText = "65°"
    low2.innerText = "66°"
    low3.innerText = "61°"
    low4.innerText = "70°"
}