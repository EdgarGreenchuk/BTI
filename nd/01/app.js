function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}



// 1 Uzduotis

let h1 = document.querySelector("h1"); 
if (h1) h1.textContent = "Vienas"; 
let h2 = document.querySelector("h2"); 
if (h2) h2.textContent = 2; 
let h3 = document.querySelector("h3"); 
if (h3) h3.textContent = 3; 
let h4 = document.querySelector("h4"); 
if (h4) h4.textContent = "Keturi"; 

// 2 Uzduotis
const bodyDivs = document.querySelectorAll('body > div');

bodyDivs[0].style.width = '100px';
bodyDivs[0].style.height = '100px';
bodyDivs[0].style.backgroundColor = 'blue';
bodyDivs[0].style.display = 'inline-block';

bodyDivs[1].style.width = '100px';
bodyDivs[1].style.height = '100px';
bodyDivs[1].style.backgroundColor = 'red';
bodyDivs[1].style.borderRadius = '50%';
bodyDivs[1].style.display = 'inline-block';

// 3 Uzduotis

let a = rand(0, 4);
let b = rand(0, 4);

let bigger = Math.max(a, b);
let smaller = Math.min(a, b);

let result = smaller === 0 ? "dalyba iš nulio negalima" : (bigger / smaller).toFixed(2);

const go3Spans = document.querySelectorAll('#go3 span');
go3Spans[0].textContent = bigger;
go3Spans[1].textContent = smaller;
go3Spans[2].textContent = result;

// 4 Uzduotis

let size1 = rand(50, 200);
let size2 = rand(50, 200);
let size3 = rand(50, 200);

let sizes = [size1, size2, size3];
sizes.sort((a, b) => a - b);

const go4Divs = document.querySelectorAll('#go4 div');

go4Divs.forEach((div, i) => {
    const size = sizes[i];

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.borderRadius = '50%'; // Apskritimas
    div.style.backgroundColor = 'lightblue';
    div.style.display = 'inline-block';
    div.style.margin = '5px'; // Tarpai tarp apskritimų
});


// 5 Uzduotis

const num1 = rand(-10, 10);
const num2 = rand(-10, 10);
const num3 = rand(-10, 10);


const go5Spans = document.querySelectorAll('#go5 span');


function setNumberWithColor(span, number) {
    span.textContent = number; 
    
    
    if (number < 0) {
        span.style.color = 'red'; 
    } else if (number > 0) {
        span.style.color = 'blue'; 
    } else {
        span.style.color = 'green'; 
    }
}

setNumberWithColor(go5Spans[0], num1);
setNumberWithColor(go5Spans[1], num2);
setNumberWithColor(go5Spans[2], num3);

// 6 Uzduotis

const candleAmount = rand(5, 3000);

const pricePerCandle = 1; // EUR

const subtotal = candleAmount * pricePerCandle;

let discount = 0

if (subtotal > 2000) {
    discount = 4;
    } else if (subtotal > 1000) {
    discount = 3;}

    const discountAmount = (subtotal * discount) / 100;

    const finalPrice = subtotal - discountAmount;

    const go6Section = document.querySelector('#go6');

    const amountSpan = go6Section.querySelector('[data-amount] span');
amountSpan.textContent = candleAmount;

const subtotalSpan = go6Section.querySelector('[data-subtotal] span');
subtotalSpan.textContent = subtotal.toFixed(2);

const discountSpan = go6Section.querySelector('[data-discount] span');
discountSpan.textContent = discount;

const totalSpan = go6Section.querySelector('[data-total] span');
totalSpan.textContent = finalPrice.toFixed(2);

console.log(discountAmount)


// 7 Uzduotis

const shape = rand(0, 2);

const go7Div = document.querySelector('#go7 div');

go7Div.style.width = '150px';
go7Div.style.height = '150px';
go7Div.style.backgroundColor = 'coral';
go7Div.style.display = 'inline-block';

if (shape === 0) {

    go7Div.style.borderRadius = '50%';
    
} else if (shape === 1) {
    
    go7Div.style.borderRadius = '0';
    
} else {
    // Trikampis Border Trick
    go7Div.style.width = '0';
    go7Div.style.height = '0';
    go7Div.style.backgroundColor = 'transparent';
    go7Div.style.borderLeft = '75px solid transparent';
    go7Div.style.borderRight = '75px solid transparent';
    go7Div.style.borderBottom = '150px solid coral';
}


// 8 UŽDUOTIS - Suskaičiuoti spalvotus apskritimus


const go8Divs = document.querySelectorAll('#go8 > div:not([data-result])');

let greenCount = 0;
let blueCount = 0;
let redCount = 0;

go8Divs.forEach(div => {
    const color = div.style.backgroundColor;
    
    if (color === 'green') {
        greenCount++;
    } else if (color === 'blue') {
        blueCount++;
    } else if (color === 'red') {
        redCount++;
    }
});


go8Divs.forEach(div => {
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.borderRadius = '50%';
    div.style.display = 'inline-block';
    div.style.margin = '5px';
});

const greenSpan = document.querySelector('#go8 [data-green] span');
const redSpan = document.querySelector('#go8 [data-red] span');
const blueSpan = document.querySelector('#go8 [data-blue] span');

greenSpan.textContent = greenCount;
redSpan.textContent = redCount;
blueSpan.textContent = blueCount;

// 9 UŽDUOTIS - Daugybos lentelė


const go9Rows = document.querySelectorAll('#go9 div');

go9Rows.forEach(row => {
    
    const spans = row.querySelectorAll('span');
    
    
    const num1 = Number(spans[0].textContent);
    
   
    const num2 = Number(spans[1].textContent);
    
    
    const result = num1 * num2;
    
    
    spans[2].textContent = result;
});
 
// 10 UŽDUOTIS - Nuspalvinti didelius keturkampius
 

const go10Divs = document.querySelectorAll('#go10 div');

go10Divs.forEach(div => {
    
    const width = parseInt(div.style.width);     
    const height = parseInt(div.style.height); 
    
    const area = width * height;
    
    if (area > 10000) {
        div.style.backgroundColor = 'red';
    } else {
        div.style.backgroundColor = 'lightgray'; 
    }
    
    div.style.display = 'inline-block';
    div.style.margin = '5px';
    div.style.border = '1px solid black'; 
});