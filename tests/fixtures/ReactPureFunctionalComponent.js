import React from 'react'

export default function PureFunctionalComponent (props) {
  return (
    <div>
      <span>{props.message}</span>
      <button onClick={props.reset} />
    </div>
  )
}
