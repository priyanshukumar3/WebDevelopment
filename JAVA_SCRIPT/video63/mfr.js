let arr = [2, 4, 11, 13, 5];
let newArr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)  
// }


// map function working same as upper code:-

// newArr = arr.map(e=>{
//     return e**2;
// })

// console.log(newArr)

// const greaterThenSeven = (e)=> {
//     if(e>7) return true;
//     return false;
// }
// console.log(arr.filter(greaterThenSeven))


let arr2 = [1,2,3,4,5,6]

const red = (a,b) => {
    return a+b;
}
console.log(arr2.reduce(red));