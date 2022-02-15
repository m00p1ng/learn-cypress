/// <reference types="Cypress" />

describe('My fakeTest Test Suite', () => {
  it('My fakeTestTest case', () => {
    cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
    cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
      (req) => {
        req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'

        req.continue((res) => {
          expect(res.statusCode).to.equal(403)
        })
      }
    ).as('dummyUrl')

    cy.get('button.btn.btn-primary').click()
    cy.wait('@dummyUrl')
  })
})
