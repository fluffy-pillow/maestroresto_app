module.exports = {
  publicPath: '',
  lintOnSave: false,
  runtimeCompiler: true,
  devServer: {
      proxy: 'http://api.maestroresto.kaerus.eu/',
  },
  pluginOptions: {
    cordovaPath: 'src-cordova'
  }
}
