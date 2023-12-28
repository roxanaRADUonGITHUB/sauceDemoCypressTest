/// <reference types="cypress" />
import loginPage from "./loginPage";
import productsPageObj from "./productsPageObj";

describe('Products listing and sorting ', () => {

    beforeEach(() => {
      cy.visit('/', {
        onBeforeLoad(win){
          delete win.navigator.__proto__.serviceWorker
        }
      })
      loginPage.submitCredentials(Cypress.env("user").vaildUsername, Cypress.env("user").validPassword);
    })

    it('Each product has picture', () => {
      productsPageObj.elements.imgBox().find('img').should('have.length', 6).and('have.attr','src')
      //should('have.attr','src').and('have.length',6)
      //productsPageObj.elements.imgBox().find('img').invoke('attr', 'src').should('include', '/static/media')
    })  
    it ('Each product has title', () => {
      productsPageObj.elements.productBox().find('.inventory_item_name').should('have.length', 6).and('have.text','Sauce Labs BackpackSauce Labs Bike LightSauce Labs Bolt T-ShirtSauce Labs Fleece JacketSauce Labs OnesieTest.allTheThings() T-Shirt (Red)')
      /*then($el => {
        return Cypress._.map($el,'innerText')
        //return Cypress.$.makeArray($el).map((el) => el.innerText)
      }).should('deep.equal', ['Sauce Labs Backpack','Sauce Labs Bolt T-Shirt','Sauce Labs Onesie','Sauce Labs Bike Light','Sauce Labs Fleece Jacket','Test.allTheThings() T-Shirt (Red)'])*/
    })

    it ('Each product has description', () => {
      productsPageObj.elements.itemDescription().should('have.length', 6)
    })
    it('Each product has price', () => {
      productsPageObj.elements.itemPrice().should('have.length', 6)
    })
    it ('Each product has Add to Cart button', () =>{
      productsPageObj.elements.productBox().find('button').should('have.length', 6)
    })

    it('Low to high filter works', () => {
      productsPageObj.elements.itemPrice().invoke('map', (k, el) => {
        const array = el.innerText
        return array
      }).invoke('toArray').should('deep.equal', ['1','2'])
    })
})