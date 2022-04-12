/// <reference types="cypress" />

describe("Accomplishments Dashboard", () => {
    beforeEach(() => {
        cy.visit("/accomplishments")
    })

    it("should display 'inappropriate content' error when text or accomplishment includes 'giraffe'", () => {
        cy.get("[placeholder='Title']").type("This is my accomplishment")
        cy.get("[placeholder='My accomplishment...']").type("I pet a giraffe")
        cy.get("[type='checkbox']").click()
        cy.get("button").click()
        cy.contains("Your content is not appropriate").should("be.visible")
    })

    it("should display 'inappropriate content' error when text or accomplishment includes 'giraffe' with mock", () => {
        cy.intercept("POST", "http://localhost/4000", (request) => {
            request.reply((response) => {
                response.send({
                    message: "Your content is not appropriate"
                })
            })
        })

        cy.get("[placeholder='Title']").type("This is my accomplishment")
        cy.get("[placeholder='My accomplishment...']").type("I pet a giraffe")
        cy.get("[type='checkbox']").click()
        cy.get("button").click()
        cy.contains("Your content is not appropriate").should("be.visible")
    })

    it("should display 'inappropriate content' error when text or accomplishment includes 'giraffe' with mock", () => {
        cy.intercept("POST", "http://localhost/4000", (request) => {
            request.reply((response) => {
                response.send({
                    message: "Your content is not appropriate"
                })
            })
        })

        cy.get("[placeholder='Title']").type("This is my accomplishment")
        cy.get("[placeholder='My accomplishment...']").type("I pet a dog")
        cy.get("[type='checkbox']").click()
        cy.get("button").click()
        cy.contains("This Accomplishment was Successfully Submitted").should("be.visible")
    })
})
