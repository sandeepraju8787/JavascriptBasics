//the reason to use iife is that we do not want the global scope to pullute the scope of the function. so we immediately
//invoke it. ()()the first paranthesis becomes the scope of the function and we define the function in it. second paranthesis
//is the one to call it.
// In interviews do not just say because you want to invoke it immediately. Also say the global scope pullution issue.

(() => {
  return console.log("DB connected");
})();

//iife with arguments

((name) => {
  return console.log(`Hello ${name}, Welcome to the class`);
})("sandeep");

// the format we wrote is unnamed iffe. we can also write a named iffe by writing a function declaration with a name
(function squareNum(num) {
  return console.log(num * num);
})(12);

let num1 = 10;
let num2 = 12;

function addTwoNum(val1, val2) {
  return val1 + val2;
}

addTwoNum(num1, num2);
