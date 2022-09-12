// ***********************************************
const selectors= require('../fixtures/selectors.json')

Cypress.Commands.add('login', (email, password) => { 
    cy.get(selectors.emailField).click().type(email);
    cy.get(selectors.passwordField).type(password);
    cy.get(selectors.loginButton).click();
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })