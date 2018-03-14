const isPrime = number => {
  if (typeof number !== "number" || !Number.isInteger(number)) {
    return false;
  }

  if (number < 2) {
    return false;
  }

  if (number === 2) {
    return true;
  } else if (number % 2 === 0) {
    return false;
  }

  for (var i = 3; i * i <= number; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const factors = integer => {
  var factors = [],
    quotient = 0;

  for (var i = 1; i <= integer; i++) {
    quotient = integer / i;

    if (quotient === Math.floor(quotient)) {
      factors.push(i);
    }
  }
  return factors;
};

const isEven = x => x % 2 == 0;
const doubleNumber = x => x * 2;

module.exports = {
  isPrime,
  isEven,
  doubleNumber,
  factors
};
