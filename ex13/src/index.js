function randomRangeNumber(minNumber, maxNumber) {
    return Math.floor(Math.random(minNumber, maxNumber) * (maxNumber - minNumber + 1) + minNumber);
  }
  console.log(randomRangeNumber(5, 25));
  module.exports = randomRangeNumber;
  