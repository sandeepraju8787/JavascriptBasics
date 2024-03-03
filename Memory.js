//Create a primitive type
let firstName = "Name1";
//Now create another primitive type and assign it to the first. this will create a copy of the first in the stack.
let secondName = firstName;

console.log(`the names of the 2 are ${firstName} and ${secondName}`);

secondName = "Name2";
console.log(`the names of the 2 are ${firstName} and ${secondName}`);

//Now create a non primitive type. its reference will be created in the stack and value will be stored in the heap.
let firstUser = {
  name: "firstUser",
  upi: "firstuser@ybl",
};

let secondUser = firstUser; // when we do this, another reference is created in the stack, however it references the same value in the heap.

console.log(`the names of the 2 are ${firstUser.name} and ${secondUser.name}`);
secondUser.name = "updatedUser";
console.log(`the names of the 2 are ${firstUser.name} and ${secondUser.name}`);
