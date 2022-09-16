
// Mama Mia!  It's Dojo Pizza Time!!

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
// pizza 1
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

// pizza 2
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

// pizza 3
var pizza3 = pizzaOven("gluten free", "traditional", ["vegan cheese"], ["onions", "mushrooms" , "peppers"]);
console.log(pizza3);

// pizza 4
var pizza4 = pizzaOven("flat bread", "barbeque", ["mozzarella", "feta" , "chedder"], ["chicken", "bacon bits", "onions" , "pineapple"]);
console.log(pizza4);





    var crustType = [
        "deep dish", 
        "hand tosssed", 
        "flat bread",
        "thin crust",
        "gluten free",
        ];

    sauceType = [
        "traditional", 
        "marinara", 
        "white sauce",
        "barbeque",
        ];

    cheeses = [
        "mozzarella",
        "feta",
        "chedder",
        "pepper jack", 
        "gouda",
        "parmesan",
        "nacho cheese",
        "vegan cheese",
        ];
    
    toppings = [
        "pepperoni", 
        "peppers",
        "sausage", 
        "mushrooms", 
        "olives", 
        "onions",
        "canadian bacon", 
        "pineapple", 
        "bacon bits",
        "chicken"
        ];
    
    // random number of items selected
function randomQty(max,min) {
    return Math.floor(Math.random() * max - min) + min;
}

// random item selector for individual items
function randomItem(arr){
    var i = Math.floor(arr.length * Math.random());
        return arr[i];
}

    
function randomPizza() {
    var pizza = {};
    pizza.crustType = randomItem(crustType);
    pizza.sauceType = randomItem(sauceType);
    pizza.cheeses = [];
    pizza.toppings = [];
    for(var i=0; i<randomQty(4,1); i++){
        pizza.cheeses.push(randomItem(cheeses));
    }
    for(var i=0; i<randomQty(6,2); i++){
        pizza.toppings.push(randomItem(toppings));
    }
    return pizza
}

console.log(randomPizza());