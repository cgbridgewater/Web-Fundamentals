// am i working?
console.log("page loaded...");


// name tag change
var nameTag = document.querySelector(".nameTag");
function changeH1(){
    nameTag.innerText = "Master of Ninjas"
}


// connection requests - pop user
function remove1(el) {
    var element = document.querySelector("#card-list-item");
    // var element = el;
    element.remove();
}
function remove2(el) {
var element = document.querySelector("#card-list-item2");
// var element = el;
element.remove();
}


// connection request - reduce connection request count after accept/close


function subtract1(){
    badgeReq --;
    badgeReq.innerText = badgeReq;
    console.log(badgeReq)
}





// your connections - increase count from adding connection



// function add1() {
//     count ++;
//     countElement.innerText = "The count is " + count;
//     console.log(count)

// }






