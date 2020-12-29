function compare (a, b) {
  const v1 = a.split('.').map(n => Number(n))
  const v2 = b.split('.').map(n => Number(n))
  const len = Math.min(v1.length, v2.length)
  let result = 0
  for (let i = 0; i < len; i += 1) {
    if (v1[i] === v2[i]) {
      continue
    } else {
      result = v1[i] > v2[i] ? 1 : -1
      break
    }
  }
  return result === 0 ? v1.length - v2.length : result
}

export function gte (a, b) {
  return compare(a, b) >= 0
}
