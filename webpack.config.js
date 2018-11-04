const path = require("path");

module.exports = {
  target: "node",
  mode: "production",
  entry: "./src/main.ts",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "bundle.webpack.js",
    path: path.resolve(__dirname, "dist")
  }
};
