//Conversion to Number
// let score = "33abc"; // converted number will be NaN
let score = "33"; // converted number will be a number. type will be number
//let score = null; // converted number will be 0. type will be number
//let score = undefined; // converted number will be NaN. type will be number
//let score = true; // converted number will be 1 or 0 based on true or false. type will be number
let convertedNumber = Number(score); //While conversions the Number datatype as you see has to start with Caps as it is a Class

console.log(convertedNumber, typeof convertedNumber);

//Conversion to Boolean
//let myFlag = "false"; // converted boolen will be true
//let myFlag = ""; //converted boolean will be false
//let myFlag = 10; // converted boolean will be true. which means if any data is assigned, converted boolean will be true.
let myFlag = undefined; //Null and undefines also will be converted to false

let convertedFlag = Boolean(myFlag);
console.log(convertedFlag, typeof convertedFlag);
