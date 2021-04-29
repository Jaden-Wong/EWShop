module.exports =  {
  configureWebpack: {
    resolve: {
      // 文件路径别名
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'utils': '@/utils',
        'views': '@/views'
      }
    }
  },
  publicPath: './'
}