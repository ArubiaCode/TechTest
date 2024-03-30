// Question 4: Capitalize Words
// Write a program that accepts a string as input, capitalizes the first letter of each word in the
// string, and then returns the result string.
// Examples:
// "hi"=> returns "Hi"
// "i love programming"=> returns "I Love Programming"

function capitalizeFirstWord(text){
    const words = text.split(" ");
    for (let i=0; i<words.length; i++){
        words[i]= words[i][0].toUpperCase() + words[i].substr(1);
    }
    let result = words.join(' ')
    console.log(result)
}

capitalizeFirstWord('hi')
capitalizeFirstWord('i love programming')