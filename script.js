//all array method here with sutable example

//length-property
let fruits = ["Mango", "Pineapple", "Gavava", "Banana"];
let size = fruits.length;

document.getElementById("length-property").innerHTML = size;
document.getElementById("fruits-name").innerHTML = fruits.toString();


//push method fire here (here add kiwi)
fruits.push("Kiwi");
document.getElementById("push-method").innerHTML = fruits;

//pop method fire here  (this method used for removed last array)
document.getElementById("first-pop-method").innerHTML = fruits.pop();
document.getElementById("second-pop-method").innerHTML = fruits;

//concat method fire here
const pet = ["Cow", "Ox", "Dog", "Goat"];
const wild = ["Lion", "Tiger", "Wolf", "Panther"];

document.getElementById("obj1").innerHTML = pet.toString();
document.getElementById("obj2").innerHTML = wild.toString();

const animals = pet.concat(wild);
document.getElementById("concat-method").innerHTML = animals;




