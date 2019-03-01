module.exports = {
  rootDir: './',
  testMatch: ['**/?(*.)+(jest.js)'],
  setupFilesAfterEnv: ['./test/jest.setup.js'],
  bail: true,
  clearMocks: true,
  moduleFileExtensions: ['js', 'json'],
  moduleDirectories: ['node_modules', 'src', 'test'],
  moduleNameMapper: {
    '\\.(jpg|png|svg)$': '<rootDir>/test/jest.fileMocks.js',
    '\\.(css)$': '<rootDir>/test/jest.styleMocks.js'
  },
  collectCoverageFrom: ['src/**/*.js', '!src/**/*.stories.js'],
  coveragePathIgnorePatterns: ['node_modules/', '__stories__']
}
