describe('Home Page', () => {
  it('contains expected links on page', () => {
    cy.goto('/');
    cy.getByTestId('employerLink').should('have.text', 'Aumni').and('have.attr', 'href', 'https://aumni.fund');
    cy.getByTestId('githubLink')
      .should('have.text', 'Joseph Risner')
      .and('have.attr', 'href', 'https://github.com/joerisner');

    cy.getByTestId('blogLink').should('have.text', 'Check out the latest blog articles').click();
    cy.title().should('eq', 'Blog | Joseph Risner');
    cy.location('pathname').should('eq', '/blog');
  });
});
