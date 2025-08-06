/// <reference types="Cypress" />
import { produtos } from '../fixtures/produtos.json';
describe("Testes na página de inventario", () => {
  beforeEach(() => {
    cy.login();
  });
  it("Adicionar 1 produto ao carrinho e realizar checkout", () => {
    cy.adicionarProdutoCarrinho('add-to-cart-sauce-labs-backpack');
    cy.get('[data-test="title"]').should("contain.text", "Checkout: Complete!");
  });
});
