// // a for loop

// for (var num = 0; num <= 10; num ++){
//     console.log(num);
// }


// // if statement

// // var day = "friday"

// // if(day == "friday"){
// //     console.log("its friday!!")
// // }ifelse (day == "saturday", "sunday") {
// //     console.log("its the weekend")
// // } else {
// //     console.log("get to work!")
// // }


// // WEEK 3 QUESTIONS

// var arr = [2,4,6,8,-2,-5,4,9,-60]
// function positiveNegative(){
//       var positive = []
//     var negative = []
//   for(let i = 0; i< arr.length; i++){
//     if(arr[i]<0){
//       negative.push(arr[i])
//     }
//   }
//   console.log(negative)
// }
// positiveNegative()



//         // A
//         var num1 = 2
//         console.log(num1+3)
//         // B
//         var num2 = 2
//         num2 = num2 + 3
//         console.log(num2)
//         // C
//         function add(num3, num4) {
//             sum = num3 + num4
//             console.log(sum)
//             return sum
//         }
// add(2,3)
// D = all of the above
// E = None of the above   <<---- A & B WILL CONSOLE LOG IT, BUT NOT PRINT/RETURN IT TO THE PAGE



for(var i = 0; i <= 10; i++){
// console.log(i);
}

console.log("LINE BREAK");

// var names = ['caden', 'lauren', 'justina']



// for (var idx = 0; idx < names.length; idx ++){
//   console.log(idx);
// }


// console.log("LINE BREAK");

// for (var idx = 0; idx < names.length; idx ++){
//   console.log(idx);
// }



var is_5_even = 5 % 2 == 0;
var is_500_even = 500 % 2 == 0;

// console.log(is_500_even); // true 
// console.log(is_5_even);// true 

var is78DivisibleBy3 = 78 % 3 == 0;
// console.log(is78DivisibleBy3); // true



for(var i=0; i<3; i++) {
    console.log(i);
}
    
console.log("LINE BREAK")
var i = 0;
while(i<3) {
    console.log(i);
    i++;
}




var start = 0;
var end = 10;
    
while(start <= end) {
    console.log("start: " + start + ", end: " + end);
    start++;
    end--;
}
"start: 0, end: 10"
"start: 1, end: 9"
"start: 2, end: 8"
"start: 3, end: 7"
"start: 4, end: 6"
"start: 5, end: 5"


console.log( 8 % 3 );

var x = "0";
for(var i=1; i<5; i++) {
     x += i;
 }
 console.log(x);

 console.log( 8 % 3 == 2 );