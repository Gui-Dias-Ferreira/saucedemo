//// <reference types="Cypress" />
import { produtos } from "../fixtures/produtos.json";
describe("Testes na página de inventario", () => {
  beforeEach(() => {
    cy.login();
  });
  it("Adicionar 1 produto ao carrinho e realizar checkout", () => {
    cy.adicionarProdutoCarrinho("add-to-cart-sauce-labs-backpack");
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type("Jhon");
    cy.get('[data-test="lastName"]').type("Dias");
    cy.get('[data-test="postalCode"]').type("12345");
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="title"]').should("contain.text", "Checkout: Overview");
    cy.get('[data-test="finish"]').click();
    cy.get('[data-test="title"]').should("contain.text", "Checkout: Complete!");
  });
  it("Remover 1 produto do carrinho", () => {
    cy.adicionarProdutoCarrinho("add-to-cart-sauce-labs-backpack");
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('[data-test="continue-shopping"]').click();
    cy.url().should("contain", "/inventory.html");
  });

  it.only("Filtrar produtos por ordem alfabética", () => {
    cy.get('[data-test="product-sort-container"]').select("za");
    cy.get('[data-test="product-sort-container"]').should("have.value", "za");
  });
});
