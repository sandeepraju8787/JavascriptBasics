let myArray = [12, 22, 43, 34, 55];
let newArray = myArray.slice(0, 3); //prints the array from start index to 1-end index.
// console.log(newArray, myArray);

let anotherArray = [12, 33, 234, 42, 12, 243];
//let updatedArray = anotherArray.splice(0, 3); // sure splice prints the array from start index to 1-end index.
//                                              but also removes these elements from the original array
//console.log(updatedArray, anotherArray);

//Array.pop to add an element to the end of the array (modifies the original array)
let result = anotherArray.push(12);
//console.log(anotherArray); // printing result will print only the new length of the array. if you want to print the new
//                          array, then print the original array. which mean array.push changes the original array.

//Array.concat + Spread operator. if you want to create a new array by appending new element to the end of the original array
let result2 = anotherArray.concat(152);
//onsole.log(result2);
//using the spread operator to perform the same operation
let result3 = [...anotherArray, 198];
//console.log(result3);

let firstArr = [3, 21, 1];
let secondArr = [54, 2, 12];
const result4 = [...firstArr, ...secondArr];
//console.log(result4);

//spreading or flattening nested arrays
let nestedArray = [1, 2, 4, [5, 2, 5], 7, [7, 5, [5, 2]]];
const flattenedArray = nestedArray.flat(Infinity);
//console.log(flattenedArray, flattenedArray.length, nestedArray.length);

//creatin array from variables
let score1 = 200;
let score2 = 300;
let score3 = 490;
// console.log(Array.of(score1, score2, score3));

//converting a string/object to array
let subject1 = "science";
//console.log(Array.from(subject1));

//convert the values of an object to array
let subjects = {
  sub1: "science",
  sub2: "maths",
  sub3: "social",
  sub4: "english",
};
console.log(Array.from(Object.values(subjects)));
console.log(Array.from(Object.keys(subjects)));
