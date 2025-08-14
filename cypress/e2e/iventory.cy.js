//// <reference types="Cypress" />
import { produtos } from "../fixtures/produtos.json";
describe("Testes na página de inventario", () => {
  beforeEach(() => {
    cy.login();
  });
  it("Adicionar 1 produto ao carrinho e realizar checkout", () => {
    cy.realizarCheckout("add-to-cart-sauce-labs-backpack");
  });
  it("Remover 1 produto do carrinho", () => {
    cy.removeProdutoCarrinho("add-to-cart-sauce-labs-backpack");
  });
  it("Filtrar produtos por ordem alfabética", () => {
    cy.get('[data-test="product-sort-container"]').select("za");
    cy.get('[data-test="product-sort-container"]').should("have.value", "za");
  });
});
