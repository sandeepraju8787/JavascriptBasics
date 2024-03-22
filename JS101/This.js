// const userName = "sandeep";
function chai() {
  const usersname = "sandeep";
  // console.log(this); // here in function declaration, this will yield a global object
  // console.log(this.usersname); // this will yield and empty object
}

// const chai = () => {
//   return console.log(this);  // here in the arrow function, this will yield empty object
// };

chai();

//this refers to the current context. current context means currently whatever values that object was holding.

const user = {
  username: "sandeep",
  price: 999,
  greeting: function () {
    console.log(`${this.username}, welcome to the course`);
  },
};

user.username = "raju";
// user.greeting();

// console.log(this); //here it will show an empty object. since this is a node environment. in the browser environment,
//this in global context will be Window

// Returning objects in an arrow function

const mergeObjects = (user1, user2) => {
  return [user2, user1];
};
const firstUser = { id: 1, name: "sandeep" };
const secondUser = { id: 2, name: "reyansh" };
const res = mergeObjects(firstUser, secondUser);
console.log(res);
