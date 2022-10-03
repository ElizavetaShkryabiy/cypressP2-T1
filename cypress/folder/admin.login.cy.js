describe('admin',()=>{
    const selectors= require('../fixtures/selectors.json');
    const accessData= require('../fixtures/accessData.json');
    beforeEach(()=>{
        cy.visit('http://qamid.tmweb.ru/admin/index.php')
    })
    it('successfully logins',()=>{
        cy.login(accessData.login,accessData.password);    
        cy.get(selectors.hallControllList).should('be.visible');
                
    })
    it('should have empty email field warning',()=>{
        cy.get(selectors.loginButton).click();
        cy.get(selectors.emailField).then(($el) => $el[0].checkValidity())
        .should("be.false"); 
    })
    it('should have empty password field warning',()=>{        
        cy.get(selectors.emailField).type(accessData.login);
        cy.get(selectors.loginButton).click();
        cy.get(selectors.passwordField).then(($el) => $el[0].checkValidity())
        .should("be.false"); 
    })
    it('should have wrong email field warning',()=>{
        cy.login(accessData.password,accessData.password);
        cy.get(selectors.emailField).then(($el) => $el[0].checkValidity())
        .should("be.false"); 
    })
})