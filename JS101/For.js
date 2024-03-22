/*-----------------------------------------------*/
/*----------For-in and For-of on OBJECTS---------*/
/*-----------------------------------------------*/

let user = {
  id: 1,
  name: "sandeep",
  age: 35,
  isRegistered: true,
};

//for-IN will print KEYS for OBJECTS

/*
for (item in user) {
  console.log(item, user[item]);
} */

//for-Of will throw error that Object is not iteratable
/*
for (item of user) {
  console.log(item);
} */

/*-----------------------------------------------*/
/*---------------For on Map----------------------*/
/*-----------------------------------------------*/

const map = new Map();
map.set("name", "sandeep");
map.set("age", 35);
map.set("isRegisterd", true);

//for map, only for-of works. for-in yeild no result.
for ([key, value] of map) {
  console.log(key, value);
}

///In summary
/*------------*/
///---If you want to iterate over array, use for-of
///---If you want to iterate over map, use for-of

///---If you want to iterate over object, use for-in
