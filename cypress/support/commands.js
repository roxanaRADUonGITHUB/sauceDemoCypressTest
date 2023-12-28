
/* let customCommands { 

    Cypress.Commands.add('submitCredentials', (user) => {
    cy.session(
      user,
      () => {
        
        cy.get('[id="user-name"]').click().type(user.username)
        cy.get('[id="password"]').click().type(user.password)
        cy.get('[type="submit"]').click()
      }

    )
  })

} 
export customCommands from './commands.js'' */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("submitCredentials"s, (username, password) => {
  cy.get('[id="user-name"]').click().type(username)
  cy.get('[id="password"]').click().type(password)
  cy.get('[type="submit"]').click();
})