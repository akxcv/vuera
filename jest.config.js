/* eslint-env node */
module.exports = {
  collectCoverageFrom: ['src/**/*.js', 'babel.js'],
  testEnvironment: 'jsdom',
  setupFiles: ['./tests/__setup__.js'],
  testMatch: ['<rootDir>/tests/**/*-test.js'],
  moduleFileExtensions: ['js', 'json', 'node', 'vue'],
  transform: {
    '\\.js$': 'babel-jest',
    '\\.vue$': 'jest-vue-preprocessor',
  },
}
