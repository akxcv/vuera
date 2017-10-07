/* eslint-env node */

function processCreateElement (maybeReactComponent, args, file, path, types) {
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

  // Replace React.createElement(component, props) with our helper function
  path.replaceWith(
    types.callExpression(types.identifier('__vueraReactResolver'), [maybeReactComponent, ...args])
  )
}

module.exports = function ({ types }) {
  return {
    visitor: {
      CallExpression (path, { file }) {
        const callee = path.node.callee
        const [maybeReactComponent, ...args] = path.node.arguments

        // Check if 'react' module was imported in current file, return if not
        const reactImport = file.path.node.body.find(
          x => x.type === 'ImportDeclaration' && x.source.value === 'react'
        )
        if (!reactImport) return

        // Check if the CallExpression is `React.createElement`
        if (callee.type === 'MemberExpression') {
          /**
           * Get the name of the default import. Examples:
           * import React from 'react' => "React"
           * import hahaLOL from 'react' => "hahaLOL"
           */
          const defaultImport = reactImport.specifiers.find(
            x => x.type === 'ImportDefaultSpecifier'
          )
          if (!defaultImport) return
          const reactName = defaultImport.local.name

          const { object, property } = callee
          if (!(object.name === reactName && property.name === 'createElement')) {
            return
          }

          processCreateElement(maybeReactComponent, args, file, path, types)
        }
        // Check if CallExpression is React's 'createElement'
        if (callee.type === 'Identifier' && callee.name !== '__vueraReactResolver') {
          // Return unless createElement was imported
          const createElementImport = reactImport.specifiers.find(
            x => x.type === 'ImportSpecifier' && x.imported.name === 'createElement'
          )
          if (!createElementImport) return

          processCreateElement(maybeReactComponent, args, file, path, types)
        }
      },
    },
  }
}
