class shoppingCartOperations {
    elements = {
shoppingCartIcon: () => cy.get('[id="shopping_cart_container"]'),
yourCartHeader: () => cy.get('.title'),
addToCartButtonBck: () => cy.get('[id="add-to-cart-sauce-labs-backpack"]'),
shoppingCartBadge: () => cy.get ('.shopping_cart_badge'),
addToCartButton: () => cy.get('button').contains('Add to cart'),
removeProduct: () => cy.get('button').contains('Remove'),
continueShoppingBtn: () => cy.get('button').contains('Continue Shopping'),
productsPageHeader: () => cy.get('.title')
}
toYourCartWithoneProduct(){
    this.elements.addToCartButton().first().click();
    this.elements.shoppingCartIcon().click();
}
addToCartProducts(x){
    let i =0;
    while (i<x) {
    this.elements.addToCartButton().first().click();
    i ++; }
    }
removeProducts(x){
    let i=0;
    while(i<x){
        this.elements.removeProduct().first().click();
        i++;
    }
}
}
    module.exports = new shoppingCartOperations();