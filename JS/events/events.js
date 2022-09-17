console.log("working")

function clicked(){
    alert("I've been clicked")
}


function clicks(element){
    console.log(element);
}


function click(){
    element.innerText = "clicked";
}

// click to change label value

function pushed(element) {
    element.innerText = "clicked";
}

// click to change label value

function turnOff(element) {
    element.innerText = "Off";
}


// HOW TO CHANGE A HEADER OR LABEL????

var header = document.querySelector("h1");
function changeHeader(){
    header.innerText = "the header changed"
}

function setActive(element) {
    if(element.classList.includes("dark-mode")) {
        element.innerText = "Switch to light mode";
        element.classList.remove("dark-mode");
    } else {
        element.innerText = "Switch to dark mode";
        element.classList.add("dark-mode");
    }
}




// INCREASE COUNTING NUMBER by clicking button

function increaseAge(element){
    console.log(typeof element.innerText);
    var age = parseInt(element.innerText)
    element.innerText = age += 1;
}


