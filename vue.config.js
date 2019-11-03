module.exports = {
  publicPath: '',
  lintOnSave: false,
  runtimeCompiler: true,
  devServer: {
      proxy: 'https://api.maestroresto.kaerus.eu/',
  },
  pluginOptions: {
    cordovaPath: 'src-cordova'
  }
}
