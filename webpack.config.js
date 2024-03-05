const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const modules = {
    js: {
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "ts-loader",
        },
      ],
    },
    css: {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: MiniCssExtractPlugin.loader,
        },
        {
          loader: "css-loader",
        },
      ],
    },
  };

  if (env === "production") {
    modules.stylus.use.splice(2, 0, { loader: "postcss-loader" });
  }

  const resolve = {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      App: path.resolve(__dirname, "src"),
      Components: path.resolve(__dirname, "src/components"),
    },
  };

  return {
    modules,
    resolve,
  };
};
