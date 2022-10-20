class signupPages {
    entrar() {
        cy.visit('/')
    }
    clicarPraVoce(){
        cy.get(':nth-child(3) > .vr-main-navigation__link').click()
    }
    clicarOndeUsarMeuCartaoVr(){
        cy.get('.vr-hero__actions > .vr-button--negative').click()
    }
    validarMapaDoGoogle(){
        cy.get('.main-section').should('be.visible')
    }
}
export default signupPages;
