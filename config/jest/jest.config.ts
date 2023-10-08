/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

export default {
    // All imported modules in your tests should be mocked automatically
    // automock: false,

    // Stop running tests after `n` failures
    // bail: 0,

    // The directory where Jest should store its cached dependency information
    // cacheDirectory: "/tmp/jest_rt",

    // Automatically clear mock calls, instances and results before every test
    clearMocks: true,

    // The test environment that will be used for testing
    testEnvironment: 'jsdom',

    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: [
        '/node_modules/',
    ],

    modulePaths: [
        '<rootDir>src',
    ],

    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: [
        'node_modules',
        'src',
    ],

    // An array of file extensions your modules use
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],

    // The glob patterns Jest uses to detect test files
    testMatch: [
        // works on MACOS and Windows
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],

    // The root directory that Jest should scan for tests and modules within
    rootDir: '../../',

    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],

    moduleNameMapper: {
        '\\.(s?css)$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },
};
