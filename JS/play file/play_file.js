
// add two numbers

// function addNums(num1,num2){
//     return num1+num2;
// }
// var total = addNums(10,12);
// console.log(total);


// send two numbers as variables into function (SUM)

// var x = 10
// var y = 22
// var sum = 0

// function doMath(){
//     return x+y;
// }
// sum = doMath(x,y);
// console.log(sum);







// age check


// var x = 2022
// var y = 1990
// var sum = 0

// function doMath(){
//     return x-y;
// }
// sum = doMath(x,y);
// console.log('age is ' + sum);


// if (sum<21) {
//     console.log('you are ' + 'under 21');
// } 
// else if (sum>21) {
//     console.log('you are ' + 'over 21, Drinks are on you!!');
// }
// else {
//     console.log('you are ' + '21! Drinks are on you!!');
// }


// playing arround

// var numbers = [2,4,6,8,10];

// var names = ['tim','steve','mike'];

// names.push('chris');

// names[1] = 'bobby'

// console.log(names);

// numbers.pop()

// console.log(numbers)

// var age = 22;

// if ( age >= 25 ) {
//     console.log("you are too old for Leo");
// }else{
//     console.log("Leo says 'come on in!'");
// }

var age = 22.0

if (age== 22){
    console.log('match')
}


function chooseLunch(element) {
    alert("You picked " + element.value);
}



var nameTag = document.querySelector("#name-tag");
function setName(element) {
    console.log(element.value);
    nameSpan.innerText = element.value;
}
