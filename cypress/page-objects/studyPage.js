class StudyPage{

    open(){
        cy.visit(Cypress.env("baseUrl"));
    }

    get input1(){
        return cy.xpath("//input[@id='ipt1']");
    }

    get input2(){
        return cy.get("input#ipt2");
    }

    fillInputs(){
        this.input1.type("I need to go to Bali");
        this.input2.type("...immediately");
    }

    get button4(){
        return cy.xpath("//button[@id='b4']");
    }

    clickButton(){
        this.button4.click();
    }

    get productPrice(){
        return cy.xpath("//b[text()='Product 1']/../../p");
    }

    compareProductPrice(){
        this.productPrice.should('contain', 200);
    }

    status200(){
        cy.request('GET', Cypress.env("baseUrl")).then(response =>{
            expect(response.status).to.eq(200)
        })
    }

}

export default new StudyPage()