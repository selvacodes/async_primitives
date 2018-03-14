const { Observable } = require("rxjs");
const { isEven, doubleNumber } = require("./utils.js");
const R = require("ramda");

//const print = tag => value => console.log(tag, value);

const numbers = R.range(0, 101);

const sumOfDoubleEven = numbers
  .filter(isEven)
  .map(doubleNumber)
  .reduce((acc, curr) => acc + curr, 0);

console.log("sum : ", sumOfDoubleEven);

Observable.interval(10)
  .map(x => numbers[x])
  .filter(isEven)
  .map(doubleNumber)
  .scan((acc, curr) => acc + curr, 0)
  .do(console.log)
  .subscribe();
