module.exports = ({
  'presets': ['@babel/preset-env', '@babel/preset-react'],
  'plugins': [
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-function-bind'
  ],
  'env': {
    'test-claim': {
      'plugins': [
        [ 'babel-plugin-webpack-alias', { 'config': './apps/app-claim/webpack.common.js' } ]
      ]
    }
  }
})
