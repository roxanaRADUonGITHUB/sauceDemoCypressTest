const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com'
  },
  env: {
    "user": {
      "vaildUsername": "standard_user",
      "validPassword": "secret_sauce",
      "invalidUser": "not_standard_user",
      "invalidPassword": "not_secret_sauce",
      "checkoutFirstName": "testFirstName",
      "checkoutLastName": "testLastName",
      "checkoutZIP": "testZIP"
    }
  }
});
