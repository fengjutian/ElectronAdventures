import React from "react"

const HistoryEntry = ({command, output}) => {
  return <>
    <div className='input-line'>
      <span className='prompt'>$</span>
      <span className='input'>{command}</span>
    </div>
    <div className='output'>{output}</div>
  </>
}

export default HistoryEntry;