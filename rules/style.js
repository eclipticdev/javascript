module.exports = {
  'rules': {
    // require camel case names
    'camelcase': [2, {'properties': 'always'}],
    // this option sets a specific tab width for your code
    'indent': [2, 2, {'SwitchCase': 1}],
    // Avoid code that looks like two expressions but is actually one
    'no-unexpected-multiline': 2,
    // enforce padding within blocks
    'padded-blocks': 0,
    // require or disallow use of semicolons instead of ASI
    'semi': [2, 'never'],
  },
}