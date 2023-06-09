const nextJest = require('next/jest')
const createJestConfig = nextJest({ dir: './' })
// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
    moduleNameMapper: {
        '^@/styles/(.*)$': '<rootDir>/styles/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
