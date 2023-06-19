/** @type {import('prettier').Config} */
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'auto',
  singleAttributePerLine: true,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindAttributes: ['classNames'],
  tailwindFunctions: ['clsx'],
};
