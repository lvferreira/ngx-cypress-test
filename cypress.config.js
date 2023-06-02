const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'baovmg',
  e2e: {
    baseUrl: "http://localhost:4200",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
});
