


$(document).ready(function(){
    // same as below!!
    // var h1 = document.querySelector('h1')

    // h1.addEventListener('click', myFunction)

    // function myFunction(){
    //     h1.innerText = "I love web fund"
    // }

$('h1').click(function(){
    this.innerText = "I love we fund"
})


// button click to change container color
$('button').click(function(){
    if(this.innerText == "Blue"){
        $('.row').css('background-color' , this.innerText);
        $('h1').css('color', 'white');
    }
    else{
        $('h1').css('color', 'black');
        $('.row').css('background-color' , this.innerText);
    }
})

// fade out
// $('.fade-toggle').click(function(){
//     $('.row').fadeToggle(500);
// })

// slide out
$('.fade-toggle').click(function(){
    $('.row').slideToggle(2000);
})






})