// function displayName(){
//     console.log('you are alive!');
// }

var nameTag = document.querySelector("#name-tag");
function setName(element) {
    console.log(element.value);
    nameTag.innerText = element.value;
}
