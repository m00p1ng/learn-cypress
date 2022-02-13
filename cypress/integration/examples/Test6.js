/// <reference types="Cypress" />

describe('My Sixth Test Suite', () => {
  it('My SixthTest case', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    cy.url().should('include', 'top')
  })
})
