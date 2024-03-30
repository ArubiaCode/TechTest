// Question 2: Fibonacci Sequence
// Write a program to generate the Fibonacci sequence up to 100.

function Sequence(value){
    let sequence= [0, 1]
    for (let i = 2; i<=value;i++ ){
        sequence[i] = sequence[i-1] + sequence[i-2]
    }
    console.log(sequence)
}

Sequence(100)