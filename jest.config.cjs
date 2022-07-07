/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "@shelf/jest-mongodb",
  testEnvironment: "node",
  testMatch: ["**/**/*.spec.js"],
  verbose: true,
  forceExit: true,
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  transform: {
      "^.+\\.[t|j]sx?$": "babel-jest"
}
};