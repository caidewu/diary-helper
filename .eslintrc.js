// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    'no-param-reassign': 0,
    'no-mixed-operators': 0,
    'no-plusplus': 0,
    'max-len': 0,
    'import/prefer-default-export': 0,
    'camelcase': 0,
    'dot-notation': 0,
    'no-multi-assign': 0,
    "arrow-body-style": 0,
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 2 : 1,
    // allow paren-less arrow functions
    'arrow-parens': 0,

    // allow async-await
    'generator-star-spacing': 0,
    'no-extend-native': 0,
    'no-restricted-syntax': 0,
    'no-unused-expressions': [0, {
      'allowShortCircuit': true,
      'allowTernary': true,
    }],
    "no-underscore-dangle": 0,
    'consistent-return': 0,
    "prefer-const": 0,
    'comma-dangle': [2, 'always-multiline'],
    'func-names': 0,
    'import/no-mutable-exports':0,
    'padded-blocks': 0,
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 0,


  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    getApp: true,
    getPage: true
  }
}
