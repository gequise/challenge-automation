// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
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

Cypress.Commands.add("login", () => {
  const usernameInput = '[data-test="username"]';
  const passwordInput = '[data-test="password"]';
  const loginButton = '[data-test="login-button"]';

  cy.fixture("saucedemoCredentials").then(function (credentialData) {
    this.credentialData = credentialData;
    cy.visit("/");
    cy.get(usernameInput).type(this.credentialData.valid_username);
    cy.get(passwordInput).type(this.credentialData.valid_password);
  });
  cy.get(loginButton).click();
});

Cypress.Commands.add("verifyMercadoLibreDepartments", () => {
  cy.request({
    method: "GET",
    url: "https://www.mercadolibre.com.ar/menu/departments",
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.departments).to.exist;
    expect(response.body.departments).to.be.an("array").that.is.not.empty;
  });
});

Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-test=${selector}]`);
});
