function updateCounter(){
    console.log(typeof counter.innerText);
    newNum = parseInt(counter.innerText)
    console.log(typeof newNum);
    counter.innerText = newNum +=1;
}