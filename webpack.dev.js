const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.development') });
require('dotenv').config();
const webpack = require('webpack');

const port = 8020;
const openBrowser = true;
const babel = true;

// inject envs
let envs = {};

let plugins = [
  new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
  new webpack.DefinePlugin(envs)
];

Object.keys(process.env).filter(key => key.startsWith('MITHRIL_')).forEach(key => {
  envs[key] = JSON.stringify(process.env[key]);
});

let app = ['./src/configs/project.config.js'];
let rules = [];
if (babel) {
  app.unshift('@babel/polyfill');
  rules.push({
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-proposal-object-rest-spread',
          ['@babel/plugin-transform-react-jsx',{"pragma": "m"}]
        ],
      },
    },
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  });
}

module.exports = {
  entry: {
    app: app,
  },
  output: {
    filename: "static/app.js",
    path: path.resolve(__dirname, 'build'),
    publicPath: "/",
  },
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: port,
    open: openBrowser,
    historyApiFallback: {
      index: 'index.html',
    },
    // proxy: {
    //   "/api": "http://localhost:3750"
    // },
    contentBase: 'public',
  },
  plugins: plugins,
  module: {
    rules: rules,
  },
};
