import { postElement, articlePageElement } from './vars';
describe('articles', () => {
  beforeEach(() => {
    cy.login();
    cy.visit(Cypress.env().baseUrl);
    cy.intercept('POST', 'https://api.bettermode.com/', {
      fixture: 'articles-p1.json',
    }).as('page1');
  });

  it('should show 6 article', () => {
    cy.get(postElement).should('have.length', 6);
  });

  it('should open an article page', () => {
    cy.wait('@page1');
    cy.intercept('POST', 'https://api.bettermode.com/', {
      fixture: 'article-post-1.json',
    }).as('post-1');
    cy.get(postElement).first().click();
    cy.location('pathname').should('equal', '/post/vJVCe9KKOimoMYO');
    cy.get(articlePageElement).should('exist');
  });
});
