describe('Navigation', () => {
  it('has expected navigation link behavior', () => {
    const navLinks = [
      { text: 'Home', path: '/', title: 'Joseph Risner' },
      { text: 'Blog', path: '/blog' },
      { text: 'About', path: '/about' },
      { text: 'Resume', path: '/resume' },
    ];

    cy.goto('/');
    navLinks.forEach((navLink) => {
      cy.getByTestId('navBar').should('contain.text', navLink.text);
      cy.getByTestId(`navLink${navLink.text}`).click();
      cy.location('pathname').should('eq', navLink.path);

      if (navLink.title) {
        cy.title().should('eq', navLink.title);
      } else {
        cy.title().should('eq', `${navLink.text} | Joseph Risner`);
      }
    });
  });
});
