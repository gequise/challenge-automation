const { loginPage } = require("../pages/LoginPage");

describe("Add Products Carts ", function () {
  beforeEach(() => {
    cy.login();
  });
  it("Login with valid credentials before cart", function () {
    loginPage.validateSuccessfulLogin();
  });
});
