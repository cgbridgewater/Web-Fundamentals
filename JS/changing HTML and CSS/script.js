

// selecting between cat and dog img src

var animalImg = document.querySelector("#fav-animal");

console.log(animalImg);

function pickCat(){
    animalImg.src = "./cat.jfif";

}


function pickDog() {
    animalImg.src = "./dog.jfif";

}

// switching button


function setActive(element) {
    if(element.classList.includes("dark-mode")) {
        element.innerText = "Switch to light mode";
        element.classList.remove("dark-mode");
    } else {
        element.innerText = "Switch to dark mode";
        element.classList.add("dark-mode");
    }
}







// changing html element

var h3 = document.querySelector("h3");
h3.innerText = "New Title";



