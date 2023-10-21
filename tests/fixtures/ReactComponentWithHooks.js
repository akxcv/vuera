import React from 'react'

export default () => {
  const [value, setValue] = React.useState('')

  return <input type='text' value={value} onChange={e => setValue(e.currentTarget.value)} />
}
