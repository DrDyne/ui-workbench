module.exports = {
  rootDir: './',
  testMatch: ['**/?(*.)+(jest.js)'],
  setupFilesAfterEnv: ['./.jest/jest.setup.js'],
  bail: true,
  clearMocks: true,
  moduleFileExtensions: ['js', 'json'],
  moduleDirectories: ['src', 'node_modules'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|svg)$': '<rootDir>/.jest/jest.fileMocks.js',
    '\\.(css)$': '<rootDir>/.jest/jest.styleMocks.js'
  },
  collectCoverageFrom: ['src/**/*.js', '!src/**/*.stories.js'],
  coverageDirectory: 'docs/coverage',
  coveragePathIgnorePatterns: ['node_modules/', 'stories/', '__snapshots__'],
  snapshotSerializers: ['jest-emotion']
}
