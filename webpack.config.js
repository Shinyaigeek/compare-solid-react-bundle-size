const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  target: "web",
  mode: "production",
  entry: {
    solid: "./app_solid/app.tsx",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", "node_modules"],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8080,
    host: `localhost`,
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.js(x?)$/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
};
