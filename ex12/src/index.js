function randomInteger() {
  return Math.floor(Math.random(0, 29) * 30);
}
console.log(randomInteger());
module.exports = randomInteger;
