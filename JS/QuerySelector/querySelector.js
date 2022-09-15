// counter

var count = 1;
var countElement = document.querySelector("#count");

console.log(countElement)

function add1() {
    count ++;
    countElement.innerText = "The count is " + count;
    console.log(count)

}

function subtract1(){
    count --;
    countElement.innerText = "The count is " + count;
    console.log(count)
}


// Both of these will select the h1 tag
var h1 = document.querySelector("h1");
var title = document.querySelector("#title");


// combine selectors -- selecting image inside of class 'nav'
// NOTE!!! if multiple elements match the querySelector it will return the first element it finds
// if no elements are found it will get back 'null'

var logoImg = document.querySelector(".nav img");