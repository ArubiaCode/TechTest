// Question 5: Reverse Integer
// Write a program that takes an integer as input and returns an integer with reversed digit
// ordering.
// Examples:
// For input 500, the program should return 5.
// For input -56, the program should return -65.
// For input -90, the program should return -9.
// For input 91, the program should return 19

function reverse(n){
    let value =n.toString()
    let result =value.split('').reverse().join('')
    let finalResult=    parseInt(result)* Math.sign(n)
    console.log(finalResult)
}

reverse(50)
reverse(500)
reverse(-56)
reverse(-90)
reverse(91)