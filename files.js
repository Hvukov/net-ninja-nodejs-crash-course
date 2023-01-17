const fs = require("fs")

//reading files
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log(data.toString())
// })

// console.log("bla bla")

//write files
fs.writeFile("./docs/blog1.txt", "hello world", () => {
  console.log("file wa written")
})

fs.writeFile("./docs/blog3.txt", "I am Hrc", () => {
  console.log("its written")
})

//directories
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err, data) => {
//     if (err) {
//       console.log(err)
//     }
//     console.log("folder created")
//   })
// } else {
//   fs.rmdir("./assets", (err, data) => {
//     if (err) {
//       console.log(err)
//     }
//     console.log("folder removed")
//   })
// }

//deleting files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err, data) => {
    if (err) {
      console.log(err)
    }
    console.log("file deteled")
  })
}
