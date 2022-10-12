import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4000',
    excludeSpecPattern: [],
    experimentalSessionAndOrigin: true,
    specPattern: 'cypress/specs/**/*.spec.js',
    supportFile: 'cypress/support/index.js',
  },
});
