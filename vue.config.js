const path = require("path")
const resolve = dir => {
  return path.join(__dirname, dir)
}

const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

const BASE_URL = '/'
module.exports = {
  publicPath: BASE_URL,
  lintOnSave: false,
  chainWebpack: config => {
    // 删除预加载
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    // 压缩代码
    config.optimization.minimize(true)
    config.resolve.symlinks(true)
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@c', resolve('src/components'))
      .set('@v', resolve('src/views'))
  },
  productionSourceMap: false,
  configureWebpack: (config)=>{
    if(process.env.NODE_ENV === 'production'){
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true // 去除console
      config.plugins.push( // 压缩gzip
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]', // 提示示compression-webpack-plugin@3.0.0的话asset改为filename
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      )
    }
  },
  // devServer: {
  //   // host: '0.0.0.0',
  //   // port: 8900, // 端口
  //   https: true
  // },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/index.scss";'
      }
    }
  }
  // css: {
  //   loaderOptions: {
  //     // 给 sass-loader 传递选项
  //     sass: {
  //       // @/ 是 src/ 的别名
  //       // 所以这里假设你有 `src/variables.sass` 这个文件
  //       // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
  //       additionalData: `@import "~@/assets/scss/index.scss"`
  //     },
  //     // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
  //     // 因为 `scss` 语法在内部也是由 sass-loader 处理的
  //     // 但是在配置 `prependData` 选项的时候
  //     // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
  //     // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
  //     scss: {
  //       additionalData: `@import "~@/assets/scss/index.scss";`
  //     }
  //   }
  // }
}
