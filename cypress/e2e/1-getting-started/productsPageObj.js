class productsPageObj {
elements = { 
imgBox: () => cy.get('.inventory_item .inventory_item_img'),
productBox: () => cy.get('.inventory_item .inventory_item_description'),
itemDescription: () => cy.get('.inventory_item .inventory_item_description .inventory_item_desc'),
itemPrice: () => cy.get('.inventory_item .inventory_item_description .inventory_item_price')
}
innerTextToArray(){
    const textDesc =($el) => {
        return Cypress._.map($el, 'innerText')
      }
}
}
module.exports = new productsPageObj();