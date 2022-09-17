// am i working?
console.log("page loaded...");


// name tag change (completed)
var nameTag = document.querySelector(".nameTag");
function changeH1(){
    nameTag.innerText = "Master of Ninjas"
}


// connection requests - accept and pop user 1 
var added = 467;
var addedElement = document.querySelector("#added");
function remove1() {
    var element = document.querySelector("#card-list-item");
    element.remove();
    added ++;
    addedElement.innerText = added;
    count --;
    countElement.innerText = count;
}


// connection requests - accept and pop user 1
function remove3() {
    var element = document.querySelector("#card-list-item2");
    element.remove();
    added ++;
    addedElement.innerText = added;
    count --;
    countElement.innerText = count;
}


// connection request - close and pop user 1
var count = 2;
var countElement = document.querySelector("#count");
function remove2() {
    var element = document.querySelector("#card-list-item");
    element.remove();    
    count --;
    countElement.innerText = count;
}


// connection request - close and pop user 1
function remove4() {
    var element = document.querySelector("#card-list-item2");
    element.remove();    
    count --;
    countElement.innerText = count;
}