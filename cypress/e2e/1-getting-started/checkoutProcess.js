class loginPage {
    elements = {
        checkoutButton: () => cy.get('button').contains('Checkout'),
        pageHeader: () => cy.get('.title'),
        firstNameInput:() => cy.get('[id="first-name"]'),
        lastNameInput: () => cy.get('[id="last-name"]'),
        zipInput: () => cy.get('[id="postal-code"]'),
        continueBtn: () => cy.get('[id="continue"]'),
        infoFormErrorMsg: () => cy.get('[data-test="error"]'),
        cancelBtnYourInfo: () => cy.get('[id="cancel"]'),
        descriptionOverview: () => cy.get('.inventory_item_name'),
        qtOverview: () => cy.get('.cart_quantity'),
        summaryInfo: () => cy.get('.summary_info_label'),
        cancelBtnOveview: () => cy.get('[id="cancel"]'),
        finishBtn: () => cy.get('[id="finish"]'),
        backHomeBtn: () => cy.get('[id="back-to-products"]')
    }
fillInformationsForm(firstName,lastName, zip){
this.elements.firstNameInput().click().type(firstName);
this.elements.lastNameInput().click().type(lastName);
this.elements.zipInput().click().type(zip);
this.elements.continueBtn().click();
    }
    fillInformationsFormNoZip(firstName,lastName){
        this.elements.firstNameInput().click().type(firstName);
        this.elements.lastNameInput().click().type(lastName);
        this.elements.continueBtn().click();
            }
}

module.exports = new loginPage();