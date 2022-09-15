var monLunch = 12.88;
var metroFareReload = 44.50;
var monDinner = 34.29;
var tueCoffee = 5.83;
var tueLunch = 10.00;
// ...more purchases

var total = monLunch + metroFareReload + monDinner + tueCoffee + tueLunch // + ...more purchases

var purchasesWeekFeb15 = [
    12.88,
    44.50,
    34.29,
    5.83,
    10.00,
    // ...more purchases
];
var purchasesWeekFeb15 = [
    12.88,
    44.50,
    34.29,
    5.83,
    10.00,
    12.88,
    44.50,
    34.29,
    5.83,
    10.00
]


var total = 0;
for(var i=0; i<purchasesWeekFeb15.length; i++) {
    total += purchasesWeekFeb15[i];
}
// console.log("The total spent was: $" + total);


var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];

// user.push("jello");    
// console.log(user);

// user.pop();    
// console.log(user);

// console.log(user[0]);    // reading the value -- OUTPUT: Dwight    
// user[1] = "Martin";    // updating the value    
// console.log(user); 

console.log(user.length);    // 3    
user.pop();    
console.log(user.length);    // 2