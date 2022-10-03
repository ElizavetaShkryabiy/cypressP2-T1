describe('ticket buying tests',()=>{
    const selectors= require('../fixtures/selectors.json');
    const seats= require('../fixtures/seats.json');
    
    it('should choose and buy some tickets',()=>{
        cy.visit('/');
        cy.get(selectors.tomorrow).click();
        cy.get(selectors.moovieTime).first().click();
        cy.get(selectors.bookingPlaceButton).should('be.disabled');
        seats.forEach(place=>{
            cy.get(`.buying-scheme__wrapper > :nth-child(${place.row}) > :nth-child(${place.seat})`).click();
        });
        cy.get(selectors.bookingPlaceButton).should('not.be.disabled').click();
        cy.get(selectors.successBookingTitle).should('have.text','Вы выбрали билеты:');
        cy.get(selectors.bookingPlaceButton).should('not.be.disabled').click();
        cy.get(selectors.successBookingTitle).should('have.text','Электронный билет');        
    })
})