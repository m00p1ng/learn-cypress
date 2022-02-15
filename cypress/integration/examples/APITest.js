describe('API Test', () => {
  it('API Test', () => {
    cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
      name: 'Learn Appium Automation with Java',
      isbn: 'bcdsss',
      aisle: '22s7',
      author: 'John foe',
    }).then((response) => {
      expect(response.body).to.have.property('Msg', 'successfully added')
    })
  })
})
