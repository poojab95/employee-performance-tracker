module.exports = {
    preset: 'jest-expo',
    collectCoverage: true,
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|expo(nent)?|@expo(nent)?/.*|@testing-library)',
    ],
};