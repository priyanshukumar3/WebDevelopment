async function sleep() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000)
    })
}

function sum(a, b, c) {
    return a+b+c;
}

// IIFE FUNCTION :-
(async function main() {
    // let a = await sleep()
    // let b = await sleep()
    // console.log(a)
    // console.log(b)

    // let [x,y,...rest] = [2,7,5,5,3,5,]
    // console.log(x, y, rest)

    // let obj = {
    //     a : 3,
    //     b : 4,
    //     c : 9
    // }

    // let {a, b} = obj
    // console.log(a, b)

    let arr = [1,4,3]
    console.log(sum(arr[0], arr[1], arr[2]))
    console.log(sum(...arr))
})()