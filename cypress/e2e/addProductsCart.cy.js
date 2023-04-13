const { loginPage } = require("../pages/LoginPage");
const { productPage } = require("../pages/ProductsPage");

describe("Add Products to shopping cart ", function () {
  beforeEach(() => {
    cy.login();
    loginPage.validateSuccessfulLogin();
  });

  it("Click on the Random Add to Cart buton from inventory", function () {
    productPage.getRandomItem();
    productPage.validateCounterCartBadge();
    productPage.assertItemInfo();
  });

  it("Click on the Remove Button from Cart Page", function () {
    productPage.getRandomItem();
    productPage.validateCounterCartBadge();
    productPage.assertItemInfo();
    productPage.clickOnRemoveButton();
    productPage.assertEmptyInfoCart();
  });
});
