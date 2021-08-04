import GoogleStore from "../cypress/page-objects/googleStore"
import GoogleCart from "../cypress/page-objects/googleCart"
import {product} from "ramda";

describe('Tests for google store', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        //returning false here prevents Cypress from
        //failing the test
        return false
    })

    before(() => {
        cy.fixture('productSingleColor').then(data => {
            cy.wrap(data).as('productData')
        })

    })

    it('Single color', function () {
        cy.get('@productData').then((productData) =>{
            productData.goods.forEach(product =>{

                let item = {};

                cy.log('GIVEN User is at Accessories page')
                GoogleStore.open()

                cy.log('WHEN user performs search')
                GoogleStore.performSearch(product.name)
                GoogleStore.getProductFromSearch(product.url)

                cy.log('AND user goes to the product page')
                GoogleStore.goToProductPage(product.name)
                GoogleStore.getProductName(item)

                GoogleStore.getProductPrice(item).then(() =>{

                    cy.log('AND user clicks button buy')
                    GoogleStore.clickButtonBuy()

                    cy.log('THEN added product is displayed in the cart')
                    GoogleCart.getProductNameInCart().should('include.text', item.title)

                    cy.log('AND product price is correct')
                    GoogleCart.getProductPriceInCart().should('include.text', item.price)

                    cy.log('AND product quantity is correct')
                    GoogleCart.checkProductQuantity()

                    cy.log('AND total price is correct')
                    GoogleCart.getTotalPrice().should('include.text', item.price)

                })
            })
        })
    })
    after(() => {
        GoogleCart.clearCartAnyCase()
        GoogleCart.checkIfTheCartIsEmpty()
    })
})

