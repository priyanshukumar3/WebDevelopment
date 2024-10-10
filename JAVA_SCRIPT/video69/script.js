let a = 6

function factorial(number) {
    let arr = Array.from(Array(number+1).keys())

    let c = arr.slice(1,).reduce((a, b)=> {
        return a*b
    })

    return c
}


function factFor(number) {
    let fact = 1

    for (let index = 1; index <= number; index++) {
        fact *= index;
        
    }
    return fact
}

console.log(factorial(a))
console.log(factFor(a))