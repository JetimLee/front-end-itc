describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5174/");
    cy.get("li").should("have.length", 6);
  });
});
