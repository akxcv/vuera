import { config } from '../src'

describe('config', () => {
  it('defaults to an empty vueInstanceOptions', () => {
    expect(config.vueInstanceOptions).toEqual({})
  })
})
