module.exports = {
    roots: ['<rootDir>/src'],
    testRegex: '(/.*\\.test)\\.(js|jsx)$',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jsdom',
};
