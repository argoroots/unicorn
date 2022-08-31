module.exports = {
  content: [
    './src/**/*.pug',
    './src/**/*.yaml'
  ],
  separator: '_',
  theme: {},
  plugins: [
    require('@tailwindcss/typography')
  ]
}
