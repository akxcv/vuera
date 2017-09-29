/* eslint-env node */
module.exports = {
  browser: true,
  collectCoverageFrom: ['src/**/*.js', 'dist/babel.js'],
  setupFiles: ['./tests/__setup__.js'],
  testMatch: ['<rootDir>/tests/**/*-test.js'],
  moduleNameMapper: {
    vue: 'vue/dist/vue.js',
  },
  moduleFileExtensions: ['js', 'vue'],
  transform: {
    '\\.js$': 'babel-jest',
    '\\.vue$': 'jest-vue-preprocessor',
  },
}
