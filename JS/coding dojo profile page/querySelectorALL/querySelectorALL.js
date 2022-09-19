// color change based on text color name 

var colors = document.querySelectorAll(".color");
    
function applyColors(){
    for(var i=0; i<colors.length; i++) {
        colors[i].style.color = colors[i].innerText;
    }
}




// color change based on selected color "all colors"
// var, arrayname.length and  element name must ALL match 
// class name in the query finder will catch all class names that match



var allChanges = document.querySelectorAll(".allChange")

function getColor(element) {
    for(var i =0; i< allChanges.length; i++){
        allChanges[i].style.color = element.value;
    }
}


