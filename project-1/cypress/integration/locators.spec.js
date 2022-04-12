/// <reference types="cypress" />

describe("Locators", () => {
    beforeEach(() => {
        cy.visit("/elements")
    })

    it("locating elements with 'get' command", () => {
        // Getting all elements by tag name:
        cy.get("button")
        cy.get("h3")

        // Getting all elements by className:
        cy.get(".btn-with-class")

        // Getting all elements with specific classes:
        cy.get("[class='Elements-btn btn-with-class']")
        cy.get("[class='Elements-btn btn-with-class more-btn-classes']")
    
        // Getting all elements by id:
        cy.get("#btn-with-id")

        // Getting all elements by specific attribute:
        cy.get("[type='submit']")

        // Getting all elements by tag name AND className:
        cy.get("button.Elements-btn")

        // Getting all elements by tag name AND className AND type attributes:
        cy.get("button.Elements-btn[type='submit']")

        // Getting all elements with specific data test id:
        cy.get("[data-cy='btn-id-1']")
        cy.getByTestId('btn-id-1')
    })

    it("locating elements with contains", () => {
        // Get elements by text:
        cy.contains("Unique Text")
        cy.contains("Not Unique Text")

        // Get elements with selector:
        cy.contains("[type='submit']", "Not Unique Text")
        cy.contains("form", "Not Unique Text")
        cy.get("[type='submit']").contains("Not Unique Text")
    })

    it("locating elements find", () => {
        cy.get("#form-1").find(".btn-1")
        cy.get("#form-1").find(".btn-1")
    })
})
