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
    const allcats = [...cats,`${name}`]
    return allcats;
}

function prependCat(name){
    const allcats = [`${name}`, ...cats]
    return allcats;
}

function removeLastCat(){
    const allcats = cats.slice();
     allcats.pop();
     return allcats;
}

function removeFirstCat(){
    const allcats = cats.slice();
     allcats.shift();
     return allcats;
}
