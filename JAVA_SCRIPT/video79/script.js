let a = prompt("Enter your first number: ")
let b = prompt("Enter your second number: ")

if(isNaN(a) || isNaN(b)) {
    console.log("Wrond input....")
}

let sum = parseInt(a) + parseInt(b);

// let x = 5
function f() {
    try {
        console.log("Sum = ", sum*x)
        return 1;
    } catch(error) {
        console.log("Error aa gaya bhai...")
        return 0;
    } 
    finally {
        console.log("All files has been closed...")
    }
}

let c = f();



