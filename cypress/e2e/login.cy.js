const { loginPage } = require("../pages/LoginPage");

describe("Login tests ", function () {
  beforeEach(() => {
    loginPage.visit();
  });

  it("Login with invalid username and password", function () {
    loginPage.validateLoginPage();
    loginPage.login("lalala", "lalala");
    loginPage.validateErrorLogin();
  });

  it("Login with valid credentials", function () {
    loginPage.validateLoginPage();
    loginPage.login("standard_user", "secret_sauce");
    loginPage.validateSuccessfulLogin();
  });
});
