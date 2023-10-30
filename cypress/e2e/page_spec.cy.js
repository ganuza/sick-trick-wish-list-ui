describe('homepage', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      fixture: 'tricksData'
    }).as('getTricks')
    cy.visit('http://localhost:3000/').wait('@getTricks')
  })
  it('should show a title, 4 input fields and a button, and 3 tricks cards', () => {
    cy.get('h1').should('contain', 'Sick Trick Wish List')
    cy.get('form').children().should('have.length', 7)
    cy.get('select').first().should('contain', 'regular')
    cy.get('.trick-name').should('have.attr', 'placeholder', 'Name of Trick')
    cy.get('select').last().should('contain', 'Flat Ground')
    cy.get('.tutorial-link').should('have.attr', 'placeholder', 'Link to Tutorial')
    cy.get('.send-btn').contains('Send It')
    cy.get('.tricks-cont').children().should('have.length', 3)
    cy.get('.card').first().contains('p', 'switch treflip')
    cy.get('.card').first().contains('p', 'Obstacle: flat ground')
    cy.get('.card').first().contains('p', 'Link to Tutorial')
    cy.get('.card').first().contains('p', 'https://www.youtube.com/watch?v=XGw3YkQmNig')
    cy.get('.card').last().contains('p', 'regular frontside 50-50, backside 180 out')
    cy.get('.card').last().contains('p', 'Obstacle: ledge')
    cy.get('.card').last().contains('p', 'Link to Tutorial')
    cy.get('.card').last().contains('p', 'https://www.youtube.com/watch?v=9N9swrZU1HA')
  })
})