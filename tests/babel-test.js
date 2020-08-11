import fs from 'fs'
import path from 'path'
import * as babel from '@babel/core'
import prettier from 'prettier'
import plugin from '../babel'

const getFixture = name => ({
  source: path.join(__dirname, `fixtures/babel/${name}.js`),
  result: path.join(__dirname, `fixtures/babel/${name}-result.js`),
})

const compare = (source, expectedResult) => {
  const transformedCode = prettier.format(
    babel.transformFileSync(source, {
      babelrc: false,
      plugins: [plugin],
    }).code,
    { printWidth: 80, parser: 'babel' }
  )
  const expectedCode = prettier.format(
    babel.transformFileSync(expectedResult, { babelrc: false }).code,
    { printWidth: 80, parser: 'babel' }
  )
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

  it('checks `react` default import name', () => {
    const { source, result } = getFixture('DifferentDefaultImportName')
    compare(source, result)
  })

  it('does nothing if React is not imported', () => {
    const { source } = getFixture('NoReactDefaultImport')
    compare(source, source)
  })

  it('transforms Vue components if only `createElement` is imported from React', () => {
    const { source, result } = getFixture('OnlyCreateElementImported')
    compare(source, result)
  })

  it('transforms Vue components if `createElement` was aliased on import', () => {
    const { source, result } = getFixture('CreateElementAliased')
    compare(source, result)
  })

  it('does nothing if createElement was not imported', () => {
    const { source } = getFixture('OnlyCreateClassImported')
    compare(source, source)
  })

  test('mixed imports', () => {
    const { source, result } = getFixture('MixedImports')
    compare(source, result)
  })
})
