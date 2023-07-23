/// <reference types="Cypress" />

describe("tests the contact form", () => {
  it("should submit the form", () => {
    cy.visit("http://localhost:5173/");
    cy.get("[data-cy='header-about-link']").click();
    cy.get("[data-cy='contact-input-message']").type("hello");
    cy.get("[data-cy='contact-input-name']").type("Testing Name");
    cy.get("[data-cy='contact-input-email']").type("testing@gmail.com");
    //Best to use an alias and not store in a constant as Cypress does not return the actual button. You instead get an element that Cypress uses a queue of methods/actions on.
    cy.get("[data-cy='contact-btn-submit']").as("submitBtn").click();
    //always good to restructure and chain methods when possible, given example below
    cy.get("@submitBtn").contains("Sending").should("be.disabled");
  });
  it("should mark unfilled, required input areas with a red border", () => {
    cy.visit("http://localhost:5173/");
    cy.get("[data-cy='header-about-link']").click();
    cy.get("[data-cy='contact-input-message']").click();
    cy.get("[data-cy='contact-input-name']").click();
    cy.get("[data-cy='contact-input-email']").click();
    cy.get(".center h1").click();
    //finish this with finding the elements in the form and check their class
  });
});
