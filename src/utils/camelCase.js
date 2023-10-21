export function camelCase (string) {
  if (typeof string !== 'string') {
    return string
  }

  const divider = /[_-\s]/

  string.toLowerCase()
  return string
    .split(divider)
    .map((word, index) => {
      if (word && index) {
        const [capital, ...rest] = word
        return `${capital.toUpperCase()}${rest.join('')}`
      }
      return word
    })
    .join('')
}

export function camelCaseKeys (obj) {
  let newObj = {}

  for (key in obj) {
    const camelCaseKey = camelCase(key)
    newObj[camelCaseKey] = obj[key]
  }

  return newObj
}
