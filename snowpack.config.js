module.exports = {
  exclude: ['rollup.*'],
  installOptions: {
    rollup: {
      plugins: [
        require('rollup-plugin-node-polyfills')(),
      ]
    }
  },
}
