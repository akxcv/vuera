/* eslint-env node */
module.exports = {
  // resolver: 'browser-resolve',
  collectCoverageFrom: ['src/**/*.js', 'babel.js'],
  setupFiles: ['<rootDir>/tests/__setup__.js'],
  testMatch: ['<rootDir>/tests/**/*-test.js'],
  moduleFileExtensions: ['js', 'json', 'node', 'vue'],
  transform: {
    '\\.js$': 'babel-jest',
    '\\.vue$': 'jest-vue-preprocessor',
  },
}
