// module.exports = function override(config, env) {
//   // do stuff with the webpack config...
//   return config;
// };

const { override, fixBabelImports, addWebpackPlugin } = require('customize-cra');
const CompressionPlugin = require('compression-webpack-plugin'); // gzip压缩

const rewiredMap = () => config => {
  config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
  return config;
};

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  // 关闭mapSource https://segmentfault.com/q/1010000018123194
  rewiredMap(),
  addWebpackPlugin(
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  )
);