import {
  BURGUERMENU_BUTTON,
  ERROR_MESSAGE,
  ERROR_MESSAGE_TEXT,
  LOGIN_BUTTON,
  LOGOPAGE_IMAGE,
  PASSWORD_FIELD,
  USERNAME_FIELD,
} from "../locators/loginPage";

export class LoginPage {
  constructor() {
    this.usernameInput = USERNAME_FIELD;
    this.passwordInput = PASSWORD_FIELD;
    this.loginButton = LOGIN_BUTTON;
    this.errorMessage = ERROR_MESSAGE;
    this.logoPage = LOGOPAGE_IMAGE;
    this.burgerMenuButton = BURGUERMENU_BUTTON;
    this.errorMessageText = ERROR_MESSAGE_TEXT;
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
