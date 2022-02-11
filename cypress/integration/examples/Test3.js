/// <reference types="Cypress" />

describe('My Third Test Suite', () => {
  it('My ThirdTest case', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option2', 'option3'])

    cy.get('select').select('option2').should('have.value', 'option2')

    cy.get('#autocomplete').type('ind')

    cy.get('.ui-menu-item div').each(($el, index, $list) => {
      if ($el.text() === 'India') {
        cy.wrap($el).click()
      }
    })

    cy.get('#autocomplete').should('have.value', 'India')
  })
})
