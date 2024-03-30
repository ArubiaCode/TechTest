// Question 6: Count Vowels
// Write a program that counts the number of vowels in a sentence.
// eg " Hello World " => returns 2

function vowelCount(text){
    vowels=['a','e','i','o','u']
    let sum =0
    for(let character of text){
        if(vowels.includes(character)){
            sum+=1
        }

    }
    return sum
}
let result = vowelCount('Hellow world')
console.log(result)