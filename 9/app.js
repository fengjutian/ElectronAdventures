let child_process = require("child_process")

let form = document.querySelector("form")
let input = document.querySelector("input")
let terminalHistory = document.querySelector("#history")

function createInputLine(command) {
  let inputLine = document.createElement("div")
  inputLine.className = "input-line"

  let promptSpan = document.createElement("span")
  promptSpan.className = "prompt"
  promptSpan.append("$")
  let inputSpan = document.createElement("span")
  inputSpan.className = "input"
  inputSpan.append(command)

  inputLine.append(promptSpan)
  inputLine.append(inputSpan)

  return inputLine
}

function createTerminalHistoryEntry(command, commandOutput) {
    console.log('23', commandOutput);
    
  let inputLine = createInputLine(command)
  let output = document.createElement("div")
  output.className = "output"
  output.append(commandOutput)
  terminalHistory.append(inputLine)
  terminalHistory.append(output)
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  let command = input.value
  let output = child_process.execSync(command).toString().trim()
  createTerminalHistoryEntry(command, output)
  input.value = ""
  input.scrollIntoView()
})