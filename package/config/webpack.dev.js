const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const deps = require("../package.json").dependencies;
const singletonDeps = require("./singleton-deps.json");

const baseURL = `http://localhost`;
const port = __PORT__;

const devConfig = {
  mode: "development",
  output: {
    publicPath: `${baseURL}:${port}/`,
  },
  devServer: {
    port,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "__MODULE__",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/bootstrap",
        "./components": "./src/components",
      },
      shared: {
        ...deps,
        ...singletonDeps,
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
