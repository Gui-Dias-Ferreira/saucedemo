/// <reference types="Cypress" />

import { usuario_valido } from '../fixtures/usuarios.json';

Cypress.Commands.add('login', (
   username = usuario_valido.nome,
   password = usuario_valido.senha
) => {
    cy.visit('/')
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password, { log: false })
    cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('loginCamposVazio', () => {
    cy.visit("/")
    cy.get('[data-test="login-button"]').click();   
    cy.get('[data-test="error-button"]').should('be.visible');    
})

Cypress.Commands.add('loginCampoSenhaVazio', (username = usuario_valido.nome) => {
    cy.visit("/")
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="login-button"]').click();   
    cy.get('[data-test="error-button"]').should('be.visible');
})

Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
})

Cypress.Commands.add('realizarCheckout', (productTestId) => {
    cy.get(`[data-test="${productTestId}"]`).click();
    cy.get('.shopping_cart_badge').should('contain', '1');
    cy.get(".shopping_cart_badge").click();
    cy.get('[data-test="title"]').should("contain.text", "Your Cart");
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type("Jhon");
    cy.get('[data-test="lastName"]').type("Dias");
    cy.get('[data-test="postalCode"]').type("12345");
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="title"]').should("contain.text", "Checkout: Overview");
    cy.get('[data-test="finish"]').click();
    cy.get('[data-test="title"]').should("contain.text", "Checkout: Complete!");
});

Cypress.Commands.add('removeProdutoCarrinho', (productTestId) => {
    cy.get(`[data-test="${productTestId}"]`).click();
    cy.get('.shopping_cart_badge').should('contain', '1');
    cy.get(".shopping_cart_badge").click();
    cy.get('[data-test="title"]').should("contain.text", "Your Cart");
     cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('[data-test="continue-shopping"]').click();
    cy.url().should("contain", "/inventory.html");
});

