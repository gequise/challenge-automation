export class LoginPage {
  constructor() {
    this.usernameInput = "#user-name";
    this.passwordInput = "#password";
    this.loginButton = "#login-button";
    this.errorMessage = ".error-message-container.error";
    this.logoPage = ".app_logo";
    this.burgerMenuButton = "#react-burger-menu-btn";
    this.errorMessageText = '[data-test="error"]';
  }

  visit() {
    cy.visit("/");
  }

  validateLoginPage() {
    cy.get(this.usernameInput).should("be.visible");
    cy.get(this.passwordInput).should("be.visible");
    cy.get(this.loginButton).should("be.visible");
  }

  validateErrorLogin() {
    cy.get(this.errorMessage).should("be.visible");
  }

  validateMessageError(messageText) {
    cy.get(this.errorMessageText).should("contain.text", messageText);
  }

  validateSuccessfulLogin() {
    cy.get(this.logoPage).should("be.visible");
    cy.get(this.burgerMenuButton).should("be.visible");
  }

  login(email, password) {
    cy.get(this.usernameInput).type(email);
    cy.get(this.passwordInput).type(password);
    cy.get(this.loginButton).click();
  }

  loginWithoutUsername(password) {
    cy.get(this.passwordInput).type(password);
    cy.get(this.loginButton).click();
  }

  loginWithoutPassword(email) {
    cy.get(this.usernameInput).type(email);
    cy.get(this.loginButton).click();
  }
  loginWithoutUsernameAndPassword() {
    cy.get(this.loginButton).click();
  }
}

export const loginPage = new LoginPage();
