const path = require('path');
const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');

const WebpackConfig = {
  entry: {
    main: path.join(__dirname, 'src', 'main.js')
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: `[name].js`
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel?{ "presets": ["latest"] }']
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new webpack.optimize.DedupePlugin()
  ],
};

function build(done) {
  webpack(WebpackConfig, function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }
    gutil.log('[webpack]', stats.toString());
    done();
  });
}

function serve() {
  const server = require('webpack-dev-server');

  new server(webpack(WebpackConfig), {
    contentBase: path.join(__dirname, 'build'),
    stats: {
      colors: true
    }
  }).listen(4000, '0.0.0.0', function(err) {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }
    gutil.log('[serve]', 'http://localhost:4000/webpack-dev-server/index.html');
  });
}

exports.build = build;
exports.serve = serve;
