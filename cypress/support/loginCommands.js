export {}
declare global {
    namespace Cypress {
        interface Chainable {
            submitCredentials(username: string, password: string): Chainable<void>
        }
    }
}
Cypress.Commands.add('submitCredentials', (username, password) => {
    cy.get('[id="user-name"]').click().type(username);
    cy.get('[id="password"]').click().type(password);
    cy.get('[type="submit"]').click();
})


