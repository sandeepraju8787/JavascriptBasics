//Strings are immutable.

let myName = "sandeep";
myName[1] = "t";
console.log(myName);
/*in javascript strings are immutable. so if you try to change the characters of a string using their index, 
js will simply ignore that line. even if the code was the following:
const name = "sandeep";
name[1] = "t";
console.log(
  name
); 
the output would be the same*/

//Re-declaration
var a = 1;
var a = 2;
console.log(a); // this is allowed and the value 2 from the last assignment will be printed

/*
let b = 1;
let b = 3;
console.log(b); // this is not allowed since b is a let variable and let can not be redeclared. 
*/

//Scope
var score = 2;
{
  let score = 5;
}
console.log(`${score} is my score`);
// This is allowed and the value of score will be 2 since let has its scope only inside the block. if let was defined outside
// and var was defined inside, then it would cause and error since var has functional scope and javascript will see that outside
// the block also there is a variable 'scope' that is already declared.
