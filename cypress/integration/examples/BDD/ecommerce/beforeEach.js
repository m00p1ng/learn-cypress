beforeEach(function () {
  cy.fixture('example', function (dataFixture) {
    this.data = dataFixture
    console.log({dataFixture})
  })
})
