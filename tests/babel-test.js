import fs from 'fs'
import path from 'path'
import * as babel from 'babel-core'
import prettier from 'prettier'
import plugin from '../dist/babel'

const getFixture = name => ({
  source: path.join(__dirname, `fixtures/babel/${name}.js`),
  result: path.join(__dirname, `fixtures/babel/${name}-result.js`),
})

const compare = (source, expectedResult) => {
  const transformedCode = prettier.format(
    babel.transformFileSync(source, {
      babelrc: false,
      plugins: [plugin],
    }).code
  )
  const expectedCode = prettier.format(fs.readFileSync(expectedResult, 'UTF-8'))
  expect(transformedCode).toBe(expectedCode)
}

describe('babel plugin', () => {
  it('transforms vue components into react components', () => {
    const { source, result } = getFixture('VueComponentInReact')
    compare(source, result)
  })

  it('does not transform DOM elements', () => {
    const { source } = getFixture('DOMElementInReact')
    compare(source, source)
  })
})
