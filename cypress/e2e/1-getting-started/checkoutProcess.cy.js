/// <reference types="cypress" />
import checkoutProcess from "./checkoutProcess";
import shoppingCartOperation from "./shoppingCartOperation";
import loginPage from "./loginPage";

describe('Shopping cart operations, without - 3 ', () => {

    beforeEach(() => {
      cy.visit('/', {
        onBeforeLoad(win){
          delete win.navigator.__proto__.serviceWorker //disable service worker
        }
      })
      loginPage.submitCredentials(Cypress.env("user").vaildUsername, Cypress.env("user").validPassword);
    })

    it('Clicking the Checkout button, redirects to the Checkout: Your Information page.', () => {
        shoppingCartOperation.toYourCartWithoneProduct();
        checkoutProcess.elements.checkoutButton().click();
        checkoutProcess.elements.pageHeader().should('have.text', 'Checkout: Your Information')

    })

    it('Filling out the form with valid inputs and proceed to the next page.', () => {
        shoppingCartOperation.toYourCartWithoneProduct();
        checkoutProcess.elements.checkoutButton().click();
        checkoutProcess.fillInformationsForm(Cypress.env("user").checkoutFirstName, Cypress.env("user").checkoutLastName, Cypress.env("user").checkoutZIP);
        checkoutProcess.elements.pageHeader().should('have.text','Checkout: Overview')
    })
    it('Submitting the form with missing required inputs and verify the error messages and input highlighting', () => {
        shoppingCartOperation.toYourCartWithoneProduct();
        checkoutProcess.elements.checkoutButton().click();
        checkoutProcess.fillInformationsFormNoZip(Cypress.env("user").checkoutFirstName, Cypress.env("user").checkoutLastName);
        checkoutProcess.elements.infoFormErrorMsg().contains('Error: Postal Code is required');
        checkoutProcess.elements.zipInput().should('have.css', 'border-bottom-color',  'rgb(226, 35, 26)');
    })
    it ('Cancel button on the Checkout: Your Information page redirects to the shopping cart', () => {
      shoppingCartOperation.toYourCartWithoneProduct();
      checkoutProcess.elements.checkoutButton().click();
      checkoutProcess.elements.cancelBtnYourInfo().click();
      checkoutProcess.elements.pageHeader().should('have.text', 'Your Cart');
    })
    it ('Checkout: Overview page displays the order details (Products list, Payment, Information, Shipping Information, Price total, and Total)', () => {
      shoppingCartOperation.toYourCartWithoneProduct();
      checkoutProcess.elements.checkoutButton().click();
      checkoutProcess.fillInformationsForm(Cypress.env("user").checkoutFirstName, Cypress.env("user").checkoutLastName, Cypress.env("user").checkoutZIP);
      checkoutProcess.elements.qtOverview().should('have.text','1');
      checkoutProcess.elements.descriptionOverview().contains('Sauce Labs Backpack');
      checkoutProcess.elements.summaryInfo().eq(0).contains('Payment Information');
      checkoutProcess.elements.summaryInfo().eq(1).contains('Shipping Information');
      checkoutProcess.elements.summaryInfo().eq(2).contains('Price Total');
      checkoutProcess.elements.summaryInfo().eq(3).contains('Total')
    })
    it('Cancel button on the Checkout: Overview page redirects the user back to the product list page', () => {
      shoppingCartOperation.toYourCartWithoneProduct();
      checkoutProcess.elements.checkoutButton().click();
      checkoutProcess.fillInformationsForm(Cypress.env("user").checkoutFirstName, Cypress.env("user").checkoutLastName, Cypress.env("user").checkoutZIP);
      checkoutProcess.elements.cancelBtnOveview().click();
      shoppingCartOperation.elements.productsPageHeader().should('have.text', 'Products')
    })
    it('Finish button on the Checkout: Overview page redirects the user to the Checkout: Complete page.', () => { 
      shoppingCartOperation.toYourCartWithoneProduct();
      checkoutProcess.elements.checkoutButton().click();
      checkoutProcess.fillInformationsForm(Cypress.env("user").checkoutFirstName, Cypress.env("user").checkoutLastName, Cypress.env("user").checkoutZIP);
      checkoutProcess.elements.finishBtn().click();
      checkoutProcess.elements.pageHeader().should('have.text', 'Checkout: Complete!');
    })
    it('Back Home button on the Checkout: Complete page and verify it redirects the user to the product list page.', () => { 
      shoppingCartOperation.toYourCartWithoneProduct();
      checkoutProcess.elements.checkoutButton().click();
      checkoutProcess.fillInformationsForm(Cypress.env("user").checkoutFirstName, Cypress.env("user").checkoutLastName, Cypress.env("user").checkoutZIP);
      checkoutProcess.elements.finishBtn().click();
      checkoutProcess.elements.backHomeBtn().click();
      shoppingCartOperation.elements.productsPageHeader().should('have.text', 'Products');
      
    })
})