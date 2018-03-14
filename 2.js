const { doubleNumber } = require("./utils.js");
const R = require("ramda");

const Box = x => ({
  val: x,
  map: f => Box(f(x)),
  flatMap: f => f(x),
  do: f => f(x)
});

Box.resolve = x => Box(x);

const box10 = () => Box.resolve(10);

const boxedDouble = x => Box.resolve(x * 2);

const add10 = R.add(10);

console.log(box10());

console.log("b4");

box10()
  .map(doubleNumber)
  .flatMap(boxedDouble)
  .map(add10)
  .do(console.log);

console.log("after");
