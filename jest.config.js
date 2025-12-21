module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverageFrom: [
    '**/*.ts',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/dist/**',
    '!**/jest.config.js',
    '!**/a_faire/**',
  ],
  moduleFileExtensions: ['ts', 'js', 'json'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '.*a_faire.*'],
  modulePathIgnorePatterns: ['<rootDir>/dist/', '.*a_faire.*'],
};