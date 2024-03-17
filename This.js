// const userName = "sandeep";
function chai() {
  const usersname = "sandeep";
  console.log(this);
  console.log(this.usersname);
}

// const chai = () => {
//   return console.log(this);
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
