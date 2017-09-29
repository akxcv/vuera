/* eslint-env node */

module.exports = function ({ types }) {
  return {
    visitor: {
      CallExpression (path, { file }) {
        const callee = path.node.callee
        const firstArg = path.node.arguments[0] // maybe React element
        const secondArg = path.node.arguments[1] // maybe props

        if (callee.type !== 'MemberExpression') return
        const { object, property } = callee
        if (!(object.name === 'React' && property.name === 'createElement')) return
        if (firstArg.type === 'StringLiteral') return

        if (!file.insertedVueraImport) {
          file.path.node.body.unshift(
            types.importDeclaration(
              [
                types.importSpecifier(
                  types.identifier('__vueraReactResolver'),
                  types.identifier('__vueraReactResolver')
                ),
              ],
              types.stringLiteral('vuera')
            )
          )
        }
        file.insertedVueraImport = true
        path.replaceWith(
          types.callExpression(types.identifier('__vueraReactResolver'), [firstArg, secondArg])
        )
      },
    },
  }
}
