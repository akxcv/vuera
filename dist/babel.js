/* eslint-env node */

module.exports = function ({ types }) {
  return {
    visitor: {
      CallExpression (path, { file }) {
        const callee = path.node.callee
        const maybeReactComponent = path.node.arguments[0]
        const maybeProps = path.node.arguments[1]

        // Check if the CallExpression is `React.createElement`
        if (callee.type !== 'MemberExpression') return
        const { object, property } = callee
        if (!(object.name === 'React' && property.name === 'createElement')) return
        // If the first argument is a string (built-in React component), return
        if (maybeReactComponent.type === 'StringLiteral') return

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
        // Prevent duplicate imports
        file.insertedVueraImport = true

        // Replace React.createElement(component, props) with __vueraReactResoler(component, props)
        path.replaceWith(
          types.callExpression(types.identifier('__vueraReactResolver'), [
            maybeReactComponent,
            maybeProps,
          ])
        )
      },
    },
  }
}
