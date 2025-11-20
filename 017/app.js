console.log('Hello, darkness my old friend')

//  const clickMeNo1 = function() 
//  console.log('Button No1');

const buttonNo1 = document.querySelector('#nr1')
//inline funkcija
buttonNo1.addEventListener('click', function() {
console.log('Button No1');
});

// const clickMeNo2 = function() {
//  console.log('Button No2'); 
 //  }

 //Arrow funkcija
 const clickMeNo2 = () => {
 console.log('Button No2')
 }

const buttonNo2 = document.querySelector('#nr2')

// inline Arrow  TURBO SUPAPRASTINTA
buttonNo2.addEventListener('click', _ => console.log('Button No2'));


const sum1 = function(a, b) {
    return a + b;
}



const sum2 = (a, b) => {
    return a + b;
} 

// Jeigu funkcijos bloke yra tik 1 eilute galime supapatrastinti:

const sum3 = (a, b) => a + b;
    
console.log(sum1(5, 3));
console.log(sum2(5, 3));
console.log(sum3(5, 3));


const add5 = function(a) {
    return a + 5;
}

const add5a = (a) => {
    return a+ 5;
}
// jeigu yra tik 1 parametras, galima praleisti parametru skliaustelius
const add5b = a => a + 5;

console.log(add5(12));
console.log(add5a(12));
console.log(add5b(12));

const bebras1 = () => {
    return 'BEBRAS';
}

const bebras2 = () => 'BEBRAS';

const bebras3 = nenaudoju => 'BEBRAS'

// Kintamasis vardu _ yra naudojamas sintaksei uzpildyti, bet nenaudojamas skaiciavimose

const bebras4 = _ => 'BEBRAS';


console.log(bebras1());
console.log(bebras2());
console.log(bebras3());
console.log(bebras4());

console.clear();

// CIKLAI

for(let i = 0; i < 10; i++)

{
    console.log('Bla bla', i);
}

const word = 'radzaiaradarakukirdar';

let found = 'r raide nerasta';
let count = 0;

for(let i = 0; i < word.length; i++) {
    if (word[i] == 'r' ) {
        found = `"r" rasta ${i} vietoje`;
    }
}
console.log(found);

for(let i = 0; i < word.length; i++) {
    if (word[i] == 'r' ) {
        count++;
    }
}
console.log(`Zodyje ${word} yra ${count} "r"`);

let found1 = ''; 

for(let i = 0; i < word.length; i++) {
    if (word[i] == 'r' ) {
        found1 += `"r" rasta ${i} vietoje \n`;
    }
}
console.log(found1)

/*

Ciklai:

for
while
do while
for in
for of
switch

Ciklo valdymas:

break
continue

*/
