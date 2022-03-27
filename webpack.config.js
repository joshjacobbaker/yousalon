const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const config = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
    clean: true,
    // publicPath: "/",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [{ loader: "url-loader", options: { limit: 40000 } }, "image-webpack-loader", "file-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html", scriptLoading: "defer", inject: "body" })],
  optimization: {
    splitChunks: {
      chunks: "all",
      maxInitialRequests: 20, // for HTTP2
      maxAsyncRequests: 20, // for HTTP2
      minSize: 40, // for example only: chosen to match 2 modules
      // omit minSize in real use case to use the default of 30kb
    },
  },
}

// plugins: @babel/plugin-syntax-jsx
// presets: @babel/preset-react
module.exports = config
