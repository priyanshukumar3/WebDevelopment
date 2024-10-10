console.log("Hey I am Priyanshu")

var a = 10; // var for global variables
let b = 8; // let for local variables
var c = "Prince"

// console.log(a+b+8);
// console.log(typeof(a), typeof(b), typeof(c));

{
    let b = 9;
    console.log(b);
}
console.log(b);

let x = "Prince"
let y = 22;
let z = 3.4;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof  y, typeof z, typeof p, typeof q, typeof r)


// Objects in js


let obj = {
    name : "Prince",
    "job code" : 8788,
    isHandsome : true
}

obj.salary = "100Crores";
console.log(obj);
obj.salary = "500Crores";
console.log(obj);