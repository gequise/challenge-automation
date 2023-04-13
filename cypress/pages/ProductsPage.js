import { CART_ITEM, CART_ITEM_LABEL } from "../locators/cartPage";
import {
  ADD_TO_CART_BUTTON,
  INVENTORY_BUTTON,
  INVENTORY_ITEM,
  INVENTORY_ITEM_LABEL,
  PRODUCTNAME_TEXT,
  PRODUCTPRICE,
  SHOPPING_CART_BADGE,
  SHOPPING_CART_BUTTON,
} from "../locators/productsPage";

export class ProductPage {
  constructor() {
    this.addToCartButton = ADD_TO_CART_BUTTON;
    this.shoppingCartBadge = SHOPPING_CART_BADGE;
    this.inventoryItem = INVENTORY_ITEM;
    this.productName = PRODUCTNAME_TEXT;
    this.productPrice = PRODUCTPRICE;
    this.inventoryItemLabel = INVENTORY_ITEM_LABEL;
    this.inventoryButton = INVENTORY_BUTTON;
    this.cartButton = SHOPPING_CART_BUTTON;
    this.cartItem = CART_ITEM;
    this.cartItemLabel = CART_ITEM_LABEL;
    this.itemName = "";
    this.itemPrice = "";
  }

  visit() {
    cy.visit("/");
  }

  randomItemSelection(item) {
    return item[Math.floor(Math.random() * item.length)];
  }

  clickOnAddCartButton() {
    cy.get(this.addToCartButton)
      .should("be.visible")
      .then((item) => this.randomItemSelection(item).click());
  }

  validateCounterCartBadge() {
    cy.get(this.shoppingCartBadge).should("contain.text", 1);
  }

  validateNameProduct() {
    cy.get(this.inventoryItem)
      .eq(Math.floor(Math.random() * cy.get(this.inventoryItem).length))
      .then(($product) => {
        const productName = $product.find(this.productName).text();
        const productPrice = $product.find(this.productPrice).text();
        $product.find(this.addToCartButton).click();
        console.log("Product Name", productName);
        console.log("Product Price", productPrice);
      });
  }

  getRandomIndex(length) {
    return Math.floor(Math.random() * length);
  }

  processSelectedItem(randomIndex) {
    cy.get(this.inventoryItem)
      .eq(randomIndex)
      .find(this.inventoryItemLabel)
      .then(($label) => {
        this.itemName = $label.find(this.productName).text();
        // this.itemPrice = $label.find(this.productPrice).text();
        cy.get(this.inventoryItem)
          .eq(randomIndex)
          .find(this.inventoryButton)
          .click();
      });
  }

  getRandomItem() {
    cy.get(this.inventoryItem)
      .its("length")
      .then(($length) => {
        const randomIndex = this.getRandomIndex($length);
        this.processSelectedItem(randomIndex);
      });
  }

  assertItemInfo() {
    cy.get(this.cartButton).click();
    cy.get(this.cartItem).should("have.length", 1);
    cy.get(this.cartItem)
      .find(this.cartItemLabel)
      .then(($cartLabel) => {
        const cartItemName = $cartLabel.find(this.productName).text();
        const cartItemPrice = $cartLabel.find(this.productPrice).text();
        expect(this.itemName).to.eq(cartItemName);
        // expect(this.itemPrice).to.eq(cartItemPrice);
      });
  }
}

export const productPage = new ProductPage();
