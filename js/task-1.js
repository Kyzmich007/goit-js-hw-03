"use strict";
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
user.mood = "Heppy";
user.hobby = "skydiving";
user.premium = false;
const keys = Object.keys(user);
for (let key of keys) {
  console.log(`${key}:${user[key]}`);
}
