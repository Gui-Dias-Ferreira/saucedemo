import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
     cacheAcrossSpecs: true
  },
  fixturesFolder: false,
  video: false
});
