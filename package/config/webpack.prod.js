const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("../package.json").dependencies;
const commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/__MODULE__/",
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
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
