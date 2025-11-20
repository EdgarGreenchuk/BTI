console.log('Hello Wednesday')

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random()* (maxFloored - minCeiled + 1 ) + minCeiled );
}

// 1. Ridenam kamuoliuką. Į atitinkamus tag'us parašom skaičių ir ar skaičius lyginis/nelyginis.
// Lyginį skaičių nudažom mėlynai, nelyginį - raudonai.

const skaicius = document.querySelector('.uzduotis1 > p > span');
// lygNelyg.innerText = 'ziurim ar pataikem';

const ridenam = rand(1, 6);
skaicius.innerText = ridenam;

if(ridenam == 2 || ridenam == 4 || ridenam == 6) {

}