const prompt = require('prompt-sync')({ sigint: true });
const fs = require('fs'); //filesystem
const { resolve } = require('path');
const path = require('path'); // non global

const pathname = path.join(__dirname, '/StringSeparation');

const str = prompt('Enter a String: ');
// console.log ('Your String=');
// console.log (String (str));

let alpha = "";

let special = "";
for (let i = 0; i < str.length; i++) {

    if ((str[i] >= 'A' && str[i] <= 'Z') ||
        (str[i] >= 'a' && str[i] <= 'z'))
        alpha += str[i];
    else
        special += str[i];
}

console.log(alpha)
console.log(special)