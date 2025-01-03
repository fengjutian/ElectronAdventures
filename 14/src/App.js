import React from "react"
import CommandInput from "./CommandInput"
import HistoryEntry from "./HistoryEntry"

const App = (props) => {
  let [history, setHistory] = React.useState([])

  let onsubmit = async (command) => {
    let output = await window.api.runCommand(command)
    console.log(123, output)
    setHistory([...history, { command, output }])

    // let entry = {command, stdout: "", stderr: "", error: null, running: true}
    // history.push(entry)
    // setHistory(history)

    // Object.assign(entry, {running: false}, await window.api.runCommand(command))
    // // history = history
    // setHistory(history)
  }

  return (
    <>
      <h1>React Terminal App</h1>
      { history.map(({command, output}, index) => (
        <HistoryEntry key={index} command={command} output={output} />
      ))}
      <CommandInput onsubmit={onsubmit} />
    </>
  )
}

export default App;