let child_process = require("child_process")
let { contextBridge } = require("electron")

let runCommand = (command) => {
  return new Promise((resolve, reject) => {
    child_process.exec(command, (error, stdout, stderr) => {
      resolve({stdout, stderr, error})
    })
  })

  // return child_process.execSync(command).toString().trim()
}

contextBridge.exposeInMainWorld(
  "api", { runCommand }
)