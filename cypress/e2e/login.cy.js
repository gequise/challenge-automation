const { loginPage } = require("../pages/LoginPage");

describe("Login tests ", function () {
  let credentialData;
  let messageText;
  beforeEach(() => {
    loginPage.visit();

    cy.fixture("saucedemoCredentials").then((fdata) => {
      credentialData = fdata;
    });
    cy.fixture("saucedemoErrorMessages").then((fmessageText) => {
      messageText = fmessageText;
    });
  });
  it("Login with valid credentials", function () {
    loginPage.validateLoginPage();
    loginPage.login(
      credentialData.valid_username,
      credentialData.valid_password
    );
    loginPage.validateSuccessfulLogin();
  });

  it("Login with invalid username and password", function () {
    loginPage.validateLoginPage();
    loginPage.login(
      credentialData.invalid_username,
      credentialData.invalid_password
    );
    loginPage.validateErrorLogin();
    loginPage.validateMessageError(messageText.credential_invalid);
  });

  it("Login with invalid user", function () {
    loginPage.validateLoginPage();
    loginPage.login(
      credentialData.invalid_username,
      credentialData.valid_password
    );
    loginPage.validateErrorLogin();
    loginPage.validateMessageError(messageText.credential_invalid);
  });

  it("Login with invalid password", function () {
    loginPage.validateLoginPage();
    loginPage.login(
      credentialData.valid_username,
      credentialData.invalid_password
    );
    loginPage.validateErrorLogin();
    loginPage.validateMessageError(messageText.credential_invalid);
  });

  it("Login with empty username and password fields", function () {
    loginPage.validateLoginPage();
    loginPage.loginWithoutUsernameAndPassword();
    loginPage.validateErrorLogin();
    loginPage.validateMessageError(messageText.empty_username);
  });

  it("Login with empty username and valid password", function () {
    loginPage.validateLoginPage();
    loginPage.loginWithoutUsername(credentialData.valid_password);
    loginPage.validateErrorLogin();
    loginPage.validateMessageError(messageText.empty_username);
  });

  it("Login with valid username and empty password", function () {
    loginPage.validateLoginPage();
    loginPage.loginWithoutPassword(credentialData.valid_username);
    loginPage.validateErrorLogin();
    loginPage.validateMessageError(messageText.empty_password);
  });

  it("Login with username in upper case", function () {
    loginPage.validateLoginPage();
    loginPage.login(
      credentialData.username_in_uppercase,
      credentialData.valid_password
    );
    loginPage.validateSuccessfulLogin();
  });
});
