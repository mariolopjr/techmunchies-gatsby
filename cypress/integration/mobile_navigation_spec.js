describe('Test Mobile Navigation', function() {
  context('iphone-x resolution', function () {
    beforeEach(function () {
      cy.viewport('iphone-x')
    })

    it('Visit Homepage', function() {
      cy.visit('http://localhost:8000')
    })

    it('Verify hamburger menu is displayed and menu not visible', function () {
      cy.get('a[role="button"]').should('be.visible')
      cy.get('a').contains('home').should('not.be.visible')
    })

    it('Display mobile menu and verify it works', function () {
      cy.get('a[role="button"]').click()
      cy.get('a').contains('home').should('be.visible')
    })

    it('Close mobile menu and verify menu not visible', function () {
      cy.get('a[role="button"]').click()
      cy.get('a').contains('home').should('not.be.visible')
    })
  })
})
