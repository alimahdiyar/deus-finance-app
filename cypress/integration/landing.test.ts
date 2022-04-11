describe('Landing Page', () => {
  beforeEach(() => cy.visit('/'))
  it('loads swap page', () => {
    cy.get('#mint-wrapper')
    cy.screenshot()
  })
})
