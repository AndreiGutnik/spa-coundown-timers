const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const publicDir = path.resolve(__dirname, 'public/');

let mode = 'development';
let target = 'web';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist';
}

const devServer = {
  client: {
    logging: 'error',
    overlay: {
      errors: true,
      warnings: false,
      runtimeErrors: true,
    },
  },
  historyApiFallback: true,
  open: true,
  compress: true,
  allowedHosts: 'all',
  hot: true,
  static: path.resolve(__dirname, './src'),
  port: 3000,
};

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
  }),
  new HtmlWebpackPlugin({
    template: `${publicDir}/index.html`,
    inject: 'body',
  }),
];

const optimizations = {
  splitChunks: {
    cacheGroups: {
      vendors: {
        name: 'vendors',
        test: /node_modules/,
        chunks: 'all',
        enforce: true,
      },
    },
  },
  minimizer: [],
};

const modules = {
  rules: [
    // --- Загрузчик для html (html-loader)
    { test: /\.(html)$/, use: ['html-loader'] },
    // --- Загрузчики стилей
    // {
    //   test: /\.css$/i,
    //   include: path.resolve(__dirname, 'src'),
    //   use: ['style-loader', 'css-loader', 'postcss-loader'],
    // },
    {
      test: /\.(s[ac]|c)ss$/i,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
        'postcss-loader',
      ],
    },
    {
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    // --- Поддержка изображений
    {
      test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
      // В продакшен режиме
      // изображения размером до 8кб будут инлайнится в код
      // В режиме разработки все изображения будут помещаться в dist/assets
      type: mode === 'production' ? 'asset' : 'asset/resource',
    },
    // --- Поддержка шрифтов
    {
      test: /\.(woff2?|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
    // --- Поддержка typescript
    {
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      loader: 'ts-loader',
    },
    // --- Babel
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'ts-loader',
        },
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      ],
    },
  ],
};

const resolve = {
  modules: ['node_modules'],
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
  alias: {
    App: path.resolve(__dirname, 'src'),
    Components: path.resolve(__dirname, 'src/components'),
  },
};

module.exports = {
  mode,
  devServer,
  target,
  plugins,
  devtool: 'source-map',
  entry: {
    main: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },

  resolve,
  module: modules,

  performance: {
    hints: false,
  },
  optimization: optimizations,
  stats: 'errors-only',
};
