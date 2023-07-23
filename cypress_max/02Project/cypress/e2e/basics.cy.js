/// <reference types="Cypress"/>
//doing the above gives you autocomplete with the various cypress methods and functionalities
//CY is made globally available from cypress as such there isn't a need to import it
//create test suites per page and then inside the various different unit tests you would run
describe("tasks page", () => {
  it("should render the main image", () => {
    cy.visit("http://localhost:5174/");
    //must use .find if you are wanting to look for an element inside of another element, chaining gets will just get you back to where you started, IE as if you did a get at the top of cypress
    cy.get(".main-header").find("img");
  });
  it("should display page title", () => {
    cy.visit("http://localhost:5174/");
    let pageTitle = cy.get(".main-header h1");
    cy.get("h1").should("have.length", 1);
    expect(pageTitle.contains("My Cypress Course Tasks"));
  });
});
