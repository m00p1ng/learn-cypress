import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'

import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage'

const homePage = new HomePage()
const productPage = new ProductPage()

Given('I open ECommerce page', () => {
  cy.visit(Cypress.env('url'))
})

When('I add items to Cart', () => {
  const data = {
    name: 'Bob',
    gender: 'Male',
    productName: [
      'Blackberry',
      'Nokia Edge',
    ],
  }
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
})

And('Validate the total prices', () => {
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
})

Then('select the country submit and verify Thankyou', () => {
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
