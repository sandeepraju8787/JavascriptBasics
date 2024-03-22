//shallow copy creates the a copy of the top level structure of the object or array. However the nested properties and elements are still referenced from the
//original object

const originalObject = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

const newObject = { ...originalObject };

newObject.address.city = "Bangalore";

console.log(`Original object city: ${originalObject.address.city}`);
console.log(`New object city: ${newObject.address.city}`);

//lets try what happens if we modify the top level elements.

newObject.name = "sandeep";

console.log(`Original object city: ${originalObject.name}`);
console.log(`New object city: ${newObject.name}`);
// which meam top level objects are not referenced. instead the shallow copy is actually holding the top level elements copy

//second way to create a shallow copy is using Object.assign
const secondShallowCopy = Object.assign({}, originalObject);

//Recursive function for creating deep copy

function deepCopy(obj) {
  if (obj == null || typeof obj !== "object") {
    return obj;
  }

  const newObj = {};
  for (index in obj) {
    newObj[index] = deepCopy(obj[index]);
  }
  return newObj;
}
