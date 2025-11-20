console.log("Labas, Bebriau!");


var x = 10;

console.log(x);


var pasisveikinimasSuBarsuku = "Labas rytas, ponas Barsukai!";

console.log(x, pasisveikinimasSuBarsuku); // MATAVIMAS

let L = 20; //deklaracija - vardo ir reikšmės priskyrimas
const N = 20;

// 1. Kintamojo vardas
// 2. Kintamojo reikšmė (turinys)
// 3. Kintamojo tipas

let K1 = 25; // tipas Number
let K2 = `Barsukas`; // tipas String
let K3 = `102`; // tipas String
let K4 = 54.78; // tipas Number
let K5 =  -78.0002; // tipas Number 

let K20  = K1 + 30;

console.log(K20);

let K30 = 100 + 20 * 5;
console.log(K30);

let K40 = K1 + K3; // `sulipdymas` sujungimas (konkatenacija)
console.log(K40, typeof(K40)); // tipo pasitikrinimas

let K50 = K2 +" "+ K2;
console.log(K50);

console.log(5 + 12 + 6 + "Labas" + 20);

let bebrasVardas = "Jonas";
let bebrasAmzius = 12;

// Object tipas
let bebras = {
    vardas: "Jonas", //cia yra Property
    amzius: 12

}

bebras.uodega = "Pusilgė"; // pridedame nauja Property
bebras.amzius = 15; // keiciame reiksme

console.log(bebras);

console.log(bebras.amzius);

console.log(document);


let h1 = document.querySelector("h1");

console.log(h1, typeof h1);

let b = document.querySelector("body");

console.log(b, typeof b);

let color = "blue";
let like = "sky"; 
let dark = "dark";  

let bodyColor = like + color;

b.style.backgroundColor = bodyColor;

