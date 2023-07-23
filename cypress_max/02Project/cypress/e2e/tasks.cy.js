/// <reference types="Cypress"/>

//good note here is that while in unit tests you'll often write as little assertions as possible, in E2E testing there really isn't a reason to limit yourself

describe("tasks management", () => {
  it("should open the modal after clicking 'Add Task' and close the new task modal after clicking the backdrop", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Add Task").click();
    cy.get(".backdrop").click({ force: true });
    cy.get(".modal").should("not.exist");
  });
  it("should open the modal after clicking 'Add Task' and close the new task modal after clicking cancel", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Add Task").click();
    cy.contains("Cancel").click();
    cy.get(".modal").should("not.exist");
  });
  it("should create a new task", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Add Task").click();
    let titleInput = cy.get("#title");
    titleInput.click().type("Something");
    let summaryInput = cy.get("#summary");
    summaryInput.type("Some summary");
    let categorySelector = cy.get("#category");
    categorySelector.select("urgent");
    cy.get(".modal").contains("Add Task").click();
    cy.get(".modal").should("not.exist");
    cy.get(".task").should("have.length", 1);
  });
  it("should create a new task with the provided text", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Add Task").click();
    let titleInput = cy.get("#title");
    titleInput.click().type("Something");
    let summaryInput = cy.get("#summary");
    summaryInput.type("Some summary");
    let categorySelector = cy.get("#category");
    categorySelector.select("urgent");
    cy.get(".modal").contains("Add Task").click();
    cy.get(".modal").should("not.exist");
    cy.get(".task").should("have.length", 1);
    cy.get(".task div h2").should("have.text", "Something");
  });
  it("should validate user input", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Add Task").click();
    cy.get(".modal").contains("Add Task").click();
    cy.contains("Please provide values");
  });
  it("should filter tasks based on selected category", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Add Task").click();
    let titleInput = cy.get("#title");
    titleInput.click().type("Something");
    let summaryInput = cy.get("#summary");
    summaryInput.type("Some summary");
    let categorySelector = cy.get("#category");
    categorySelector.select("urgent");
    cy.get(".modal").contains("Add Task").click();
    cy.get(".modal").should("not.exist");
    cy.get(".task").should("have.length", 1);

    //Get category selector and filter based on categories with expected results
    let taskList = cy.get(".task");
    let filterSelector = cy.get("#filter");
    filterSelector.select("urgent");
    taskList.should("have.length", 1);
    filterSelector.select("moderate");
    cy.get(".task-list").should("not.exist");
    filterSelector.select("urgent");
    taskList.should("have.length", 1);
    filterSelector.select("all");
    taskList.should("have.length", 1);
  });
});
