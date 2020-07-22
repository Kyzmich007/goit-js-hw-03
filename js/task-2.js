"use strict";
const countProps = function (obj) {
  const arrayOfValue = Object.values(obj);
  return arrayOfValue.length;
};

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
