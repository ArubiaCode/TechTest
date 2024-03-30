// Question 3: Power of Two
// Write a program that takes an integer as input and returns true if the input is a power of two.
// Examples:
// 8=> returns true
// 6=> returns false

function powerOfTwo(value) {
  for (let i = 0; i < value; i++) {
    if (Math.pow(2, i) == value) {
      return true;
    }
  }
  return false;
}

retsult = powerOfTwo(8);
console.log(retsult);
retsult = powerOfTwo(6);
console.log(retsult);
