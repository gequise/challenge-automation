const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    retries: 2,
    baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
