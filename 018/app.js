function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

console.log('Hello, Loop!');

// Duotas žodis "Meškėnas". Reikia konsolėje atskirai atspausdinti po vieną visas raides.

const word = 'Meškėnas' ;
let out = '';

for (let i = 0; i <word.length; i++ ){
    console.log(word[i]);
    out += word[i] + '\n';
}
console.log(out);

// Duotas žodis "Meškėnas". Reikia HTML žodį atspausdinti stulpeliu

const word2 = 'Meškėnas';
let htmlOut = '';

for (let i = 0; i < word2.length; i++) {
    htmlOut += word2[i] + '<br>';
}
const div = document.createElement('div');
div.innerHTML = htmlOut;
document.body.appendChild(div);

//// 
console.clear();


let number1;


/* do {
number1 = rand(0, 10);
console.log(number1);

} while(number1 > 5);

let coin = rand(0,1) ? 'H' : 'S';
console.log(coin);
*/

// Mesti monetą, kol iškris H t.y. herbas

/* let coin = rand(0,1) ? 'H' : 'S';

while (coin !== 'H') {
    coin = rand(0, 1) ? 'H' : 'S';
    console.log(coin);
}

console.log('Iškrito herbas!');
*/

// Mesti monetą, kol iškris 3 H t.y. tris kartus herbas

let coin;

do {
    coin = rand(0,1) ? 'H' : 'S';
    
}
while (coin !== 'H');

// Mesti monetą, kol iškris 3 H t.y. 3 kartus herbas



let saugiklis = 100;

let countH = 0;   

while (countH < 3) {
    coin = rand(0,1) ? 'H' : 'S';
    console.log(coin);

    if (coin === 'H') {
        countH++;
    }
    saugiklis--;
    if (!saugiklis) {
        console.log('Suveike saugiklis');
        break;
    }
}

console.log('Iškrito 3 herbai!');