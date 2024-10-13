console.log("Priyanshu is hacker")

setTimeout(() => {
    console.log("I am inside setting time 1")
}, 0);
setTimeout(() => {
    console.log("I am inside setting time 2")
}, 0);

console.log("The end!!")

const callback = (arg => {
    console.log(arg)
})

const loadScript = ((src, callback) =>{
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Prince")
    document.head.append(sc)
})

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)


// CALLBACK HELL, PYRAMID OF DOOM :-

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (arg, fn)=>{
//     dfdf("sdjfijf", fn=>{
//         fd("djfid", df=>{

//         })
//     })
// })