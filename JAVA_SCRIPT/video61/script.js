console.log("This is a Tutorial for faulty calculator..")


let random = Math.random()
console.log(random)
let a = prompt("Enter first number: ")
let c = prompt("Enter operator: ")
let b = prompt("Enter second number: ")

let obj = {
    "+" : "-",
    "-" : "/",
    "*" : "+",
    "/" : "**"
}


if(random > 0.1) {
    alert(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else {
    c = obj[c]

    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}