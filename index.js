// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function  destructivelyAppendCat(name){
    cats.splice(3,0,`${name}`);
    return cats;
}

function  destructivelyPrependCat(name){
    cats.splice(0,0,`${name}`);
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.splice(-1);
    return cats;
}

function destructivelyRemoveFirstCat(){
    cats.splice(0,1);
    return cats;
}

function appendCat(name){
    const newCats = [...cats,`${name}`]
    return newCats;
}

function prependCat(name){
    const newCats = [`${name}`, ...cats]
    return newCats;
}

function removeLastCat(){
    const newCats = cats.slice();
     newCats.pop();
     return newCats;
}

function removeFirstCat(){
    const newCats = cats.slice();
     newCats.shift();
     return newCats;
}
