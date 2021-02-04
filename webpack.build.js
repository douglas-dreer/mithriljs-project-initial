const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.production') });
require('dotenv').config();
const webpack = require('webpack');

const babel = true;
const createMap = false;

let plugins = [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery"
  }),
  new webpack.DefinePlugin(envs)
];
let envs = {};
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
  });
}

let devtools = undefined;
if (createMap) devtools = 'source-map';


module.exports = {
  entry: {
    app: app,
  },
  output: {
    filename: "static/app.js",
    path: path.resolve(__dirname, 'build'),
    publicPath: "/",
  },
  mode: 'production',
  devtool: devtools,
  resolve: { alias: {'jquery':  path.join(__dirname, '/node_modules/jquery/dist/jquery.min.js') } },
  plugins: plugins,
  module: {
    loaders: [
      { test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/, loader: "imports?this=>window" },
      { test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/, loader: "imports?define=>false" }
    ],
    rules: rules,
  },
};
