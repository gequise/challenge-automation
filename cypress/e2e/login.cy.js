const { loginPage } = require("../pages/LoginPage");

describe("Login tests ", function () {
  beforeEach(() => {
    loginPage.visit();
    cy.fixture("saucedemoCredentials").then(function (credentialData) {
      this.credentialData = credentialData;
    });
    cy.fixture("saucedemoErrorMessages").then(function (messageText) {
      this.messageText = messageText;
    });
  });
  it("Login with valid credentials", function () {
    loginPage.validateLoginPage();
    loginPage.login(
      this.credentialData.valid_username,
      this.credentialData.valid_password
    );
    loginPage.validateSuccessfulLogin();
  });

  it("Login with invalid username and password", function () {
    loginPage.validateLoginPage();
    loginPage.login(
      this.credentialData.invalid_username,
      this.credentialData.invalid_password
    );
    loginPage.validateErrorLogin();
    loginPage.validateMessageError(this.messageText.credential_invalid);
  });

  it("Login with invalid user", function () {
    loginPage.validateLoginPage();
    loginPage.login(
      this.credentialData.invalid_username,
      this.credentialData.valid_password
    );
    loginPage.validateErrorLogin();
    loginPage.validateMessageError(this.messageText.credential_invalid);
  });

  it("Login with invalid password", function () {
    loginPage.validateLoginPage();
    loginPage.login(
      this.credentialData.valid_username,
      this.credentialData.invalid_password
    );
    loginPage.validateErrorLogin();
    loginPage.validateMessageError(this.messageText.credential_invalid);
  });

  it("Login with empty username and password fields", function () {
    loginPage.validateLoginPage();
    loginPage.loginWithoutUsernameAndPassword();
    loginPage.validateErrorLogin();
    loginPage.validateMessageError(this.messageText.empty_username);
  });

  it("Login with empty username and valid password", function () {
    loginPage.validateLoginPage();
    loginPage.loginWithoutUsername(this.credentialData.valid_password);
    loginPage.validateErrorLogin();
    loginPage.validateMessageError(this.messageText.empty_username);
  });

  it("Login with valid username and empty password", function () {
    loginPage.validateLoginPage();
    loginPage.loginWithoutPassword(this.credentialData.valid_username);
    loginPage.validateErrorLogin();
    loginPage.validateMessageError(this.messageText.empty_password);
  });

  it("Login with username in upper case", function () {
    loginPage.validateLoginPage();
    loginPage.login(
      this.credentialData.username_in_uppercase,
      this.credentialData.valid_password
    );
    loginPage.validateSuccessfulLogin();
  });
});
