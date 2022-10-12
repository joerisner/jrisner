Cypress.Commands.add('getByTestId', (testId) => {
  cy.get(`[data-testid=${testId}]`);
});

Cypress.Commands.add('goto', (path) => {
  cy.visit(path).its('location.pathname').should('eq', path);
});
