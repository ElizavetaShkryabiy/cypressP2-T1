const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4iicv7',
  
  "retries" : 1,
  "pageLoadTimeout": 60000,     
  "screenshotOnRunFailure" : true ,
  e2e: {
    baseUrl: 'http://qamid.tmweb.ru/client/index.php',

    setupNodeEvents(on, config) {      
    },
  },
});
