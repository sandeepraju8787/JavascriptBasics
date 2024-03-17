let mySym = Symbol("key1");

// this way of declaring is called object literal
let user = {
  name: "Sandeep",
  isRegistered: true,
  email: "sandeepraju.net@gmail.com",
  lastLoginDays: ["monday", "tuesday"],
  [mySym]: "mySymbol",
  "full name": "sandeep raju",
  username: {
    firstname: "sandeep",
    lastname: "raju",
  },
};

//second way to declare is using constructor. this is also called singleton pattern
//let user2 = new Object();

/*
console.log(user.email); // not the recommended way
console.log(user["email"]); //recommended way
console.log(user["full name"]); // this is the usecase when the recommended way is the only way to call
console.log(user[mySym]);
console.log(typeof mySym);
*/
// change values
//user.email = "sandeepraju.mec@gmail.com";
//console.log(user);

// if you want to freeze any updates to the object
//Object.freeze(user);
//user.email = "sandeepraju.mech@yahoo.com"; // this will not be reflecting in the object now.
// console.log(user);

//adding a function to the object
user.greeting = function () {
  console.log(`Hello user: ${user.name}`);
};

// console.log(user.greeting()); // will return the result of the method
// console.log(user.greeting); // will return just the reference to the function - [Function (anonymous)]

// console.log(user.username?.firstname); //question mark is given to ensure especially in cases of database calls or api calls
// //                                      that the specified property exists.
// console.log(user.userId?.name); // this returns undefined
// console.log(user.userId.name); // this returns TypeError: Cannot read properties of undefined (reading 'name')

// combine or mere 2 objects
const obj1 = { key1: "a", key2: "b" };
const obj2 = { key3: "c", key4: "d" };
const obj3 = { key5: "e", key6: "e" };

const mergedRes = { ...obj1, ...obj2, ...obj3 }; //easier technique
const mergedResult = Object.assign({}, obj1, obj2, obj3); //this empty object is the target object and rest are source
// console.log(mergedResult);

//format of data return from an api request
let gameUsers = [
  { id: 1, name: "first" },
  { id: 2, name: "second" },
  { id: 3, name: "third" },
];
// console.log(gameUsers[1].name);

//console.log(Object.keys(user));
let allKeys = Object.keys(user);
// allKeys.map((key) => console.log(`the key is ${key}`));  //can be used in a similar fashion to create table headers

console.log(user.hasOwnProperty("isRegistered")); // check if the object has this property or not.
