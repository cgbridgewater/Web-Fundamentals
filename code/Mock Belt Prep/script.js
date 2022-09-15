
// Timeout for discount
setTimeout(function(){
    window.confirm("Claim offer now!")

}, 10000);

// Form search pop-up
function search(event){
    event.preventDefault();
    const formData = new FormData(form);
    console.log(formData.get('search'));
    
    alert(formData.get('search'));
}
var form = document.querySelector('form');
form.addEventListener('submit', search);


// Add to cart
var name = 5
// var buttons = document.querySelectorAll('button');
var cartAmount = document.querySelector('span');
// console.log(buttons);

// for (var i = 0; i < buttons.length; i++){
//     buttons[i].addEventListener('click', increaseCart);
// }
function increaseCart(){
    console.log("in increase cart");
    console.log(cartAmount.innerText);
    var cart = parseInt(cartAmount.innerText);
    cart = cart + 1;
    cartAmount.innerText = cart
}


