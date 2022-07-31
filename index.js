// Problem 1: 
// Total Amount 1000 taka 
// Cost buy orance and apples 700 take 
// Reture take is 300 taka 

// solving problem :

var totalAmount = 1000;

var mangoPrice = 300;
var orancePrice = 400;

var costAmount = (mangoPrice + orancePrice)


var returenMoney = (totalAmount - costAmount);

console.log(returenMoney);


// Problem 2: 

// Five subject number below :

// Bangla = 75.25
// Biology = 65
// Mathematice = 80
// chemistry = 35.45
// physics = 99.50

var bangla = 75.25
var biology = 65
var mathematice = 80
var chemistry = 35.45
var physics = 99.50

var allNumberAdded = (bangla + biology + mathematice + chemistry + physics)

// parseInt 
var averageMarks = parseInt(allNumberAdded / 5)
console.log(averageMarks);

// parseFloat 
var averageMarks = parseFloat(allNumberAdded / 5).toFixed(2);
console.log(averageMarks);

console.log(typeof averageMarks);



// Problem 3: 

// Two string added 

// First string is : I am going to be 
// Second string is : an awesome web developer 

var firstString = 'I am going to be ';

var secondString = 'an awesome web developer.'

var addedString = (firstString + secondString);

console.log(addedString);



// Problem 4: 

// Full number is = 119
// divied the number is = 5 
// bagsesh thakbe number = 4

var fullNumber = 119;
var diviedNumber = 5;
var bagseshNumber = (fullNumber % diviedNumber);
console.log(bagseshNumber);