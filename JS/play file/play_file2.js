// // // a for loop

// // for (var num = 0; num <= 10; num ++){
// //     console.log(num);
// // }


// // // if statement

// // // var day = "friday"

// // // if(day == "friday"){
// // //     console.log("its friday!!")
// // // }ifelse (day == "saturday", "sunday") {
// // //     console.log("its the weekend")
// // // } else {
// // //     console.log("get to work!")
// // // }


// // // WEEK 3 QUESTIONS

// // var arr = [2,4,6,8,-2,-5,4,9,-60]
// // function positiveNegative(){
// //       var positive = []
// //     var negative = []
// //   for(let i = 0; i< arr.length; i++){
// //     if(arr[i]<0){
// //       negative.push(arr[i])
// //     }
// //   }
// //   console.log(negative)
// // }
// // positiveNegative()



// //         // A
// //         var num1 = 2
// //         console.log(num1+3)
// //         // B
// //         var num2 = 2
// //         num2 = num2 + 3
// //         console.log(num2)
// //         // C
// //         function add(num3, num4) {
// //             sum = num3 + num4
// //             console.log(sum)
// //             return sum
// //         }
//         add(2,3)
//         // D = all of the above
//         // E = None of the above   <<---- A & B WILL CONSOLE LOG IT, BUT NOT PRINT/RETURN IT TO THE PAGE



//   for(var i = 0; i < 10; i++){
//     console.log(i);
//   }

// console.log("LINE BREAK");

// var names = ['caden', 'lauren', 'justina']



//         for (var idx = 0; idx < names.length; idx ++){
//           console.log(idx);
//         }


//         console.log("LINE BREAK");

//         for (var idx = 0; idx < names.length; idx ++){
//           console.log(idx);
//         }


// function sumAllNums(){
//   var sum = 0
//   for (var i = 0; i <101; i++){
//   sum =sum + i;
// }
// return sum
// }
// var total = sumAllNums();
// console.log(total)



function sumEvenNum(){
  var sum = 0
  for(var x=1; x<101; x++){
    if (x%2 ===0){
      sum +=x;
    }
  }
  return sum;
}
var total = sumEvenNum()
console.log(total);



function fibonacciArray(n) {
  // the [0, 1] are the starting values of the array to calculate the rest from
  var fibArr = [0, 1];
  while(fibArr.length < n) {
      var prev = fibArr[fibArr.length-1];
      var prevprev = fibArr[fibArr.length-2];
      fibArr.push(prev + prevprev);
  }
  return fibArr;
}
 
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]