module.exports = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: ['docs/**/*.md', 'docs/src/pages/**/*.{js,tsx}', 'docs/data/**/*.{js,tsx}'],
      options: {
        printWidth: 85,
      },
    },
    {
      files: ['docs/pages/blog/**/*.md'],
      options: {
        printWidth: 82,
      },
    },
  ],
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '^(react|react-dom|react-router|react-router-dom|react-.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@/',
    '^components/(.*)$',
    '^[.]/types$',
    '^[.]/styles$',
    '^[./]',
  ],
  importOrderSortSpecifiers: true,
};
