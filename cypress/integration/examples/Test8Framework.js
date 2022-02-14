/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'

describe('My Eighth Test Suite', () => {
  let data
  before(() => {
    cy.fixture('example').then((fixtureData) => {
      data = fixtureData
    })
  })

  it('My EighthTest case', () => {
    const homePage = new HomePage()
    const productPage = new ProductPage()

    cy.visit(Cypress.env('url'))

    homePage.getEditBox().type(data.name)
    homePage.getGender().select(data.gender)
    homePage.getTwoWayDataBinding().should('have.value', data.name)
    homePage.getEditBox().should('have.attr', 'minlength', '2')
    homePage.getEntrepreneur().should('be.disabled')
    // cy.pause()
    homePage.getShopTab().click()

    data.productName.forEach((name) => {
      cy.selectProduct(name)
    })

    productPage.checkOutButton().click()

    let sum = 0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
      const amount = $el.text()
      let res = amount.split(' ')
      res = parseFloat(res[1].trim())
      sum = sum + res
    }).then(() => {
      cy.log(sum)
    })

    cy.get('h3 strong').then((element) => {
      const amount = element.text()
      let res = amount.split(' ')
      let total = parseFloat(res[1].trim())

      expect(sum).to.equal(total)
    })

    cy.contains('Checkout').click()
    cy.get('#country').type('India')

    Cypress.config('defaultCommandTimeout', 8000)
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({force: true})
    cy.get('input[type="submit"]').click()
    // cy.get('.alert').should('have.text', 'Success! Thank you!')
    cy.get('.alert').then((element) => {
      const actualText = element.text()
      expect(actualText.includes("Success")).to.be.true
    })
  })
})
