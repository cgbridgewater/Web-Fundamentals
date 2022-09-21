var list = document.querySelector('.top-poke')


async function getpokeData() {
    var response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    var pokeData = await response.json();
    console.log(pokeData.results[0].name);
    for (var idx=0; idx< pokeData.results.length;idx++){
        console.log(pokeData.results[idx].name);
        var listItem = document.createElement('li');
        listItem.innerText = pokeData.results[idx].name;
        list.appendChild(listItem);
    }
}
    
getpokeData();


var pokeContainer = document.querySelector('.pikachu')
var img = document.querySelector('img');

async function getPokeImg() {
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    var pokeData = await response.json();
    console.log(pokeData.sprites.front_default);
    img.src = pokeData.sprites.front_default;
    pokeContainer.appendChild(img);
}
getPokeImg();

// make it change front to back
async function changeImg(){
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    var pokeData = await response.json();

    if(img.src == pokeData.sprites.front_default){
        img.src = pokeData.sprites.back_default
    }
    else{
        img.src = pokeData.sprites.front_default
    }
}