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
  it("Deve usar todos os filtros de produtos", () => {
    cy.filtrarProdutos();
  });
});
