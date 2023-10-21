import { gte } from '../../src/utils/compare'

describe('compare', () => {
  it('returns true for React version is 16.3.0', () => {
    expect(gte('16.3.0', '16.2.0')).toBe(true)
  })

  it('returns true for React version is 15.2.0', () => {
    expect(gte('15.2.0', '16.2.0')).toBe(false)
  })
})
