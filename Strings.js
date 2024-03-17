// Another way to declare string:
const subject = new String("Maths");

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

//substring method
myString.substring(1, 3); // this means substring starts from index 1 to 2 (excluding three)
myString.substring(2); // this means substring starts from index 2 to the end. sandeep => andeep
myName.substring(7, 4); // this means substring starts from index 7 to the 4th. but in this case includes the 4th => eep
myName.substring(myName.length - 4); // takes last 4 characters of the string

//slice method
myString.slice(0, -2); //this means the string is sliced dropping 2 characters from the end
myString.slice(1, -2); //this means the string is sliced dropping 2 characters from index 1(including index 1)
