import {equal} from "uri-js";

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

    fillInputs(textToFill1, textToFill2){
        this.input1.type(`${textToFill1}`);
        this.input2.type(`${textToFill2}`);
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

    get dropdownThreeThings(){
        return cy.get('select#sel1');
    }

    chooseElementFromDropdown(){
        this.dropdownThreeThings.select('Bears').should('have.value', 'first')
        this.dropdownThreeThings.select('Beets').should('have.value', 'second')
        this.dropdownThreeThings.select('Battlestar Galactica').should('have.value', 'third')
    }

}

export default new StudyPage()