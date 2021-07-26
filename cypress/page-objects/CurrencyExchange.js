import Chance from "chance";
const chance = new Chance();

class CurrencyExchange {
    open () {
        cy.visit(Cypress.env('currencyUrl'));
    }

    get currencyFrom () {
        return cy.get('input#midmarketFromCurrency');
    }

    get currencyTo () {
        return cy.get('input#midmarketToCurrency');
    }

    submitButton () {
        cy.get("button[type = 'submit']").click()
    }

    get testResult () {
        return cy.get('p.result__BigRate-sc-1bsijpp-1').invoke('text')
    }


}

export default new CurrencyExchange();