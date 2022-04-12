/// <reference types="cypress" />

describe("Rewards Dashboard", () => {
    beforeEach(() => {
        cy.visit("/rewards")
    })

    // This will make a request to the server and will get all data.
    it("should display a list of rewards", () => {
        cy.get("ul").should("contain", "500 points for drinking 8 cups of water for 7 straight days")
        .and("contain", "850 points for fasting for 5 days straight")
    })

    // This will make a request that will be intercepted and will return the data within rewards.json.
    it("should display a list of rewards with mock", () => {
        cy.intercept("GET", "http://localhost:4000/rewards", {
            fixture: "rewards.json"
        })

        cy.get("ul").should("contain", "500 points for drinking 8 cups of water for 7 straight days")
        .and("contain", "850 points for fasting for 5 days straight")
    })
})
