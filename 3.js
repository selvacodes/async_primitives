const { doubleNumber } = require("./utils.js");
const R = require("ramda");

const promise10 = () => Promise.resolve(10);

const add10 = R.add(10);

const promisedDouble = x => Promise.resolve(x * 2);

console.log(promise10());

console.log("b4");

promise10()
  .then(doubleNumber)
  .then(promisedDouble)
  .then(add10)
  .then(console.log);

console.log("after");
