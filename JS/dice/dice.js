
var min = 0
var max = 6
function d6() {
    var roll = Math.random();
    roll = Math.floor(roll * (max - min + 1) + min);
    return roll
}
// function d6_2() {
//     var roll = Math.random();
//     roll = Math.floor(roll * (max - min + 1) + min);
//     return roll
// }
    
var playerRoll2 = d6(min,max);
var playerRoll1 = d6(min,max);
console.log("The player rolled: " + playerRoll1 + " and " + playerRoll2);
