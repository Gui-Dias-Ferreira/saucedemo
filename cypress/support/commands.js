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

Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
})

Cypress.Commands.add('adicionarProdutoCarrinho', (productTestId) => {
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
});

// Cypress.Commands.add('login', () => {
//   const username = users.usuario_valido.nome
//   const password = users.usuario_valido.senha

//   cy.session([username, password], () => {
//     cy.visit('/')

//     cy.get('[data-test="username"]').type(username)
//     cy.get('[data-test="password"]').type(password, { log: false })
//     cy.get('[data-test="login-button"]').click()

//     cy.url().should('contain', '/inventory.html')
//     // cy.location('pathname').should('eq', '/inventory.html')
//   })
// })

// Cypress.Commands.add('login', (
//   userName = users.usuario_valido.nome, 
//   password = users.usuario_valido.senha
// ) => {
//   const login = () => {
//       //cy.session([userName], () => {
//         cy.visit('/')

//         cy.get('[data-test="username"]').type(userName)
//         cy.get('[data-test="password"]').type(password, { log: false })
//         cy.get('[data-test="login-button"]').click()
//         cy.url().should('include', '/inventory.html')
//         // cy.url().should('contain', '/inventory.html') -> com Validate, não preciso fazer essa verificação
//       },
//       {
//         /*
//           Verifico se a sessão do usuário ainda está válida.
//           Garante que a sessão não expirou.
//           Evita reaproveitar sessões inválidas.
//           Deixa seus testes mais rápidos e confiáveis.
//         */ 
//         validate() {
//           // Verifica se está logado na página correta
//           cy.location('pathname').should('include', '/inventory.html')
          
//           // cy.location('pathname', { timeout: 1000 })
//           //   .should('not.eq', '/')
//           // // cy.request('api/unique-events').its('status').should('eq', 200)
//         },
//         cacheAcrossSpecs: true,
//       })
//       // Após restaurar a sessão, garante que a página correta seja acessada
//       cy.visit('/inventory.html')
//     } 
//   //}
  
//)