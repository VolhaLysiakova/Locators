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
        cy.get('@productData').then((productData) => {
            productData.goods.forEach(product => {

                cy.log('GIVEN User is at Accessories page')
                GoogleStore.open()

                cy.log('WHEN user performs search')
                GoogleStore.performSearch(product.name)
                GoogleStore.getProductFromSearch(product.url)

                cy.log('AND user goes to the product page')
                GoogleStore.goToProductPage(product.name)

                GoogleStore.getProductName().then(productName => {

                    GoogleStore.getProductPrice().then(productPrice => {

                        cy.log('AND user clicks button buy')
                        GoogleStore.clickBuyButton()

                        cy.log('THEN added product is displayed in the cart')
                        GoogleCart.getProductNameInCart().should('include.text', productName)

                        cy.log('AND product price is correct')
                        GoogleCart.getProductPriceInCart().should('include.text', productPrice.replace('From $', ''))

                        cy.log('AND total price is correct')
                        GoogleCart.getTotalPrice().should('include.text', productPrice.replace('From $', ''))
                        
                    })
                })

                cy.log('AND product quantity is correct')
                GoogleCart.checkProductQuantity()

            })
        })
    })

    after(() => {
        GoogleCart.clearCartAnyCase()
        GoogleCart.checkIfTheCartIsEmpty()
    })
})

