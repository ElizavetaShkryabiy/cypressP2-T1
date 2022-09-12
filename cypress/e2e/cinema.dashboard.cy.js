describe('empty spec', () => {
  const selectors= require('../fixtures/selectors.json');
  it('passes', () => {
    cy.visit('/');
  })
  it('index page loads',()=>{
    cy.get(selectors.pageName).should('be.visible');
  })
  it('days of week are visible',() =>{
    cy.get(selectors.weekDays).should('be.visible').should('have.length',7);
  })
  it('first movie elements are visible', ()=>{
    cy.get(selectors.movieBody).first().should('be.visible');
    cy.get(selectors.poster).first().should('be.visible');
    cy.get(selectors.description).first().should('be.visible');
    cy.get(selectors.movieName).first().should('be.visible');
    cy.get(selectors.synopsis).first().should('be.visible');
    cy.get(selectors.hallTitle).first().should('be.visible');
    cy.get(selectors.seancesList).first().should('be.visible');
    cy.get(selectors.seanceTime).first().should('be.visible');
  })
})