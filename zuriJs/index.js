//  alert('what is your name?');
let nam = prompt('what is your name?');
let height = prompt('what is your height?');
let country = prompt('what country are you from?')


caps = nam.toLowerCase();
slice = caps.slice(1, nam.length);
let firstWord = nam[0].toLocaleUpperCase();
join = firstWord + slice


let yourHeight = height;

let yourCountry = country.toLocaleLowerCase();
con = yourCountry.slice(1, country.length);
let getFirstWord = country[0].toLocaleUpperCase();
getCountryName = getFirstWord + con

alert(`hello ${join}, your height is ${yourHeight} and you are from ${getCountryName}`);
