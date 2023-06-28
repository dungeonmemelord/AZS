export default {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['./tests/setup.js'],
  testEnvironment: 'jest-environment-jsdom',
};
