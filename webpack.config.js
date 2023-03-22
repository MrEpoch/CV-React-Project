const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./src/main.jsx",
  plugins: [
    new HtmlWebpackPlugin({
      title: "React CV app",
      template: path.resolve(__dirname, "template/index.html")
    }),
  ],
  output: {
    filename: "bundle.jsx",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3334,
    allowedHosts: "all",
  },
  devtool: 'inline-source-map',
  module: {
    // exclude node_modules
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "static/media/[name].[hash:8].[ext]"
          },
        },
      },
      {
          test: /\.svg$/,
          use: ["@svgr/webpack"]
      },
      {
          test: /\.(eot|otf|ttf|woff|woff2)$/,
          loader: require.resolve("file-loader"),
          options: {
            name: "static/media/[name].[hash:8].[ext]"
          } 
      }
    ]
  },
  // pass all js files through Babel
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
};