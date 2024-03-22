/*
const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB task, network calls, cryptography tasks.

  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 2000);
}).then(() => {
  console.log("Async resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "sandeeo", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
}); 

const promiseFour = new Promise((resolve, reject) => {
  let errorMsg = false;
  if (errorMsg) {
    reject("Something went wrong");
  } else {
    resolve({ author: "David Baldacci", bookName: "The Smartest One" });
  }
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.author;
  })
  .then((author) => {
    console.log(author);
  })
  .catch((error) => console.log(error))
  .finally(() => {
    console.log("the promise was either fulfilled or rejected");
  });

  */

/*-----api calls in async-await format------*/
/*
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("E: ", error);
  }
}

getUsers()
  .then((filteredUsers) => {
    return filteredUsers.filter((user) => user.name.includes("Le"));
  })
  .then((users) => console.log(users));
*/

/*-----api calls using promise format------*/

fetch("https://jsonplaceholder.typicode.com/users")
  .then((users) => {
    return users.json();
  })
  .then((filteredUsers) => {
    return filteredUsers.filter((user) => user.name.includes("Le"));
  })
  .then((users) => {
    console.log(users);
  });

/*
  .then(users => {
    // Sort users alphabetically by name
    const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name));

    // Now sortedUsers contains users sorted alphabetically by name
    console.log(sortedUsers);
  })
*/ //sorting logic
