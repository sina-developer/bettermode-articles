import { HeartBtnElement, articlePageElement } from './vars';

describe('articles', () => {
  beforeEach(() => {
    cy.login();
    cy.visit(Cypress.env().baseUrl + 'post/vJVCe9KKOimoMYO');
    cy.intercept('POST', 'https://api.bettermode.com/', {
      fixture: 'article-post-1-without-like.json',
    }).as('post-1');
    cy.wait('@post-1');
  });

  it('should show article page', () => {
    cy.get(articlePageElement).should('exist');
  });

  it('should like a post', () => {
    cy.intercept('POST', 'https://api.bettermode.com/', {
      fixture: 'like-post.json',
    }).as('liked-post');
    cy.get(HeartBtnElement).click();
    cy.wait('@liked-post');
  });

  it('should dislike a post', () => {
    cy.intercept('POST', 'https://api.bettermode.com/', {
      fixture: 'dislike-post.json',
    }).as('disliked-post');
    cy.get(HeartBtnElement).click();
    cy.wait('@disliked-post');
  });
});
