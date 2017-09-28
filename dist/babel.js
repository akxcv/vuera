/* eslint-env node */

module.exports = function ({ types }) {
  return {
    visitor: {
      Program (path) {
        if (
          !path.node.body.find(node => {
            if (node.type !== 'ImportDeclaration') return false
            if (node.source.value !== 'react') return false
            return true
          })
        ) {
          return
        }
        path.node.body.unshift(
          types.importDeclaration(
            [
              types.importSpecifier(
                types.identifier('wrapReactElement'),
                types.identifier('wrapReactElement')
              ),
            ],
            types.stringLiteral('vuera')
          )
        )
      },
      CallExpression (path, { file }) {
        if (path.data.vuera) return
        const callee = path.node.callee
        const firstArg = path.node.arguments[0] // maybe React element
        const secondArg = path.node.arguments[1] // maybe props

        if (callee.type !== 'MemberExpression') return
        const { object, property } = callee
        if (!(object.name === 'React' && property.name === 'createElement')) return
        if (firstArg.type === 'StringLiteral') return

        path.replaceWith(
          types.callExpression(types.identifier('wrapReactElement'), [firstArg, secondArg])
        )
        path.data.vuera = true
      },
    },
  }
}
