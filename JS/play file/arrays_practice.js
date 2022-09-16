// // // always hungry
// // alwaysHungry([3.14, "food", "pie", true, "food"]);
// // // this should console log "yummy", "yummy"
// // alwaysHungry([4, 1, 5, 7, 2]);
// // // this should console log "I'm hungry"

// // function alwaysHungry(arr){
// //     var matches = 0;
// //     for (var i = 0; i < arr.length; i++) {
// //         if( arr[i] == "food"){
// //             // console.log("Yummy");
// //             matches++;
// //         }
// //     }
// //     if(matches == 0){
// //         // console.log("I'm hungry")
// //     }
// // }


// // high pass filter
// // var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// // console.log(result); // we expect back [6, 8, 10, 9]


// // function highPass(arr, cutoff) {
// //     var filteredArr = [];
// //     for( var i = 0; i< arr.length; i++){
// //         if(arr[i] > cutoff){
// //             filteredArr.push(arr[i]) ;
// //         }
// //     } return filteredArr;
// // }
// // console.log(result);



// // // Better than average 
// // var result = betterThanAverage =[6, 8, 3, 10, -2, 5, 9];

// // function betterThanAverage(arr) {
// //     var sum = 0;

// //     for(var i=0; i<arr.length; i++) {
// //         sum = sum + arr[i];
// //     }


// //     var avg = sum / arr.length;
// //     var count = 0


// //     for (var i=0; i<arr.length; i++) {
// //         if(arr[i] > avg) {
// //             count++; 
// //         }
// //     }
// //     return count;
// // }
// // console.log(result); 


// // // array reverse // 

// function reverse(arr) {
//     var left = 0;
//     var right = arr.length - 1;
//     while(left < right){
//         var temp = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp;
//         left++;
//         right--;
//     }
//     return arr;
// }
// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result);

// var result = reverse(["a", "b", "c", "d", "e"]);

// function reverse(arr) {
//     var lt = 0;
//     var rt = arr.length-1;
//     while(lt<rt){
//     var temp = arr[lt];
//     arr[lt] = arr[rt];
//     arr[rt] = temp;
//     lt++;
//     rt--;
//     }
//     return arr;
// }
// // console.log(result);



// Fibonacci numbers have been studied for years and appear often in nature. Write a function that will return an array of Fibonacci numbers up to a given length n. Fibonacci numbers are calculated by adding the last two values in the sequence together. So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.//

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

var result = fibonacciArray(10);



function fibonacciArray(n) {
    var fibArr = [0,1]
    while(fibArr.length < n){
        for (i=0; i<n-2; i++) {
        var slot1 = [i]
        var slot2 = [i+1]
        var sum = fibArr[slot1] + fibArr[slot2];
        fibArr.push(sum);
        }
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



function fibonacciArray(n) {
    var fibArr = [0,1]
    while(fibArr.length < n){
        var slot1 = fibArr[fibArr.length-1];
        var slot2 = fibArr[fibArr.length-2];
        fibArr.push(slot1+slot2);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


