/// <reference types="Cypress" />

//Recommended best practice is to use these custom data attributes. In React you can just pass that in as a prop and give it the value that you want.

describe("page navigation", () => {
  it("should navigate between pages", () => {
    cy.visit("http://localhost:5173/");
    cy.get("[data-cy='header-about-link']").click();
    cy.location("pathname").should("equal", "/about");
    cy.get("[data-cy='header-home-link']").click();
    cy.location("pathname").should("equal", "/");
    cy.get("[data-cy='header-about-link']").click();
    cy.location("pathname").should("equal", "/about");
    cy.go("back");
    cy.location("pathname").should("equal", "/");
  });
});
