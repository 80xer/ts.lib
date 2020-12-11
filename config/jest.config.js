module.exports = {
  rootDir: "../",
  moduleNameMapper: {
    ".*.(css|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/config/jest.setup.js"],

  globals: {
    "babel-jest": {
      babelrcFile: "<rootDir>/config/.babelrc",
    },
  },
};
