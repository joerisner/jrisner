import { capitalize } from '../support/utils';

describe('Navigation', () => {
  it('has expected navigation link behavior', () => {
    const navLinks = [
      { text: 'home', path: '/', title: 'Joseph Risner' },
      { text: 'blog', path: '/blog' },
      { text: 'about', path: '/about' },
      { text: 'resume', path: '/resume' },
    ];

    cy.goto('/');
    navLinks.forEach((navLink) => {
      cy.getByTestId('navBar').should('contain.text', navLink.text);
      cy.getByTestId(`navLink${navLink.text}`).click();
      cy.location('pathname').should('eq', navLink.path);

      if (navLink.title) {
        cy.title().should('eq', navLink.title);
      } else {
        cy.title().should('eq', `${capitalize(navLink.text)} | Joseph Risner`);
      }
    });
  });
});
