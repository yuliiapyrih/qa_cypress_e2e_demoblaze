const { defineConfig } = require('cypress')
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    viewportHeight: 1080,
    viewportWidth: 1980,
    setupNodeEvents(on, config) {
      on("task", {
        generateUser() {
          return { 
            username: faker.name.firstName(),
            password: 'Mate1234!'
          };
        }
      })
    },
  },
})
