const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      environment: {
        arrowFunction: false, // Safari 10–11
        const: false,
        destructuring: false,
        forOf: false,
        module: false,
      },
    },
  },
})
