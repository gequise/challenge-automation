describe("Login with Invalid username and password ", function () {
  it("login error", function () {
    cy.login("asdasd", "asdasd");
  });
});

describe("Login with valid credentials", function () {
  it("login error", function () {
    cy.login("standard_user", "secret_sauce");
  });
});
