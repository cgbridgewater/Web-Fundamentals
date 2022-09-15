// always hungry

alwaysHungry([3.14, "food", "pie", true, "food"]); // this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);  // this should console log "I'm hungry"

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


// high pass filter
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]


function highPass(arr, cutoff) {
    var filteredArr = [];
    for( var i = 0; i< arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]) ;
        }
    } return filteredArr;
}
// console.log(result);



// Better than average 
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4

function betterThanAverage(arr) {
    var sum = 0;
    var average = 0;

    for( var i =0; i < arr.length; i++){
        sum = sum+arr[i]
    average = sum/arr.length
    }
    var count = 0;
    if(arr[i] > average){
        count ++
    }
    count = result
    return count;
}
console.log(result);

