
/// <reference types="cypress" />
import loginPage from "./loginPage";


  describe('Login functionality', () => {

    beforeEach(() => {
      cy.visit('/', {
        onBeforeLoad(win){
          delete win.navigator.__proto__.serviceWorker
        }
      })
  
    })

    it('Username input is loading ', () => {
      loginPage.elements.usernameInput().should('be.visible');
    })
    it('Password input is loading ', () => {
      loginPage.elements.passwordInput().should('be.visible');
    })
    it('Login button is loading ', () => {
      loginPage.elements.submitButton().should('be.visible');
    })

    it('Login successful', () => {
      loginPage.submitCredentials(Cypress.env("user").vaildUsername, Cypress.env("user").validPassword);
      loginPage.elements.productsHeader().should('contain','Products');   
    })
    it('Login fail', () => {
      loginPage.submitCredentials(Cypress.env("user").invalidUser, Cypress.env("user").invalidPassword);
      loginPage.elements.errorMsgLogin().should('be.visible');
      //contains('Epic sadface: Username and password do not match any user in this service')
      
    })

  })
/*
    it('Login successful', () => {
      //login
      cy.visit('https://www.saucedemo.com/');
      //type credentials
      cy.get('[id="user-name"]').click().type('standard_user');
      cy.get('[id="password"]').click().type('secret_sauce');
      //click submit
      cy.get('[type="submit"]').click();
      //assertion
      cy.get('[id="header_container"]').should('contain','Products');
      //logout
      cy.get('[id="react-burger-menu-btn"]').click();
      cy.get('[id="logout_sidebar_link"]').click();

    })
    it('Login unsuccessful - username wrong', () => {
    loginPage.submitcredentials('not_standard_user', 'not_secret_sauce');
  })
    afterEach(() => {
      cy.clearCookies()
      cy.getCookies().should('be.empty') */
  /*   })

    afterEach(() => {
      cy.get('[id="react-burger-menu-btn"]').click();
      cy.get('[id="logout_sidebar_link"]').click();
    }) */
  
  
