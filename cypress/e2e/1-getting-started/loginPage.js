class loginPage {
elements = {
usernameInput: () => cy.get('[id="user-name"]'),
passwordInput: () => cy.get('[id="password"]'),
submitButton: () => cy.get('[type="submit"]'),
errorMsgLogin: () => cy.get('[data-test="error"]'),
productsHeader: () => cy.get('[id="header_container"]')
}
submitCredentials(username,password){

    this.elements.usernameInput().click().type(username);
    this.elements.passwordInput().click().type(password);
    this.elements.submitButton().click();
}
}

module.exports = new loginPage();