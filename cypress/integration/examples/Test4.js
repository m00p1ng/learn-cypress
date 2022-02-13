/// <reference types="Cypress" />

describe('My Forth Test Suite', () => {
  it('My ForthTest case', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]').click()
  })
})
