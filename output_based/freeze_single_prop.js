//I want to be able to modify other properties of the object user. I must freeze only id property
const user = {
  id: 112,
  name: "sandeep",
  age: 35,
};

// Object.freeze(user); will make the whole object immutable

// Object.defineProperty(user, "id", {
//   value: user.id,
//   writable: false,
//   configurable: false,
// });

Object.defineProperty(user, "id", {
  value: user.id,
  writable: false,
});

user.id = 984;

console.log(user.id); // output will be original id which is 112.
