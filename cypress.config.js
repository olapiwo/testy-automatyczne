const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://www.automationpractice.pl/index.php",
    redirectionLimit: 3,
    retries: {
      runMode: 1,
      openMode: 1
    },
    watchForFileChanges: true,
    chromeWebSecurity: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    waitForAnimations: true,
    testIsolation: false
  },
});
