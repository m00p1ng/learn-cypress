/// <reference types="Cypress" />

describe('My Seventh Test Suite', () => {
  it('My SevenhTest case', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('#opentab').then((el) => {
      const url = el.prop('href')
      cy.log(url)
      cy.visit(url)
    })
  })
})

