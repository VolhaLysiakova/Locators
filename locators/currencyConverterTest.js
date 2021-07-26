import Chance from 'chance'
import CurrencyExchange from "../cypress/page-objects/CurrencyExchange";

it('Currency converter test', function () {

    cy.fixture('currency').then(currency =>{

        let randomCurrency = chance.pickone(currency.rates)

        CurrencyExchange.open()

        CurrencyExchange.currencyFrom
            .type(`${currency.base}{enter}`)

        CurrencyExchange.currencyTo
            .type(randomCurrency.shortName)
            .type('{enter}')

        CurrencyExchange.submitButton()

        CurrencyExchange.testResult.should('contain', randomCurrency.rate)

    })

});



