const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [require('postcss-csso'), 'postcss-preset-env', tailwindcss],
};
