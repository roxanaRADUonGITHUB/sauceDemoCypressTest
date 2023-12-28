/// <reference types="cypress" />
import shoppingCartOperation from "./shoppingCartOperation";
import loginPage from "./loginPage";

describe('Shopping cart operations, without - 3 ', () => {

    beforeEach(() => {
      cy.visit('/', {
        onBeforeLoad(win){
          delete win.navigator.__proto__.serviceWorker
        }
      })
      loginPage.submitCredentials(Cypress.env("user").vaildUsername, Cypress.env("user").validPassword);
    })
    it('Checkout button redirects the user to the "Your Cart" page', () => {
        shoppingCartOperation.elements.shoppingCartIcon().click();
        shoppingCartOperation.elements.yourCartHeader().should('have.text', 'Your Cart')
      })  
      it('Multiple products added to cart, badge number updates', () => {
        let nbOfAddedPrdcts = 3
        shoppingCartOperation.addToCartProducts(nbOfAddedPrdcts); 
        shoppingCartOperation.elements.shoppingCartBadge().should('have.text', nbOfAddedPrdcts);
      })
      it('Remove one product, badge number decreases by 1', () =>{
        let nbAddedProducts = 6;
        let nbOfRemovedProducts = 5;
        shoppingCartOperation.addToCartProducts(nbAddedProducts);
        shoppingCartOperation.removeProducts(nbOfRemovedProducts);
        shoppingCartOperation.elements.shoppingCartBadge().should('have.text', nbAddedProducts - nbOfRemovedProducts);
      })
      it ('Continue to shopping button redirects to Products page', () => {
        shoppingCartOperation.elements.shoppingCartIcon().click();
        shoppingCartOperation.elements.continueShoppingBtn().click();
        shoppingCartOperation.elements.productsPageHeader().should('have.text','Products')
      })
})