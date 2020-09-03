module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  moduleNameMapper: {
    "^@/root(.*)$": "<rootDir>",
    "^@/pages(.*)$": "<rootDir>/pages$1",
    "^@/components(.*)$": "<rootDir>/components$1",
    "^@/services(.*)$": "<rootDir>/services$1",
    "^@/utils(.*)$": "<rootDir>/utils$1",
    "^@/hooks(.*)$": "<rootDir>/hooks$1",
    "^@/fixtures(.*)$": "<rootDir>/fixtures$1",
    "^@/constants(.*)$": "<rootDir>/constants$1",
    "^@/selectors(.*)$": "<rootDir>/selectors$1",
    "^@/styles(.*)$": "<rootDir>/styles$1",
  },
  coverageThreshold: {
    global: {
      "branches": 95,
      "functions": 95,
      "lines": 95,
      "statements": 95
    }
  },
  coverageReporters: [
    "html",
    "text"
  ],
  collectCoverageFrom: [
    "components/*.{js,jsx,ts,tsx}",
    "constants/*.{js,jsx,ts,tsx}",
    "fixtures/*.{js,jsx,ts,tsx}",
    "selectors/*.{js,jsx,ts,tsx}",
    "services/*.{js,jsx,ts,tsx}",
    "pages/*.{js,jsx,ts,tsx}",
  ]
}
