'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue': 'mpvue',
      '@': resolve('src'),
      '_components': resolve('src/components'),
      '_assets': resolve('src/assets'),
      '_static': resolve('static'),
      '_view': resolve('src/iview-components'),
    }
  },
}
