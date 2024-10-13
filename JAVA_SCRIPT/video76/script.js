// settle meanse resolve or reject 
// resolve means promise has settled successfully
// reject means promise has not settled successfully




// async function getData() {
//     // semulate getting data from server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }
async function getData() {
    
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    return data
}

async function main() {
    console.log("Loading modules")

    console.log("Do something else")

    console.log("Load data")

    let data = await getData()

    console.log(data)

    console.log("Process data")

    console.log("task 2")
}

main()

// data.then((v) => {
//     console.log(data)

//     console.log("Process  data")

//     console.log("task 2")
// })