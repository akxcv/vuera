import React from 'react'
import PropTypes from 'prop-types'

const versionedPropTypes = React.version < '15.6.0' ? React.PropTypes : PropTypes

export default class ChildlessComponent extends React.Component {
  render () {
    return (
      <div>
        <span>{this.props.message}</span>
        <button onClick={this.props.reset} />
      </div>
    )
  }
}

ChildlessComponent.propTypes = {
  message: versionedPropTypes.string,
  reset: versionedPropTypes.func,
  // this component does not allow children
  children: versionedPropTypes.oneOf([undefined]), // eslint-disable-line react/no-unused-prop-types
}
