/// <reference types="cypress" />
import { loginBtnEl } from './vars';

describe('articles', () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
  });
  it('should show login page if not loggend in', () => {
    cy.location('pathname').should('equal', '/login');
  });

  it('should login ', () => {
    cy.get(loginBtnEl).click();
    cy.location('pathname').should('equal', '/');
  });

  it('should redirect to home if is logged in', () => {
    cy.login();
    cy.location('pathname').should('equal', '/');
  });
});
