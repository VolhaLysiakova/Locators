describe('Locators', () => {


    before(() => {
        //cy.visit('https://example.cypress.io/commands/actions')
    })

    it('Test', function () {
        cy.visit(Cypress.env("baseUrl"))
        cy.get("input[id='ipt2']").type("Test text")
        cy.xpath("//input[@id='ipt1']").type("Test2")
        cy.xpath("//button[@id='b4']").click()
        cy.xpath("//b[text()='Product 1']/../../p").should('contain', '200')

    });

})





