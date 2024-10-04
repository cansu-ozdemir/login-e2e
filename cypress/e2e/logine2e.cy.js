import { errorMessages } from "../../src/components/Login";

describe('Login Page', () => {
  describe('Error Messages', () => {
  it('name input throws error for 2 charcs', () => {
   cy.visit('http://localhost:5178/')
   cy.get('[data-cy="ad-input"]').type("ca");
   cy.contains(errorMessages.ad);
  });
  it('surname input throws error for 2 charcs', () => {
    cy.visit('http://localhost:5178/')
    cy.get('[data-cy="soyad-input"]').type("öz");
    cy.contains(errorMessages.soyad);
   });
   it('Email input throws error for cansu@gmail.', () => {
    cy.visit('http://localhost:5178/')
    cy.get('[data-cy="email-input"]').type("cansu@gmail.");
    cy.contains(errorMessages.email);
   });
   it('Password input throws error for 1234', () => {
    cy.visit('http://localhost:5178/')
    cy.get('[data-cy="password-input"]').type("1234");
    cy.contains(errorMessages.password);
   });
   it('button is disabled for unvalidated inputs', () => {
    cy.visit('http://localhost:5178/')
    cy.get('[data-cy="email-input"]').type("cansu@gmail.");
    cy.get('[data-cy="submit-button"]').should("be.disabled");
   });
});
describe('Form inputs validated', () => {
  it('button enabled for validated inputs', () => {
   cy.visit('http://localhost:5178/')
   cy.get('[data-cy="ad-input"]').type("cansu");
   cy.get('[data-cy="soyad-input"]').type("özdemir");
   cy.get('[data-cy="email-input"]').type("cansuozzdemir@gmail.com");
   cy.get('[data-cy="password-input"]').type("1234Ab*.");
   cy.get('[data-cy="submit-button"]').should("be.enabled");
  });
});
});