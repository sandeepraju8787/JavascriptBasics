//Prototype functions on string
const myName = "Constantine";
const reversedString = myName.split("").reverse().join("");
// console.log(reversedString);

//A function to check if the provided string is Anagram or not
const isAnagram = (string) => {
  return string === string.split("").reverse().join("");
};
const testString = "abbac";
// console.log(isAnagram(testString));

//Replace characters of a string with another string
const url = "https://devsandeepraju.com?age=35?address=borewell road/";
const spaceTrimmedUrl = url.replace(" ", "-");
console.log(spaceTrimmedUrl);
