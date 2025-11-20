function rand(min, max) { const minCeiled = Math.ceil(min); const maxFloored = Math.floor(max); return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) };


const petroRez = document.querySelector('.uzduotis2 > p > span');
const birutesRez = document.querySelector('.uzduotis2 > p + p > span');
const nugaletojas = document.querySelector('.uzduotis2 > p + p + p > span');

const ridenaPetras = rand(1, 6);
petroRez.innerText = ridenaPetras;

const ridenaBirute = rand(1, 6);
birutesRez.innerText = ridenaBirute;

if (ridenaPetras > ridenaBirute) {
nugaletojas.innerText = 'Petras';
petroRez.style.color = 'green';
} else {
if (ridenaBirute > ridenaPetras) {
    nugaletojas.innerText = 'Birute';
    birutesRez.style.color = 'green'
} else {
    nugaletojas.innerText = 'lygiosios'
}

}

