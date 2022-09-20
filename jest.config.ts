import type { Config } from '@jest/types'

export default {
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coveragePathIgnorePatterns: ['<rootDir>/src/index.ts'],
  preset: 'ts-jest',
  testMatch: ['<rootDir>/tests/**/*.test.ts']
} as Config.InitialOptions
