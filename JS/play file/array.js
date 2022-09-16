// always hungry


function alwaysHungry(arr){
    var matches = 0;
    for (var i = 0; i < arr.length; i++) {
        if( arr[i] == "food"){
            console.log("Yummy");
            matches++;
        }
    }
    if(matches == 0){
        console.log("I'm hungry")
    }
}

// alwaysHungry([3.14, "food", "pie", true, "food"]); // this should console log "yummy", "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);  // this should console log "I'm hungry"

// high pass filter


function highPass(arr, cutoff) {
    var filteredArr = [];
    for( var i = 0; i< arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]) ;
        }
    } return filteredArr;
}
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]


// Better than average 

function betterThanAverage(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++) {
        sum = sum + arr[i];
    }
    var avg = sum / arr.length;
    var count = 0

    for(var i=0; i<arr.length; i++) {
        if(arr[i] > avg) {
            count++; 
        }
    }
    return count;
}
// var result = betterThanAverage ([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); 

// // // array reverse // 

var result = reverse(["a", "b", "c", "d", "e"]);

function reverse(arr) {
    var lt = 0;
    var rt = arr.length-1;
    while(lt<rt){
    var temp = arr[lt];
    arr[lt] = arr[rt];
    arr[rt] = temp;
    lt++;
    rt--;
    }
    return arr;
}
console.log(result);



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
