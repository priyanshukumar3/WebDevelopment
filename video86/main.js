const fs = require("fs")

// console.log(fs)

console.log("Starting")

// fs.writeFileSync("prince.txt", "prince is a good boy....")
fs.writeFile("prince2.txt", "prince is a good boy2.....", ()=>{
    console.log("done")

    fs.readFile("prince2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("prince.txt", "PrinceRobo", (e, d)=>{
    console.log(d)
})

console.log("Ending")

