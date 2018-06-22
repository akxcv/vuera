import React from 'react'

export default props => {
  return (
    <div>
      <span>{props.message}</span>
      <button onClick={props.reset} />
    </div>
  )
}
