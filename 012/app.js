function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
console.log("Labas Dziava Skriptai");
let myVar1 = 54 + 2;
console.log("myVar1:", myVar1);

let myResultDiv = document.querySelector('.my-result');

myResultDiv.innerText = myVar1;

myResultDiv.style.fontSize = '160px';

// font-size ===> fontSize nes kintamasis negali turėti "minusų"
// 160px ===> "160px" be kabučių tai būtų kintamojo vardas arba skaičius

let myH2 =document.querySelector('h2');

myH2.style.letterSpacing = '5px';

// parašyti JS kodą, kuris antrą h2 elementą nuspalvintu orange spalva

const h2Elements = document.querySelectorAll(".h2");

if (h2Elements.length >= 2) {
 
  h2Elements[1].style.color = "orange";
}

// arba let myH22 = document.querySelector("h2 + h2");
// myH22.style.color = "orange";  
// ! taisykle apie iš css kaip mes galime pasirinkti antrą h2 elementą naudojant JS

console.clear();

const A = 11;
const B = 5;

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(A / B);
console.log(A % B); //liekana
console.log(A ** B); //kelimas laipsniu


let myFancyRandom = rand (5, 18);

console.log(myFancyRandom)

const S = 0.2 + 0.4;

myResultDiv.innerText = S.toFixed(2) // suformatavimas ir vertimas i stringa

const myStr = "25";

const myNumb = parseInt(myStr); // stringa keicia i skaiciu

console.log(5 + myStr, 5 + myNumb);

let funNumber = 2;

funNumber++; // didinimas vienetu
funNumber++;

console.log(++funNumber);
console.log(funNumber);

const what = funNumber++ * ++funNumber;

console.log(what)

let bananas = "bananas";

bananas++

console.log(bananas, typeof bananas);

let daug = 5/0 ;

console.log(daug, typeof daug);

const vegetable1 = "Bulvė";
const action1 = "kepa ant sviesto";

const vegetable1InAction1 = vegetable1 + " " + action1;

console.log(vegetable1InAction1);

myResultDiv.innerText = vegetable1InAction1;

console.log(vegetable1[3], vegetable1[0], vegetable1[55], typeof vegetable1[55] );

console.log(vegetable1.length, vegetable1InAction1.length);

let kas;

console.log(kas);

// console.log(kur);


