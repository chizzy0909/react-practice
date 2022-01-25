module.exports = {
  // setupFilesAfterEnv: ["<rootDir>/test.config.js"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  transform: {
    ".(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/file-mock.js",
    ".(css|less)$": "<rootDir>/style-mock.js",
  },
};
