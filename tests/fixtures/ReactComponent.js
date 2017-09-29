import React from 'react'

export default class Component extends React.Component {
  render () {
    return (
      <div>
        <span>{this.props.message}</span>
        <button onClick={this.props.reset} />
      </div>
    )
  }
}
