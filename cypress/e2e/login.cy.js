import { usuario_error } from "../fixtures/usuarios.json";

describe("Testes de Login", () => {
  // Deixando esse código comentado, pois não é necessário para o teste atual. O intuito aqui é validar o login. Logout está sendo um plus somente para os testes de Login, por isso não criei uma spec só para realizar esse teste.
  // beforeEach(() => {
  //   cy.login();
  // });

  it("Realizar login com sucesso", () => {
    cy.login();
    cy.url().should("contain", "/inventory.html");
    cy.get(".app_logo").should("contain.text", "Swag Labs");
  });

  it("Não deve realizar login", () => {
    cy.login(usuario_error.nome, usuario_error.senha);
    cy.get('[data-test="error"]').should("be.visible");
  });

  it("Deve fazer o login e depois o logout", () => {
    cy.login(); // Em outros cenários, este cy.login() estaria no BeforeEach, mas como aqui é um teste isolado, não vi a necessidade de coloca-lo no BeforeEach.
    cy.logout();
    cy.url().should("contain", "/");
    cy.get(".app_logo").should("not.exist");
  });
  it("Não deve realizar login com campos vazios", () => {
    cy.loginCamposVazio();
  });

  it("Não deve realizar login sem preencher o campo senha", () => {
    cy.loginCampoSenhaVazio();
  });
});
