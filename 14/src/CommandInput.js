import React from "react"

const CommandInput = ({ onsubmit }) => {
  let [command, setCommand] = React.useState("")

  let submit = (e) => {
    e.preventDefault()
    onsubmit(command)
    setCommand("")
  }

  return <div className="input-line">
    <span className="prompt">$</span>
    <form onSubmit={submit}>
      <input type="text" autoFocus value={command} onChange={(e) => setCommand(e.target.value)} />
    </form>
  </div >
}

export default CommandInput;