const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackNotifierPlugin = require("webpack-notifier");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpackConfig = require("./webpack.config");
const publicDir = path.resolve(__dirname, "public");

module.exports = (argv) => {
  const watchMode = argv.liveReload || false;
  const modeEnv = argv.mode || "development";
  const isProd = modeEnv === "production";
  const config = webpackConfig(modeEnv);

  const optimizations = {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: "vendors",
          test: /node_modules/,
          chunks: "all",
          enforce: true,
        },
      },
    },
    minimizer: [],
  };

  return {
    entry: {
      main: "./src/index.tsx",
    },
    output: {
      filename: watchMode ? "assets/[name].[hash].js" : "assets/[name].[chunkhash].js",
      path: path.resolve(__dirname, "build"),
      publicPath: "/",
    },
    devtool: "inline-source-map",
    resolve: config.resolve,
    module: {
      rules: [config.modules.js],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: `${publicDir}/index.html`,
      }),
      new WebpackNotifierPlugin({ alwaysNotify: false }),
    ],
    performance: {
      hints: false,
    },
    optimization: optimizations,
    devServer: {
      static: {
        directory: path.join(__dirname, "build"),
      },
      compress: true,
      port: 5000,
      hot: true,
      open: true,
      historyApiFallback: true,
    },
    stats: "errors-only",
  };
};
